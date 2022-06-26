<script>
    import {createEventDispatcher} from "svelte";
    import {notEmpty, isValidEmail} from "../../helpers/formValidation";
    import Modal from "../UI/Modal.svelte";
    import Button from "../UI/Button.svelte";
    import Input from "../UI/Input.svelte";
    
    let dispatch = createEventDispatcher();
    
    export let leftBtnText;
    export let rightBtnText;
    
    let name = "";
    let number = "";
    let company = "";
    let emailAddress = "";
    
    $: isNameValid = !notEmpty(name);
    $: isNumberValid = !notEmpty(number);
    $: isCompanyValid = !notEmpty(company);
    $: isEmailValid = !notEmpty(emailAddress) && isValidEmail(emailAddress);
    $: isFormValid = isNameValid && isNumberValid && isCompanyValid && isEmailValid;
    
    function closeModal() {
        dispatch('cancel');
    }
    
    function submitForm() {
        let myForm = document.getElementById("contactForm");
        let formData = new FormData(myForm);
        fetch("/", {
            method: 'POST',
            body: new URLSearchParams(formData).toString(),
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then(res => {
            if(!res.ok) {
                throw new Error("Something went wrong!", res);
            }
        }).catch(err => {
            console.log(err);
        });
        
        dispatch('cancel');
    }
</script>

<Modal on:cancel>
    <form class="w-full max-w-lg" id="contactForm" name="contact-form" netlify method="POST" on:submit|preventDefault={submitForm} >
        <input type="hidden" name="form-name" value="contact-form" />
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <Input 
                id="name" 
                label="Namn" 
                value={name}
                isValid={isNameValid} 
                errorMessage="Du måste ange ditt namn" 
                isMandatoryField={true}
                on:input={event => (name = event.target.value)} /> 
            </div>
            <div class="w-1/2 px-3 mb-6 md:mb-0">
                <Input 
                id="number" 
                label="Nummer" 
                value={number}
                isValid={isNumberValid} 
                errorMessage="Du måste ange ett telefonnummer" 
                isMandatoryField={true}
                on:input={event => (number = event.target.value)} />
            </div>
            <div class="w-full px-3 mb-6 md:mb-0">
                <Input 
                id="company" 
                label="Butik/Företag" 
                value={company}
                isValid={isCompanyValid} 
                errorMessage="Du måste ange butik/företag" 
                isMandatoryField={true}
                on:input={event => (company = event.target.value)} />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <Input 
                id="email" 
                label="Mejladress" 
                value={emailAddress}
                isValid={isEmailValid} 
                errorMessage="Du måste ange en giltig mejladress" 
                isMandatoryField={true}
                on:input={event => (emailAddress = event.target.value)} />
            </div>
        </div>
    </form>
    <div slot="footer" class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <Button btnType="submit" btnText={rightBtnText} disabled={!isFormValid} on:click={submitForm}/>
        <Button btnText={leftBtnText} on:click={closeModal}/>
    </div>
</Modal>