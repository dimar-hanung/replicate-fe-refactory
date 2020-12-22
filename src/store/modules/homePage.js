import Api from "@/services/Api";
export default {
  namespaced: true,
  state: () => ({
    dataPartner: "",
    seeOn: ""
  }),
  mutations: {
    setDataPartner(state, data) {
      state.dataPartner = data;
    },
    setSeeOn(state, data) {
      state.seeOn = data;
    }
  },
  actions: {
    async setDataPartner({ commit }) {
      await Api.get("partner.json").then(res => {
        commit("setDataPartner", res.data.data);
      });
    },
    async setSetSeeOn({ commit }) {
      await Api.get("seen_on.json").then(res => {
        commit("setSetSeeOn", res.data.data);
      });
    }
  }
};
