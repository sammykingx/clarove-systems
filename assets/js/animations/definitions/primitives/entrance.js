import { gsap } from "../../gsap.js";

/**
 * Scale + fade entrance — for images, cards, visual frames.
 * @param {Element|Element[]} els
 * @param {Object} opts
 * @param {number} [opts.scale=0.93]
 * @param {number} [opts.duration=1.6]
 * @param {string} [opts.ease="expo.out"]
 * @returns {gsap.core.Tween}
 */
export function scaleEntrance(els, opts = {}) {
    const { scale = 0.93, duration = 1.6, ease = "expo.out" } = opts;
    return gsap.fromTo(els,
        { scale, opacity: 0 },
        { scale: 1, opacity: 1, duration, ease }
    );
}

/**
 * Elastic pop for floating cards, badges, chips.
 * @param {Element|Element[]} els
 * @param {Object} opts
 * @param {number} [opts.scale=0.78]
 * @param {number} [opts.y=28]
 * @param {number} [opts.duration=1.3]
 * @param {number} [opts.stagger=0.1]
 * @param {string} [opts.ease="elastic.out(1, 0.8)"]
 * @returns {gsap.core.Tween}
 */
export function elasticPop(els, opts = {}) {
    const {
        scale = 0.78, y = 28, duration = 1.3,
        stagger = 0.1, ease = "elastic.out(1, 0.8)"
    } = opts;
    return gsap.fromTo(els,
        { scale, y, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration, stagger, ease }
    );
}

/**
 * Atmospheric orb / glow bloom — slow, ambient expansion.
 * @param {Element|Element[]} els
 * @param {Object} opts
 * @param {number} [opts.scale=1.08]
 * @param {number} [opts.duration=2.4]
 * @param {number} [opts.stagger=0.3]
 * @param {string} [opts.ease="expo.out"]
 * @returns {gsap.core.Tween}
 */
export function orbBloom(els, opts = {}) {
    const { scale = 1.08, duration = 2.4, stagger = 0.3, ease = "expo.out" } = opts;
    return gsap.fromTo(els,
        { scale: 0.85, opacity: 0 },
        { scale, opacity: 1, duration, stagger, ease }
    );
}