import { AppHeader } from "./shared/header.js";
import { AppFooter } from "./shared/footer.js";
import { PageMeta } from "./shared/pageMeta.js";


export const componentRegistry = new Map([
    ['app-header', AppHeader], ['app-footer', AppFooter], ['page-meta', PageMeta],
]);
