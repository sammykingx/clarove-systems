import { gsap, ScrollTrigger } from "../../gsap.js";


/**
 * Converts vertical scroll into horizontal movement for a scrolling track.
 * Pins the section until the full track width has been traversed.
 *
 * @param {HTMLElement} section - The outer section to pin
 * @param {HTMLElement} track - The horizontally scrolling flex container
 * @param {Object} opts
 * @param {string} [opts.start="top top"] - ScrollTrigger start
 * @param {string} [opts.ease="none"] - Tween ease
 * @param {boolean} [opts.markers=false] - Debug markers
 * @returns {ScrollTrigger}
 */
export function horizontalScrollPin(section, track, opts = {}) {
    const {
        start = "top top",
        ease = "none",
        markers = false,
    } = opts;

    // Hand control to GSAP — disable native scroll and snap on the track
    track.classList.remove("overflow-x-auto", "snap-x", "snap-mandatory");
    track.style.overflow = "visible";

    // Total distance to scroll = full track width minus the visible viewport width
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    const tween = gsap.to(track, {
        x: getScrollAmount,
        ease,
    });

    const st = ScrollTrigger.create({
        trigger: section,
        start,
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        scrub: 1, // controls exits
        anticipatePin: 1, //controls entry
        animation: tween,
        invalidateOnRefresh: true,   // recalculates on resize
        markers,
    });

    return st;
}