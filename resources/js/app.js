require("./bootstrap");

import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import CKEditor from "@ckeditor/ckeditor5-vue";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "E-Mindset";

createInertiaApp({
    title: (title) => `${appName} - ${title} `,
    resolve: async (name) => {
        let page = (await import(`./Pages/${name}`)).default;

        page.layout ??= Layout;

        return page;
    },

    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(CKEditor)
            .component("Link", Link)
            .component("Head", Head)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({
    color: "#94cb00",
    showSpinner: true,
});
