/**
 * Central registry mapping CSS selectors to animation factories.
 * Each factory receives the matched element and returns a GSAP tween/timeline.
 */
export const animationRegistry = new Map([
    // Example entries — replace/extend with your actual selectors and animations
    // ['[data-animate="fade-up"]', fadeUpAnimation],
])


/**
 * Scans a root element for any selector in the registry and runs its animation.
 * @param {HTMLElement} root
 */
export function applyGSAPAnimations(root) {
    animationRegistry.forEach((animationFn, selector) => {
        root.querySelectorAll(selector).forEach(el => animationFn(el));
    });
}