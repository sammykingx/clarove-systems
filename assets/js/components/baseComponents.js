import { applyGSAPAnimations } from "../animations/registry.js";


export class BaseComponent extends HTMLElement{
    constructor() {
        super();
    }

    render(html) {
        this.innerHTML = html;
        applyGSAPAnimations(this);
    }
}