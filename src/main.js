//vue
import { createApp } from "vue";
//store
import store from "./store";
//app
import App from "./App.vue";
//ui
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const init = () => {
  const app = createApp(App);

  const vuetify = createVuetify({
    components,
    directives,
  });

  app.use(vuetify);
  app.use(store)
  app.mount("#app");
};

init();
