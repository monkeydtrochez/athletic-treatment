<script>
    import ProductImg1 from "../../static/assets//products/produkt-bild-1.jpg";
    import ProductImg2 from "../../static/assets/products/produkt-bild-2.jpg";
    import ProductImg3 from "../../static/assets/products/new-product-image-3.jpg";
    
    export let title;
    export let name;
    export let paragraph1;
    export let paragraph2;
    export let paragraph3;
    
</script>


<div class="my-0 font-sans">
    <div class="w-1/2 h-1/2 flex justify-between">
        <img src="{ProductImg1}" alt="arm-tag" class="h-1/2 mr-px rounded-3xl">
        <img src="{ProductImg2}" alt="arm-tag" class="h-1/2 ml-px rounded-3xl">
    </div>
    <div class="mt-4">
        <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-center">{title}</h1>
        <p class="leading-normal mb-4 mx-2 text-gray-700">
            {paragraph1}
            <br/>
            {paragraph2}
            <br/>
            {paragraph3}</p>
            <div class="w-1/2 mx-auto" >
                <img src="{ProductImg3}" alt="arm-tag" class="rounded-3xl">
            </div>
        </div>
    </div>