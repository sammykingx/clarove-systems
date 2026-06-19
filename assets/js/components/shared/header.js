import { BaseComponent } from "../baseComponents.js";

export class AppHeader extends BaseComponent {
    connectedCallback() {
        // custom project initializer

        this.render(`
            <div x-data="{ isScrolled: false, mobileMenuOpen: false }" @scroll.window="isScrolled = (window.scrollY > 20) ? true : false" class="relative">
                <header 
                    :class="isScrolled ? 'border-b border-brand-dark/10 bg-brand-light/80 backdrop-blur-md' : 'bg-transparent'"
                    class="fixed top-0 left-0 z-40 w-full transition-all duration-300"
                    >
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="flex h-20 items-center justify-between">
                            <div class="flex shrink-0 items-center">
                                <a href="#" class="flex items-center group">
                                    <!-- Premium Image Asset Rendering Platform Component -->
                                    <div class="relative h-11 w-11 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105">
                                        <img src="/assets/images/clarove-favicon.png" alt="Clarove Hexagon Logo Icon" class="h-full w-full object-contain" />
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="font-display text-xl font-semibold tracking-tight text-brand-dark transition-colors duration-300 group-hover:text-brand-gold">Clarove</span>
                                        <span class="text-[10px] uppercase tracking-widest text-brand-dark/60 group-hover:text-brand-dark -mt-1">Systems Limited</span>
                                    </div>
                                </a>
                            </div>
                            <nav class="hidden md:flex items-center gap-8">
                                <a href="#" class="group font-display text-sm font-semibold text-brand-dark transition-colors duration-300 relative py-1">
                    <span>Home</span>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                                <a href="#about" class="group font-display text-sm font-semibold text-brand-dark/60 hover:text-brand-dark transition-colors duration-300 relative py-1">
                                <span>About Us</span>
                                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                                <a href="#services" class="group font-display text-sm font-semibold text-brand-dark/60 hover:text-brand-dark transition-colors duration-300 relative py-1">
                                <span>Services</span>
                                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                                <a href="#solutions" class="group font-display text-sm font-semibold text-brand-dark/60 hover:text-brand-dark transition-colors duration-300 relative py-1">
                                <span>Solutions</span>
                                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                                <a href="#insights" class="group font-display text-sm font-semibold text-brand-dark/60 hover:text-brand-dark transition-colors duration-300 relative py-1">
                                <span>Insights</span>
                                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                            </nav>
                            <div class="hidden md:flex items-center gap-4">
                                <a href="#contact" class="inline-flex items-center justify-center bg-brand-dark px-5 py-2.5 font-display text-sm font-semibold text-brand-light transition-all duration-300 hover:bg-brand-green-muted shadow-sm hover:shadow-md hover:-translate-y-0.5 rounded-sm">
                                Get Started
                                </a>
                            </div>
                            <div class="flex md:hidden">
                                <button 
                                    @click="mobileMenuOpen = true" 
                                    type="button" 
                                    class="inline-flex items-center justify-center p-2 text-brand-dark/80 hover:text-brand-gold transition-colors duration-200"
                                    >
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="h-20"></div>
                <div 
                    class="relative z-50" 
                    x-show="mobileMenuOpen" 
                    role="dialog" 
                    aria-modal="true"
                    x-cloak
                >
                    <div 
                        x-show="mobileMenuOpen"
                        x-transition:enter="transition-opacity ease-out duration-300"
                        x-transition:enter-start="opacity-0"
                        x-transition:enter-end="opacity-100"
                        x-transition:leave="transition-opacity ease-in duration-200"
                        x-transition:leave-start="opacity-100"
                        x-transition:leave-end="opacity-0"
                        class="fixed inset-0 bg-brand-dark/50 backdrop-blur-sm"
                        @click="mobileMenuOpen = false"
                    ></div>
                    <div 
                        class="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-brand-light p-6 shadow-2xl flex flex-col justify-between border-l border-brand-dark/5"
                        x-show="mobileMenuOpen"
                        x-transition:enter="transition ease-in-out duration-300 transform"
                        x-transition:enter-start="translate-x-full"
                        x-transition:enter-end="translate-x-0"
                        x-transition:leave="transition ease-in-out duration-300 transform"
                        x-transition:leave-start="translate-x-0"
                        x-transition:leave-end="translate-x-full"
                        @keydown.window.escape="mobileMenuOpen = false"
                    >
                        <div>
                            <div class="flex items-center justify-between pb-6 border-b border-brand-dark/10">
                                <div class="flex shrink-0 items-center">
                                    <a href="#" class="flex items-center group">
                                        <!-- Premium Image Asset Rendering Platform Component -->
                                        <div class="relative h-11 w-11 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105">
                                            <img src="/assets/images/clarove-favicon.png" alt="Clarove Hexagon Logo Icon" class="h-full w-full object-contain" />
                                        </div>
                                        <div class="flex flex-col">
                                            <span class="font-display text-xl font-semibold tracking-tight text-brand-dark transition-colors duration-300 group-hover:text-brand-gold">Clarove</span>
                                            <span class="text-[10px] uppercase tracking-widest text-brand-dark/60 group-hover:text-brand-dark -mt-1">Systems Limited</span>
                                        </div>
                                    </a>
                                </div>
                                <button 
                                    @click="mobileMenuOpen = false" 
                                    type="button" 
                                    class="rounded-md p-2 text-brand-dark/60 hover:text-brand-dark hover:bg-brand-dark/5 transition-all duration-200"
                                    >
                                    <span class="sr-only">Close menu</span>
                                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <nav class="mt-8 space-y-2">
                                <a href="#" @click="mobileMenuOpen = false" class="group flex items-center justify-between rounded-sm px-3 py-2.5 text-base font-semibold font-display text-brand-dark hover:bg-brand-dark/5 transition-all duration-200">
                                <span class="group-hover:text-brand-gold transition-colors duration-200">Home</span>
                                <span class="text-brand-gold opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">&rarr;</span>
                                </a>
                                <a href="#about" @click="mobileMenuOpen = false" class="group flex items-center justify-between rounded-sm px-3 py-2.5 text-base font-semibold font-display text-brand-dark/70 hover:bg-brand-dark/5 transition-all duration-200">
                                <span class="group-hover:text-brand-dark transition-colors duration-200">About Us</span>
                                <span class="text-brand-dark opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">&rarr;</span>
                                </a>
                                <a href="#services" @click="mobileMenuOpen = false" class="group flex items-center justify-between rounded-sm px-3 py-2.5 text-base font-semibold font-display text-brand-dark/70 hover:bg-brand-dark/5 transition-all duration-200">
                                <span class="group-hover:text-brand-dark transition-colors duration-200">Services</span>
                                <span class="text-brand-dark opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">&rarr;</span>
                                </a>
                                <a href="#solutions" @click="mobileMenuOpen = false" class="group flex items-center justify-between rounded-sm px-3 py-2.5 text-base font-semibold font-display text-brand-dark/70 hover:bg-brand-dark/5 transition-all duration-200">
                                <span class="group-hover:text-brand-dark transition-colors duration-200">Solutions</span>
                                <span class="text-brand-dark opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">&rarr;</span>
                                </a>
                                <a href="#insights" @click="mobileMenuOpen = false" class="group flex items-center justify-between rounded-sm px-3 py-2.5 text-base font-semibold font-display text-brand-dark/70 hover:bg-brand-dark/5 transition-all duration-200">
                                <span class="group-hover:text-brand-dark transition-colors duration-200">Insights</span>
                                <span class="text-brand-dark opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">&rarr;</span>
                                </a>
                            </nav>
                        </div>
                        <div class="border-t border-brand-dark/10 pt-6">
                            <a href="#contact" @click="mobileMenuOpen = false" class="block w-full text-center bg-brand-dark px-4 py-3 font-display text-sm font-semibold text-brand-light transition-colors duration-300 hover:bg-brand-green-muted rounded-sm shadow-sm">
                            Get Started
                            </a>
                            <div class="mt-4 text-center">
                                <p class="text-[11px] uppercase tracking-widest text-brand-dark/40">&copy; 2026 Clarove Systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        );
    }
}
