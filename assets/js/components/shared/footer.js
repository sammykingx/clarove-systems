import { BaseComponent } from "../baseComponents.js";


export class AppFooter extends BaseComponent {
    connectedCallback() {
        const year = new Date().getFullYear();

        this.render(
            `<footer data-aos="fade" data-aos-duration="1400" data-aos-anchor-placement="top-bottom" class="relative bg-brand-dark text-brand-light/80 pt-28 pb-12 overflow-hidden border-t border-brand-light/10">
                <div class="absolute inset-0 z-0 select-none pointer-events-none mix-blend-luminosity">
                    <img 
                        src="/assets/images/team-congratulations.jpg" 
                        alt="Clarove Systems Team Celebrating Milestone Win" 
                        class="w-full h-full object-cover object-center opacity-55"
                    />
                    <div class="absolute inset-0 bg-linear-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/90"></div>
                    <div class="absolute inset-0 bg-microgrid-dark opacity-20"></div>
                </div>

                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <!-- TWO-COLUMN RE-ARRANGED LUXURY LAYOUT GRID -->
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20 border-b border-brand-light/10">
                        
                        <!-- LEFT COLUMN: Brand Block Architecture (Spans 5 Columns) -->
                        <div class="lg:col-span-5 space-y-8 flex flex-col justify-between">
                            <div class="space-y-4">
                                <p class="font-display text-2xl font-black tracking-tight text-brand-light">
                                    Clarove<span class="text-brand-gold font-light">Systems</span>
                                </p>
                                <div class="h-px w-12 bg-brand-gold/40"></div>
                                <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-light/40 leading-relaxed">
                                    Clearly crafted, precisely built.
                                </p>
                            </div>

                            <!-- Isolated Encrypted Communication Anchor -->
                            <div class="space-y-2 pt-6 lg:pt-0">
                                <span class="font-mono text-[9px] uppercase tracking-widest text-brand-gold block">// Get in touch</span>
                                <a href="mailto:info@clarovesystems.com" class="font-display text-xl font-medium tracking-tight text-brand-light hover:text-brand-gold transition-colors duration-300 block">
                                    info@clarovesystems.com
                                </a>
                                <span class="font-mono text-[9px] text-emerald-500 flex items-center gap-1.5">
                                    <span class="w-1 h-1 rounded-full bg-green-400 animate-pulse"></span>
                                    We typically reply within 24 hours
                                </span>
                            </div>
                        </div>

                        <!-- RIGHT COLUMN: Multi-Grid Structured Directory (Spans 7 Columns) -->
                        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pl-12 lg:border-l lg:border-brand-light/5">
                            
                            <!-- Sub-Col 1: Corporate Node Locations -->
                            <div class="space-y-8">
                                <div class="space-y-2">
                                    <span class="font-mono text-[9px] uppercase tracking-wider text-brand-gold/80 block">// Lagos Office, ng</span>
                                    <p class="font-body text-xs text-brand-light/70 leading-relaxed font-light tracking-wide">
                                        12 Ikoyi Road, Kingsway Towers,<br />
                                        Ikoyi, Lagos, Nigeria
                                    </p>
                                </div>

                                <div class="space-y-3">
                                    <span class="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-light/40 block">// System Channels</span>
                                    <div class="flex items-center gap-3">

                                        <!-- X / Twitter -->
                                        <a href="#" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-white-2 border border-brand-light/10 rounded-xl text-brand-light/60 hover:text-brand-gold hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all duration-300 group" aria-label="Follow Clarove Systems on X">
                                            <svg class="w-4 h-4 transform group-hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                            </svg>
                                        </a>

                                        <!-- LinkedIn -->
                                        <a href="#" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-white-2 border border-brand-light/10 rounded-xl text-brand-light/60 hover:text-brand-gold hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all duration-300 group" aria-label="Connect with Clarove Systems on LinkedIn">
                                            <svg class="w-4 h-4 transform group-hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>

                                        <!-- GitHub -->
                                        <a href="#" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-white-2 border border-brand-light/10 rounded-xl text-brand-light/60 hover:text-brand-gold hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all duration-300 group" aria-label="View Clarove Systems on GitHub">
                                            <svg class="w-4 h-4 transform group-hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- Sub-Col 2: Refined Legal Framework Index -->
                            <div class="space-y-4">
                                <span class="font-mono text-[9px] uppercase tracking-wider text-brand-light/40 block">// Legal</span>
                                <nav class="flex flex-col space-y-3.5">
                                    <a href="/privacy" class="font-mono text-xs tracking-tight text-brand-light/60 hover:text-brand-gold transition-colors duration-300 flex items-center justify-between group">
                                        <span>Privacy Policy</span>
                                        <span class="text-brand-light/20 group-hover:text-brand-gold transition-colors font-sans">&rarr;</span>
                                    </a>
                                    <a href="/terms" class="font-mono text-xs tracking-tight text-brand-light/60 hover:text-brand-gold transition-colors duration-300 flex items-center justify-between group">
                                        <span>Terms of Service</span>
                                        <span class="text-brand-light/20 group-hover:text-brand-gold transition-colors font-sans">&rarr;</span>
                                    </a>
                                    <a href="/security" class="font-mono text-xs tracking-tight text-brand-light/60 hover:text-brand-gold transition-colors duration-300 flex items-center justify-between group">
                                        <span>Infrastructure Security</span>
                                        <span class="text-brand-light/20 group-hover:text-brand-gold transition-colors font-sans">&rarr;</span>
                                    </a>
                                </nav>
                            </div>

                        </div>
                    </div>

                    <!-- BOTTOM METRIC ROW: Copyright Stamp & Current Year Verification -->
                    <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-widest text-brand-light/30">
                        <div class="flex items-center gap-2">
                            <span>&copy; ${year} CLAROVE SYSTEMS LIMITED. ALL RIGHTS RESERVED.</span>
                        </div>
                        <div class="flex items-center gap-2 text-brand-light/20 select-none">
                            <span>Trusted by businesses across Nigeria, the UK & beyond</span>
                        </div>
                    </div>

                </div>
            </footer>`
        );
    }
}
