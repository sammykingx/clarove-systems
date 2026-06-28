import { BaseComponent } from "./baseComponents,.js";


export class productListTable extends BaseComponent {
    connectedCallback() {
        this.render(`
            <!-- PRISTINE VERIFICATION TABLE: Fine-grained Telemetry Logs -->
                <div 
                    class="mt-20 space-y-4"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="cubic-bezier(0.16, 1, 0.3, 1)"
                >
                    <div class="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-brand-light/40 px-4">
                        <span>// WHAT WE'VE BUILT</span>
                        <span>ACROSS INDUSTIRES</span>
                    </div>

                    <div class="w-full overflow-x-auto border border-brand-light/10 rounded-xl bg-brand-dark/40 backdrop-blur-md">
                        <table class="w-full min-w-175 text-left border-collapse">
                            <thead>
                                <tr class="border-b border-brand-light/10 bg-white/2 font-mono text-[10px] uppercase tracking-wider text-brand-gold/80">
                                    <th class="py-4 px-6 font-medium">Framework Registry</th>
                                    <th class="py-4 px-6 font-medium">Core Stack Paradigm</th>
                                    <th class="py-4 px-6 font-medium">Operational Scope</th>
                                    <th class="py-4 px-6 font-medium text-right">System Status</th>
                                </tr>
                            </thead>
                            <tbody class="font-mono text-xs divide-y divide-brand-light/5 text-brand-light/70">
                                <tr class="hover:bg-white/1 transition-colors duration-200">
                                    <td class="py-4 px-6 font-display font-medium text-brand-light">Clarove Systems Limited</td>
                                    <td class="py-4 px-6">Django, Custom APIs, Cloud Architecture</td>
                                    <td class="py-4 px-6">Websites, Mobile Apps, Full-Stack SaaS Platforms</td>
                                    <td class="py-4 px-6 text-right text-emerald-400">Active Node</td>
                                </tr>
                                <tr class="hover:bg-white/1 transition-colors duration-200">
                                    <td class="py-4 px-6 font-display font-medium text-brand-light">The Servio Platform</td>
                                    <td class="py-4 px-6">Firebase Integration, Live WebSockets, Milestone Escrows</td>
                                    <td class="py-4 px-6">Intermediary Project Management & Secure Professional Fee Escrow</td>
                                    <td class="py-4 px-6 text-right text-brand-gold">v2 Pipeline Active</td>
                                </tr>
                                <tr class="hover:bg-white/1 transition-colors duration-200">
                                    <td class="py-4 px-6 font-display font-medium text-brand-light">Multi-Gateway Infrastructure</td>
                                    <td class="py-4 px-6">Stripe Checkout, Paystack API, Webhook Listeners</td>
                                    <td class="py-4 px-6">Cross-Border Capital Routing (NG & UK Nodes)</td>
                                    <td class="py-4 px-6 text-right text-emerald-400">Production Ready</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <p class="font-mono text-[9px] text-brand-light/20 text-right uppercase tracking-wider">
                        * These are real products and projects not concepts or proposals.
                    </p>
                </div>

                <div 
                    class="mt-20 space-y-4"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="cubic-bezier(0.16, 1, 0.3, 1)"
                >
                    <div class="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-brand-light/40 px-4">
                        <span>// Products We've Built</span>
                        <span>Real. Live. Available to You.</span>
                    </div>

                    <div class="w-full overflow-x-auto border border-brand-light/10 rounded-xl bg-brand-dark/40 backdrop-blur-md">
                        <table class="w-full min-w-175 text-left border-collapse">
                            <thead>
                                <tr class="border-b border-brand-light/10 bg-white/2 font-mono text-[10px] uppercase tracking-wider text-brand-gold/80">
                                    <th class="py-4 px-6 font-medium">Product</th>
                                    <th class="py-4 px-6 font-medium">What It Does</th>
                                    <th class="py-4 px-6 font-medium">Who It's For</th>
                                    <th class="py-4 px-6 font-medium text-right">Availability</th>
                                </tr>
                            </thead>
                            <tbody class="font-mono text-xs divide-y divide-brand-light/5 text-brand-light/70">

                                <!-- Clarové Host -->
                                <tr class="hover:bg-white/1 transition-colors duration-200">
                                    <td class="py-5 px-6">
                                        <p class="font-display font-semibold text-brand-light text-sm">Clarové Host</p>
                                        <p class="text-[10px] text-brand-light/30 mt-0.5 uppercase tracking-wider">Hosting Platform</p>
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/60 leading-relaxed max-w-xs">
                                        We host your website or app and manage everything — uptime, security, updates — so you never need a technical person on staff to keep it running.
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/50 leading-relaxed max-w-xs">
                                        Businesses that want their site always live and secure, without the technical overhead.
                                    </td>
                                    <td class="py-5 px-6 text-right">
                                        <span class="text-emerald-400 font-semibold">● Live</span>
                                    </td>
                                </tr>

                                <!-- Clarové Mail -->
                                <tr class="hover:bg-white/1 transition-colors duration-200">
                                    <td class="py-5 px-6">
                                        <p class="font-display font-semibold text-brand-light text-sm">Clarové Mail</p>
                                        <p class="text-[10px] text-brand-light/30 mt-0.5 uppercase tracking-wider">Email Service</p>
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/60 leading-relaxed max-w-xs">
                                        Professional email on your own domain — hello@yourbusiness.com — set up quickly, no expensive subscriptions, no technical setup required.
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/50 leading-relaxed max-w-xs">
                                        Businesses that want to look professional without paying enterprise email prices.
                                    </td>
                                    <td class="py-5 px-6 text-right">
                                        <span class="text-emerald-400 font-semibold">● Live</span>
                                    </td>
                                </tr>

                                <!-- Clarové Book -->
                                <tr class="hover:bg-white/1 transition-colors duration-200">
                                    <td class="py-5 px-6">
                                        <p class="font-display font-semibold text-brand-light text-sm">Clarové Book</p>
                                        <p class="text-[10px] text-brand-light/30 mt-0.5 uppercase tracking-wider">Booking System</p>
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/60 leading-relaxed max-w-xs">
                                        A booking system you fully own — embed it on your website or share it on social media. Take service bookings with complete control over your client data.
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/50 leading-relaxed max-w-xs">
                                        Salons, consultants, coaches, and clinics that want bookings without handing their client data to a third-party platform.
                                    </td>
                                    <td class="py-5 px-6 text-right">
                                        <span class="text-emerald-400 font-semibold">● Live</span>
                                    </td>
                                </tr>

                                <!-- Servio -->
                                <tr class="hover:bg-white/1 transition-colors duration-200">
                                    <td class="py-5 px-6">
                                        <p class="font-display font-semibold text-brand-light text-sm">Servio</p>
                                        <p class="text-[10px] text-brand-light/30 mt-0.5 uppercase tracking-wider">Payment Escrow Platform</p>
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/60 leading-relaxed max-w-xs">
                                        Hire professionals and pay them safely — funds are held securely and only released when the work is confirmed complete. No disputes, no missing money.
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/50 leading-relaxed max-w-xs">
                                        Businesses and freelancers who want a secure, accountable way to manage project payments.
                                    </td>
                                    <td class="py-5 px-6 text-right">
                                        <span class="text-brand-gold font-semibold">● In Development</span>
                                    </td>
                                </tr>

                                <!-- CrypticSMS -->
                                <tr class="hover:bg-white/1 transition-colors duration-200">
                                    <td class="py-5 px-6">
                                        <p class="font-display font-semibold text-brand-light text-sm">CrypticSMS</p>
                                        <p class="text-[10px] text-brand-light/30 mt-0.5 uppercase tracking-wider">Virtual Numbers</p>
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/60 leading-relaxed max-w-xs">
                                        Virtual phone numbers for international calls, SMS verification, and OTP codes — no physical SIM card or local number needed.
                                    </td>
                                    <td class="py-5 px-6 text-brand-light/50 leading-relaxed max-w-xs">
                                        Businesses that need international reach or verification systems without the cost of physical phone infrastructure.
                                    </td>
                                    <td class="py-5 px-6 text-right">
                                        <span class="text-emerald-400 font-semibold">● Live</span>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    
                    <p class="font-mono text-[9px] text-brand-light/20 text-right uppercase tracking-wider">
                        * These are real products — live, tested, and available. Not concepts or proposals.
                    </p>
                </div>
        `)
    }
}