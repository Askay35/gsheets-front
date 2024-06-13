import { createStore } from "vuex";
import axios from "./axios";

export default createStore({
  state: {
    table_links: [],
  },
  mutations: {
    setTableLinks(state, payload) {
      state.table_links = payload;
    },
  },
  actions:{
    loadTableLinks(context){
      axios.get("/tables").then((response) => {
        context.commit("setTableLinks", response.data.data);
      });
    }
  },
});
