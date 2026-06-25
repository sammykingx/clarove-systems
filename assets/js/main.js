import { App } from "./app.js";
import { runHeroScene } from "./animations/definitions/scenes/hero.js";
import { runHorizontalSection } from "./animations/definitions/scenes/horizontalScroll.js";


document.addEventListener("DOMContentLoaded", () => {
    // collect page info
    
    const app = new App();
    app.init();

    const hero = document.querySelector(".js-hero");
    const services = document.querySelector("#services");
    const portfolio = document.querySelector("#portfolio");


    if (hero) runHeroScene(hero);
    if (services) runHorizontalSection("#services");

    AOS.init({
        mirror: true,
        once: false,
        easing: 'ease-out-quart',
        duration: 1000,
    });
});
