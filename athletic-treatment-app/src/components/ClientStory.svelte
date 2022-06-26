<script>
    export let clientLogo;
    export let altText;
    export let clientName;
    export let clientReview;
</script>

<div class="w-full sm:w-1/2 md:w-1/3 flex flex-col
items-center justify-center md:h-64
border-gray-300 border-r border-b hover:shadow-md hover:border-0 bg-white transition-normal hover:show-child">
<div class="mt-8 w-12 h-12 rounded-full">
    <img src="../../../assets/clientAssets/{clientLogo}" alt="{altText}">
</div>
<h3 class="pb-8 mt-4 font-bold">{clientName}</h3>
{#if clientReview}
<p class="mt-4 text-center text-sm text-gray-700 leading-5 px-6 hidden hover:block">
    {clientReview}
</p>
{/if}
</div>