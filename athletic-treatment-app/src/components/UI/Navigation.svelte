<script>
	//import LogoImage from "../../../static/assets/verdi-nav-logo.jpg" TODO add logo
	
	let showMobileMenu = false;

	function toggleMobileMenu() {
		if (showMobileMenu) {
			showMobileMenu = false;
			return;
		}
		showMobileMenu = true;
	}
</script>

<div class="h-25 bg-white">
	<nav class="bg-white shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			
			<div class="flex justify-between">
				<div class="pl-4">
					<!-- Website Logo -->
					<a href="/" class="flex items-center py-2">
						<img src="" alt="Logo" class="h-12 sm:h-18">
					</a>
				</div>
				<!-- Primary Navbar items -->
				<div class="hidden md:flex items-center space-x-1 pr-4">
					<a href="#about-us" class="py-4 px-2 text-gray-500 border-b-4 hover:border-green-500 font-semibold">Om oss</a>
					<a href="#products" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Produkter</a>
					<a href="#clients" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Kunder</a>
					<a href="#contact" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Kontakta oss</a>
				</div>
				
				<!-- Mobile menu button -->
				<div class="md:hidden flex items-center">
					<button class="outline-none mobile-menu-button" on:click={toggleMobileMenu}>
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
						x-show="!showMenu"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						>
						<path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
		</div>		
	</div>
	<!-- mobile menu -->
	<div class="{showMobileMenu ? '' : 'hidden'} mobile-menu">
		<ul class="">
			<li><a href="#about-us" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" on:click={toggleMobileMenu}>Om oss</a></li>
			<li><a href="#products" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" on:click={toggleMobileMenu}>Produkter</a></li>
			<li><a href="#clients" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" on:click={toggleMobileMenu}>Kunder</a></li>
			<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" on:click={toggleMobileMenu}>Kontakta oss</a></li>
		</ul>
	</div>
</nav>
</div>


