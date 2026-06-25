import { horizontalScrollPin } from "../primitives/index.js";



/**
 * @param {string} selector - CSS selector for the section e.g. "#services"
 */
export function runHorizontalSection(selector) {
    const section = document.querySelector(selector);
    if (!section) return;

    const track = section.querySelector(".js-h-track");
    if (!track) return;

    horizontalScrollPin(section, track);
}