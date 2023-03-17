//api
import ApiClient from "../plugins/api";
//mutations
import { SET_PACKAGES, SET_TOTAL_PAGES } from "./mutations";

const packageModule = {
  state() {
    return {
      packages: [],
      totalPages: 0
    };
  },
  mutations: {
    [SET_PACKAGES](state, payload) {
      state.packages = payload;
    },
    [SET_TOTAL_PAGES](state, payload) {
      state.totalPages = payload
    }
  },
  actions: {
    async getPackages({ commit }, { name, page }) {
      try {
        const {
          data: { objects, total },
        } = await ApiClient.get("search", {
          params: { text: name, size: 10, from: page * 10 },
        });

        commit(SET_PACKAGES, objects);
        commit(SET_TOTAL_PAGES, total)
      } catch (error) {
        throw error;
        // Здесь должен быть какой-то обработчик задачи(это зависит от бизнес задач и контекста), 
        // но в данном тестовом он не нужен
      }
    },
  },
};

export default packageModule;
