import { gsap } from "../../gsap.js";
import { fadeUp, lineReveal, slideIn, drawUnderline, idleFloat, scaleEntrance, elasticPop, orbBloom } from "../primitives/index.js";


export function runHeroScene(root) {
    const q = sel => root.querySelectorAll(sel);

    const orbs = q("#orb-1, #orb-2");
    const badge = q(".js-hero-badge");
    const lines = q(".js-line");
    const underline = root.querySelector("#hero-underline");
    const body = q(".js-hero-body");
    const mainCard = q("#hero-main-card, #hero-image-bg");
    const floatCards = q(".js-stagger-card");

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.add(orbBloom(orbs), 0);
    tl.add(fadeUp(badge, { y: -16, duration: 0.9, ease: "power3.out" }), 0.25);
    tl.add(lineReveal(lines, { stagger: 0.13 }), 0.45);
    tl.add(drawUnderline(underline), "-=0.45");
    tl.add(fadeUp(body, { y: 22, stagger: 0.14, duration: 1.1 }), "-=0.75");
    tl.add(scaleEntrance(mainCard, { scale: 0.94, duration: 1.7 }), 0.55);
    tl.add(elasticPop(floatCards, { stagger: 0.11 }), "-=1.0");
    tl.add(() => idleFloat(gsap.utils.toArray(floatCards)), "-=0.1");
}
