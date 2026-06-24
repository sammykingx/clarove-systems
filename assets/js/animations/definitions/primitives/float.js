import { gsap } from "../../gsap.js";

/**
 * Assigns a gentle, continuous sinusoidal drift to each element.
 * Each element gets a slightly different rhythm so they feel independent.
 *
 * @param {Element[]} els
 * @param {Object} opts
 * @param {number} [opts.yRange=10]      max vertical drift in px
 * @param {number} [opts.xRange=5]       max horizontal drift in px
 * @param {number} [opts.rotRange=0.6]   max rotation in degrees
 * @param {number} [opts.baseDuration=4.5]
 */
export function idleFloat(els, opts = {}) {
    const { yRange = 10, xRange = 5, rotRange = 0.6, baseDuration = 4.5 } = opts;

    // Prime offsets so cards don't all start/peak simultaneously
    const phaseOffsets = [0, 0.22, 0.47, 0.71];

    els.forEach((el, i) => {
        const phase = phaseOffsets[i % phaseOffsets.length];
        const durationVariance = 1 + (i * 0.28);   // each card has a unique period

        gsap.to(el, {
            y: `+=${yRange * (i % 2 === 0 ? 1 : -1)}`,
            x: `+=${xRange * (i % 3 === 0 ? 1 : -1)}`,
            rotation: `+=${rotRange * (i % 2 === 0 ? 1 : -1)}`,
            duration: baseDuration + durationVariance,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: phase,
        });
    });
}