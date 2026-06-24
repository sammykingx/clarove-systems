import { App } from "./app.js";
import { runHeroScene } from "./animations/definitions/scenes/hero.js";


document.addEventListener("DOMContentLoaded", () => {
    // collect page info
    
    const app = new App();
    app.init();

    const hero = document.querySelector(".js-hero");
    if (hero) runHeroScene(hero);
});

// document.addEventListener("DOMContentLoaded", () => {
//     // 1. Initialize a master layout timeline
//     const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });

//     // 2. Softly grow background atmospheric elements
//     heroTl.to(["#orb-1", "#orb-2"], {
//         opacity: 1,
//         scale: 1.1,
//         duration: 2.2,
//         stagger: 0.25,
//         ease: "expo.out"
//     }, 0);

//     // 3. Reveal the top-level intro badge
//     heroTl.fromTo(".js-fade-hero:first-of-type",
//         { y: 20, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.2 },
//         0.3
//     );

//     // 4. Reveal primary typography lines smoothly from within hidden boundary clips
//     heroTl.fromTo(".js-line",
//         { yPercent: 100, opacity: 0 },
//         {
//             yPercent: 0,
//             opacity: 1,
//             duration: 1.4,
//             stagger: 0.15,
//             ease: "power4.out"
//         },
//         0.5
//     );

//     // 5. Draw the elegant structural underline under "done right."
//     heroTl.to("#hero-underline", {
//         width: "100%",
//         duration: 0.8,
//         ease: "power2.inOut"
//     }, "-=0.4");

//     // 6. Elevate supporting content (Paragraph, Call to Actions, and Core Metrics)
//     heroTl.fromTo([".js-fade-hero:not(:first-of-type)"],
//         { y: 25, opacity: 0 },
//         {
//             y: 0,
//             opacity: 1,
//             duration: 1.2,
//             stagger: 0.15
//         },
//         "-=0.6"
//     );

//     // 7. Reveal the focal graphic layout (The Main Visual Frame)
//     heroTl.fromTo(["#hero-main-card", "#hero-image-bg"],
//         { scale: 0.94, opacity: 0 },
//         {
//             scale: 1,
//             opacity: 1,
//             duration: 1.8,
//             ease: "expo.out"
//         },
//         0.6
//     );

//     // 8. Cascade smaller surrounding context widgets gracefully around the layout frame
//     heroTl.fromTo(".js-stagger-card",
//         { scale: 0.8, y: 30, opacity: 0 },
//         {
//             scale: 1,
//             y: 0,
//             opacity: 1,
//             duration: 1.4,
//             stagger: 0.12,
//             ease: "elastic.out(1, 0.85)"
//         },
//         "-=1.2"
//     );

//     // 9. Initiate ongoing ambient weightless drift for floating components
//     heroTl.add(() => {
//         initFloatingIdleLoops();
//     }, "-=0.2");
// });

// // Premium subtle drift framework replacing standard erratic CSS loops
// function initFloatingIdleLoops() {
//     const cards = gsap.utils.toArray(".js-stagger-card");

//     // Assign differing micro-offsets dynamically to make the space feel alive
//     const configurations = [
//         { y: -10, x: 4, rotation: 0.5, duration: 4.5 },
//         { y: 12, x: -5, rotation: -0.8, duration: 5.0 },
//         { y: -8, x: -4, rotation: 0.4, duration: 4.2 },
//         { y: 10, x: 6, rotation: -0.5, duration: 5.5 }
//     ];

//     cards.forEach((card, index) => {
//         const config = configurations[index % configurations.length];

//         // Endless fluid sinusoidal sequence
//         gsap.to(card, {
//             y: `+=${config.y}`,
//             x: `+=${config.x}`,
//             rotation: `+=${config.rotation}`,
//             duration: config.duration,
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut"
//         });
//     });
// }