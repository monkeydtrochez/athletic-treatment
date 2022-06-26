<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				errorMessage: `${status}: ${error.message}`,
				status: status
			}
		};
	}
</script>

<script>
	import Button from "../components/UI/Button.svelte";
	export let status;
	export let errorMessage;
	console.log(`Error: ${errorMessage}`)
</script>

<svelte:head>
<title>{status}</title>
</svelte:head>

<div id="page-content" class="h-screen w-screen flex justify-center items-center">
	<div class="grid grid-rows-2 grid-flow-col gap-4">

		<div class="row-start-1 col-span-1">
			<h2 class="text-9xl font-bold text-gray-700">{status}</h2>
		</div>

		<div class="row-start-1 border-l-4 border-gray-300"></div>

		<div class="row-start-1 self-end">
			<p class="text-6xl">Sidan kunde inte hittas</p>
			<p class="text-3xl align-text-bottom">Tryck på knappen för att gå till startsidan.</p>
		</div>

		<div class="row-start-2 col-start-3 justify-self-end my-4">
			<Button href="/" btnText="Start"/>
		</div>
	</div>
</div>