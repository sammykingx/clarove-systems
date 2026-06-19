import { componentRegistry } from "./components/registry.js";


export class App {
    init() {
        this.registerComponents();
    }

    registerComponents() {
        componentRegistry.forEach((componentClass, componentTag) => {
            if (!customElements.get(componentTag)) {
                customElements.define(componentTag, componentClass);
            }
        });
    }
}