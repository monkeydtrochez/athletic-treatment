<script>
	import Navigation from "../components/UI/Navigation.svelte";
	import Footer from "../components/UI/Footer.svelte";
	import HeroBanner from "../components/HeroBanner.svelte";
	import About from "../components/About.svelte";
	import Products from "../components/Products.svelte";
	import Clients from "../components/Clients.svelte";
	import Border from "../components/UI/Border.svelte";
	import Contact from "../components/Contact.svelte";
	import ContactForm from "../components/Forms/ContactForm.svelte";
	import { initializeClients } from "../services/clientService";
	import { initializeProducts } from "../services/productService";
	import { fetchStringValues } from "../services/stringValueService";
	import { stringValues } from "../stores/strings-store";
	import { onMount } from 'svelte';
	import { initializeApp } from 'firebase/app';
	import { getDatabase } from "firebase/database";
	import { getVariables } from "../helpers/environmentVariables";
	
	const firebaseConfig = getVariables();
	console.log("Initialize app")
	const app = initializeApp(firebaseConfig);
	
	onMount(async () => {
		console.log("Initializing data")
		try {
			const database = getDatabase(app);
			await initializeProducts(database);
			await initializeClients(database);
			await fetchStringValues(database).then((result) => {
				$stringValues = result;
			}).catch((error) => {
				console.log(error);
			})
			
		} catch	(error) {
			console.log("Error occured: ", error);
		};
	});
	
	let showContactForm = null;
	
	function navigateTo(event) {
		console.log(event.detail)
	}
	
	function openContactForm() {
		showContactForm = true;
	}
	
	function closeContactForm() {
		showContactForm = null;
	}
</script>

<style>
	:global(HTML) {
		scroll-behavior: smooth;
	}
</style>

<svelte:head>
<title>Verdi Products</title>
</svelte:head>

<section id="navigation">
	<Navigation on:navigate={navigateTo}/>
</section>

<section id="hero">
	<HeroBanner />
</section>

<section id="about-us">
	<About aboutAreaTexts={$stringValues.aboutAreaTexts}/>
</section>

<Border />

<section id="products">
	<Products productAreaTexts={$stringValues.productAreaTexts} />
</section>

<Border />

<section id="clients">
	<Clients clientAreaTexts={$stringValues.clientAreaTexts}/>
</section>

<section id="contact">
	<Contact contactAreaTexts={$stringValues.contactAreaTexts} on:click={openContactForm}/>
</section>


<section id="footer">
	<Footer on:navigate={navigateTo}/>
</section>

{#if showContactForm === true}
<ContactForm rightBtnText="Skicka" leftBtnText="Avbryt" on:cancel={closeContactForm} />
{/if}