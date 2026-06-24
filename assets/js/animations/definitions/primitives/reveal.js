import { gsap } from "../../gsap.js";


/**
 * Fade + lift entrance. Works on any element or array of elements.
 * @param {Element|Element[]} els
 * @param {Object} opts
 * @param {number} [opts.y=24]
 * @param {number} [opts.duration=1.1]
 * @param {number} [opts.stagger=0]
 * @param {string} [opts.ease="power3.out"]
 * @returns {gsap.core.Tween}
 */
export function fadeUp(els, opts = {}) {
    const { y = 24, duration = 1.1, stagger = 0, ease = "power3.out" } = opts;
    return gsap.fromTo(els,
        { y, opacity: 0 },
        { y: 0, opacity: 1, duration, stagger, ease }
    );
}

/**
 * Cinematic line reveal — clips text upward from inside overflow:hidden parent.
 * Each .js-line span must sit inside a overflow-hidden wrapper span.
 * @param {Element|Element[]} lines
 * @param {Object} opts
 * @param {number} [opts.duration=1.3]
 * @param {number} [opts.stagger=0.13]
 * @param {string} [opts.ease="power4.out"]
 * @returns {gsap.core.Tween}
 */
export function lineReveal(lines, opts = {}) {
    const { duration = 1.3, stagger = 0.13, ease = "power4.out" } = opts;
    return gsap.fromTo(lines,
        { yPercent: 105, opacity: 0 },
        { yPercent: 0, opacity: 1, duration, stagger, ease }
    );
}

/**
 * Slide in from a horizontal offset — useful for section headings, badges.
 * @param {Element|Element[]} els
 * @param {Object} opts
 * @param {number} [opts.x=-30]
 * @param {number} [opts.duration=1.0]
 * @param {string} [opts.ease="power3.out"]
 * @returns {gsap.core.Tween}
 */
export function slideIn(els, opts = {}) {
    const { x = -30, duration = 1.0, ease = "power3.out" } = opts;
    return gsap.fromTo(els,
        { x, opacity: 0 },
        { x: 0, opacity: 1, duration, ease }
    );
}