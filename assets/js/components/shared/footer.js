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
                                <div class="space-y-2">
                                    <span class="font-mono text-[9px] uppercase tracking-wider text-brand-light/40 block">// London Office, uk</span>
                                    <p class="font-body text-xs text-brand-light/70 leading-relaxed font-light tracking-wide">
                                        71-75 Shelton Street, Covent Garden,<br />
                                        London, WC2H 9JQ, United Kingdom
                                    </p>
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
