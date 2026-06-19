export class BaseComponent extends HTMLElement{
    constructor() {
        super();
    }

    render(html) {
        this.innerHTML = html;

        // any other animations;
    }
}