<script>
	import ClientStory from "./ClientStory.svelte";
	import clientStore from "../stores/clients-store";
	import {onDestroy} from 'svelte';
	
	export let clientAreaTexts = {};
	let loadedClients;
	let unsubscribe;
	
	unsubscribe = clientStore.subscribe(items => {
		loadedClients = items;
	});

	onDestroy(() => {
		if(unsubscribe) {
			unsubscribe();
		}
	});
</script>

{#if loadedClients.length !== 0}
<div class="text-center">
	<h1 class="font-bold uppercase tracking-wide">{clientAreaTexts.title}</h1>
	<p class="leading-normal mb-4 max-w-sm m-auto">{clientAreaTexts.intro}</p>
</div>
<div class="flex flex-col sm:flex-row flex-wrap my-8">
	{#each loadedClients as item}
	<ClientStory
	clientName={item.clientName}
	clientLogo={item.clientLogo}
	altText={item.altText}
	clientReview={item.clientStory.review}
	/>
	{/each}
</div>
{/if}
