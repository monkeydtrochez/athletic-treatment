<script>
    import {onMount} from 'svelte';
    import { initializeApp } from 'firebase/app';
    import { getDatabase } from "firebase/database";
    import { getVariables } from "../helpers/environmentVariables";
    
    import HeroBanner from "../components/HeroBanner.svelte";
    import Navigation from "../components/UI/Navigation.svelte";

    import { fetchStringValues } from "../services/stringValueService";
    import { initializeServices } from "../services/servicesService";
    import { initializeEmployees } from "../services/employeeService";

    import { stringValues } from "../stores/strings-store.js";
	
    
    const firebaseConfig = getVariables();
    console.log("Initialize app");
    const app = initializeApp(firebaseConfig);
    
    onMount(async () => {
        console.log("Initializing data");
        try {
            const database = getDatabase(app);
            await initializeServices(database); // products är nu services Tjänster
            await initializeEmployees(database); // clients är nu employees medarbetare
            await fetchStringValues(database).then((result) => {
                $stringValues = result;
            }).catch((error) => {
                console.log(error);
            });
            
        } catch (error) {
            console.log("Error occured: ", error);
        }
    });

    function navigateTo(event) {
        console.log(event.detail)
    }

// TODO: Navigation
// TODO: Fixa att läsa in strinvalues
</script>

<svelte:head>
<title>Athletic Treatment</title>
</svelte:head>

<section class="navigation">
    <Navigation on:navigate={navigateTo}/>
</section>

<section id="hero">
    <HeroBanner />
</section>


<!-- <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    
    <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p class="text-3xl text-gray-700 font-bold mb-5">
            Welcome!
        </p>
        <p class="text-gray-500 text-lg">
            SvelteKit and Tailwind CSS in action
        </p>
    </div> -->