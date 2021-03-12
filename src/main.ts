import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { applyPolyfills, defineCustomElements } from "ionicons/dist/loader";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
    enableProdMode();
}

applyPolyfills().then(() => {
    defineCustomElements(window, {
        resourcesUrl: "assets/ionicons/",
    });
});

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
