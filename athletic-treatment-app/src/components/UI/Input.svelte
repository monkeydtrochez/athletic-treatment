
<script>
    export let id;
    export let label;
    export let value;
    export let errorMessage;
    export let isValid;
    export let isMandatoryField;

    let touched = false;
</script>

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-{id}">
    {#if isMandatoryField && !isValid}*{/if} {label}
</label>
<input class:border-red-500={!isValid && touched} on:input value={value} on:blur={() => touched = true}
class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name={id} id="grid-{id}" type="text" >

{#if errorMessage && !isValid && touched}
<p class="text-red-500 text-xs italic">{errorMessage}</p>
{/if}
