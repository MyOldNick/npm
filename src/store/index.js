//vuex
import { createStore } from "vuex";
//stores
import packageModule from "./packageModule";

const store = createStore({
  modules: {
    package: packageModule
  }
});

export default store;
