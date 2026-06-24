import { runHeroScene } from "./definitions/scenes/hero.js";
import { fadeUp, lineReveal, slideIn, scaleEntrance, elasticPop } from "./definitions/primitives/index.js";
// import { scaleEntrance, elasticPop } from "./primitives/index.js";


/**
 * Scene handlers — keyed by a selector that identifies the component root.
 * When applyGSAPAnimations() is called on a component, if it matches one of
 * these selectors the corresponding scene function runs.
*/
const sceneRegistry = new Map([
    [".js-hero", runHeroScene],
]);


/**
 * Per-element registry — data-animate selectors → animation functions.
 * These fire with ScrollTrigger so they work in any section, not just hero.
 * New entries should be added here.
*/
const makeScrollOpts = (el) => ({
    scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
    }
});

const elementRegistry = new Map([
    ['[data-animate="fade-up"]',
        el => fadeUp(el, { ...makeScrollOpts(el) })],

    ['[data-animate="line-reveal"]',
        el => lineReveal(el, { ...makeScrollOpts(el) })],

    ['[data-animate="slide-in"]',
        el => slideIn(el, { ...makeScrollOpts(el) })],

    ['[data-animate="scale-in"]',
        el => scaleEntrance(el, { ...makeScrollOpts(el) })],

    ['[data-animate="elastic-pop"]',
        el => elasticPop(el, { ...makeScrollOpts(el) })],
]);

// ---------------------------------------------------------------------------
// Main entry point — called by BaseComponent after every render()
// ---------------------------------------------------------------------------
export function applyGSAPAnimations(root) {
    // 1. Check if this component root matches a scene
    sceneRegistry.forEach((sceneFn, selector) => {
        if (root.matches(selector) || root.querySelector(selector)) {
            console.log("true");
            const target = root.matches(selector) ? root : root.querySelector(selector);
            sceneFn(target);
        }
    });


    // 2. Run per-element animations for any data-animate elements inside
    elementRegistry.forEach((animFn, selector) => {
        root.querySelectorAll(selector).forEach(el => animFn(el));
    });
}

