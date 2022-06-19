<script>
    import Social from "./Social.svelte";
    import LogoImage from "../../../static/assets/verdi-footer-logo.jpg"

</script>

<footer class="font-sans bg-black text-white py-8 px-4">
    <div class="mx-auto max-w-xl flex justify-between">
        <ul class="text-sm text-gray-700 list-none p-0 md:flex">
            <li> <a href="/" class="block mr-4">
                <img src="{LogoImage}" class="h-10 sm:h-20" alt="logo">
            </a></li>
            <li><a href="#about-us" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"  >Om oss</a></li>
            <li><a href="#products" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"  >Produkter</a></li>
            <li><a href="#clients" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline" >Kunder</a></li>
            <li><a href="#contact" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline" >Kontakt</a></li>
        </ul>
        <Social />
    </div>
    <p class="inline-block py-2 px-3 text-gray-700 text-xs"> ©2021 Verdi Products</p>
</footer>