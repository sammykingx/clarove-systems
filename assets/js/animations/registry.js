import { fadeUp, lineReveal, slideIn, scaleEntrance, elasticPop } from "./definitions/primitives/index.js";


/**
 * Scene handlers — keyed by a selector that identifies the component root.
 * When applyGSAPAnimations() is called on a component, if it matches one of
 * these selectors the corresponding scene function runs.
*/
const sceneRegistry = new Map([
    //["tag", Fn],
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
    sceneRegistry.forEach((sceneFn, selector) => {
        if (root.matches(selector) || root.querySelector(selector)) {
            const target = root.matches(selector) ? root : root.querySelector(selector);
            sceneFn(target);
        }
    });

    elementRegistry.forEach((animFn, selector) => {
        root.querySelectorAll(selector).forEach(el => animFn(el));
    });
}
