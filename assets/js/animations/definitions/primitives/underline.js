import { gsap } from "../../gsap.js";


/**
 * Draws an underline element from width:0 to width:100%.
 * The target el should be position:absolute with width:0 set in CSS/HTML.
 * @param {Element} el
 * @param {Object} opts
 * @param {number} [opts.duration=0.75]
 * @param {string} [opts.ease="power2.inOut"]
 * @returns {gsap.core.Tween}
 */
export function drawUnderline(el, opts = {}) {
    const { duration = 0.75, ease = "power2.inOut" } = opts;
    return gsap.to(el, { width: "100%", duration, ease });
}