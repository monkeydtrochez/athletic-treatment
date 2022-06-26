<script>
    import {createEventDispatcher} from "svelte";

    let dispatch = createEventDispatcher();

    export let btnText;
    export let disabled = false;
    export let btnType = "button";
    export let href = null;
</script>

{#if href}
    <a href="{href}" class="disabled:bg-opacity-50  bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide border border-white">{btnText}</a>
{:else}
<button disabled={disabled} type={btnType} class="disabled:bg-opacity-50  bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide border border-white"
on:click={() => dispatch('click')}>
    {btnText}
</button>
{/if}