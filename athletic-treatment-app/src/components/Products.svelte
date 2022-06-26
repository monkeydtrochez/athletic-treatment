<script>
    import productsStore from "../stores/products-store";
    import Product from "../components/Product.svelte";
    import {onDestroy} from 'svelte';
    
    export let productAreaTexts = {}
    let loadedProducts;
    let unsubscribeProducts;
    
    unsubscribeProducts = productsStore.subscribe(data => {
        loadedProducts = data;
    });
    
    onDestroy(() => {
        if(unsubscribeProducts) {
            unsubscribeProducts();
        }
    }); 
</script>

{#if loadedProducts.length !== 0}
<div class="w-full flex justify-center mb-3">
    <div class="text-gray-900 md:mt-0 m-0 sm:w-4/12/12 md:w-6/12 lg:w-6/12 leading-normal">
        <h1 class="pb-8 uppercase font-bold tracking-wide">{productAreaTexts.intro}</h1>
        {#each loadedProducts as product}
        <Product
        title={product.title}
        name={product.name}
        paragraph1={product.paragraph1}
        paragraph2={product.paragraph2}
        paragraph3={product.paragraph3}
        />
        {/each}
        <p class="leading-normal mt-4 mb-4 font-bold text-gray-700 text-center">
            {productAreaTexts.outro}
        </p>
    </div>
</div>
{/if}

<style lang="css" scoped>
    h1 {
        @apply text-center;
    }
</style>