/** 
<section class="relative min-h-screen pt-20 pb-16 lg:pt-26 lg:pb-24 overflow-hidden bg-brand-light bg-microgrid flex items-center">
    <!-- Subtle Ambient Glow Background Orbs -->
    <div id="orb-1" class="absolute top-1/4 left-1/12 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-green-muted/5 blur-3xl pointer-events-none opacity-0"></div>
    <div id="orb-2" class="absolute bottom-10 right-1/12 w-lg h-128 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none opacity-0"></div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            <!-- LEFT COLUMN -->
            <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
                <!-- Badge -->
                <div class="js-fade-hero opacity-0 inline-flex items-center gap-3 bg-brand-light/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-brand-dark/10 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <span class="flex h-1.5 w-1.5 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold/60 opacity-100"></span>
                        <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-gold"></span>
                    </span>
                    <span class="font-display text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase text-brand-dark/80">
                        From Idea to Launch
                    </span>
                </div>

                <!-- Main Heading Split by Lines for cinematic reveal -->
                <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-brand-dark leading-[1.2]">
                    <span class="block overflow-hidden">
                        <span class="js-line block opacity-0">Your vision,</span>
                    </span>
                    <span class="block overflow-hidden">
                        <span class="font-semibold text-transparent bg-clip-text bg-linear-to-r from-brand-dark via-brand-green-muted to-brand-gold relative inline-block js-line opacity-0">
                            fully built.
                        </span>
                    </span>
                    <span class="block overflow-hidden">
                        <span class="text-sm sm:text-base md:text-lg block tracking-widest uppercase text-brand-dark/60 mt-2 font-medium js-line opacity-0">
                            Exactly as you imagined it
                        </span>
                    </span>
                    <span class="block overflow-hidden p-1">
                        <span class="relative inline-block whitespace-nowrap font-normal js-line opacity-0">
                            <span class="relative text-brand-dark z-10">done right.</span>
                            <span id="hero-underline" class="absolute bottom-1 left-0 w-0 h-1 bg-brand-gold/40 z-0 rounded-md"></span>
                        </span>
                    </span>
                </h1>

                <!-- Paragraph description -->
                <p class="js-fade-hero opacity-0 max-w-xl mx-auto lg:mx-0 font-body font-light text-sm sm:text-lg text-brand-dark/75 leading-relaxed tracking-wide mt-6">
                    From websites and apps to SaaS platforms and marketplaces, we turn your idea into a launched product with <span class="font-medium text-brand-dark">full transparency</span>, giving you total <span class="font-medium text-brand-dark">peace of mind</span>.
                </p>

                <!-- CTAs -->
                <div class="js-fade-hero opacity-0 flex flex-row flex-wrap max-w-lg items-center justify-center lg:justify-start gap-4 pt-2 mx-auto lg:mx-0">
                    <a href="#projects" class="w-auto inline-flex items-center justify-center bg-brand-green-muted text-brand-light px-4 sm:px-8 py-3.5 sm:py-4 font-display text-xs sm:text-base lg:text-lg font-semibold shadow-lg hover:bg-brand-green-muted hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-sm group">
                        See Portfolio
                        <svg class="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    <a href="#consultation" class="w-auto inline-flex items-center justify-center border border-brand-dark/20 text-brand-dark px-4 sm:px-8 py-3.5 sm:py-4 font-display text-xs sm:text-base lg:text-lg font-semibold hover:bg-brand-dark hover:text-brand-light hover:border-brand-dark transition-all duration-300 rounded-sm">
                        Let's Talk Here
                    </a>
                </div>

                <!-- Hard Metrics -->
                <div class="js-fade-hero opacity-0 pt-6 border-t border-brand-dark/10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
                    <div>
                        <p class="font-display text-xs font-semibold uppercase tracking-wider text-brand-dark/40">Projects Delivered In Nigeria</p>
                        <p class="font-display text-lg font-semibold text-brand-dark">₦25M+ in Value</p>
                    </div>
                    <div class="h-8 w-px bg-brand-dark/10 hidden sm:block"></div>
                    <div>
                        <p class="font-display text-xs font-semibold uppercase tracking-wider text-brand-dark/40">Projects Delivered Abroad</p>
                        <p class="font-display text-lg font-semibold text-brand-dark">$18,000+ in Value</p>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN (Visual Graphic Area) -->
            <div class="lg:col-span-5 relative mt-15 lg:mt-0 flex justify-center items-center w-full min-h-145 lg:min-h-165">
                <!-- Background visual aura -->
                <div id="hero-image-bg" class="absolute w-[120%] h-[120%] bg-linear-to-tr from-brand-green-muted/20 via-brand-gold/15 to-transparent blur-3xl rounded-full scale-90 pointer-events-none z-0 opacity-0"></div>

                <!-- Main Visual Card Frame -->
                <div id="hero-main-card" class="relative w-full max-w-120 aspect-4/5 bg-brand-dark rounded-2xl shadow-2xl overflow-hidden border border-brand-gold/20 group opacity-0">
                    <div class="absolute inset-0 bg-microgrid-dark opacity-10 pointer-events-none"></div>
                    <img
                        src="/assets/images/relaxed-happy-business-owners.png"
                        alt="Relaxed and happy business owners collaborating with Clarove Systems"
                        class="w-full h-full object-cover object-center scale-105 group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div class="absolute inset-0 bg-linear-to-t from-brand-dark/50 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <!-- FLOATING METRIC CARDS -->
                <!-- CARD A -->
                <div class="js-stagger-card opacity-0 absolute -top-10 -left-4 sm:-left-10 bg-brand-light p-4 rounded-xl shadow-2xl border border-brand-dark/5 flex items-center gap-3 max-w-55 z-20">
                    <div class="h-9 w-9 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-[9px] text-brand-dark/40 font-bold uppercase tracking-wider">Built For Speed</p>
                        <p class="text-xs font-bold text-brand-dark leading-tight">Launch-Ready Fast</p>
                        <span class="text-[9px] text-green-600 font-semibold block mt-0.5">✓ Delivered On Schedule</span>
                    </div>
                </div>

                <!-- CARD B -->
                <div class="js-stagger-card opacity-0 absolute -top-4 -right-4 sm:-right-8 bg-brand-light p-4 rounded-xl shadow-2xl border border-brand-dark/5 flex items-center gap-3 max-w-57 z-20">
                    <div class="h-10 w-10 rounded-full bg-brand-green-muted flex items-center justify-center text-brand-light font-semibold font-display text-sm shrink-0">
                        $
                    </div>
                    <div>
                        <p class="text-[9px] text-brand-dark/40 font-medium uppercase tracking-wider">Completed Projects</p>
                        <p class="text-sm font-extrabold text-brand-dark font-mono">$18,500.00</p>
                        <span class="text-[9px] text-brand-gold font-semibold flex items-center gap-1 mt-0.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                            100% Yours, Fully Owned
                        </span>
                    </div>
                </div>

                <!-- CARD C -->
                <div class="js-stagger-card opacity-0 absolute -bottom-10 -left-4 sm:-left-6 bg-brand-light p-4 rounded-xl shadow-2xl border border-brand-dark/5 flex items-center gap-3 max-w-62 z-20">
                    <div class="h-10 w-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-gold font-semibold font-display text-sm shrink-0">
                        ₦
                    </div>
                    <div>
                        <p class="text-[9px] text-brand-dark/40 font-medium uppercase tracking-wider">Project Value Delivered</p>
                        <p class="text-sm font-extrabold text-brand-dark font-mono">₦24,850,000.00</p>
                        <span class="text-[9px] text-green-600 font-semibold flex items-center gap-0.5 mt-0.5">▲ Always Visible, No Surprises</span>
                    </div>
                </div>

                <!-- CARD D -->
                <div class="js-stagger-card opacity-0 absolute -bottom-6 -right-4 sm:-right-10 bg-brand-dark text-brand-light p-4 rounded-xl shadow-2xl border border-brand-light/10 flex items-center gap-3 max-w-55 z-20">
                    <div class="h-9 w-9 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-[9px] text-brand-light/40 font-bold uppercase tracking-wider">Clear, Fixed Pricing</p>
                        <p class="text-xs font-bold text-brand-light leading-tight">One Price, Agreed Upfront</p>
                        <span class="text-[9px] text-brand-gold font-medium block mt-0.5">No Hidden Fees, Ever</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
*/