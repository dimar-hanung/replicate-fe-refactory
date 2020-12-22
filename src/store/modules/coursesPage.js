import Api from "@/services/Api";
export default {
  namespaced: true,
  state: () => ({
    alumniReport: ""
  }),
  mutations: {
    setAlumniReport(state, data) {
      state.alumniReport = data;
    }
  },
  actions: {
    async setAlumniReport({ commit }) {
      await Api.get("alumni-report.json").then(res => {
        commit("setDataPartner", res.data.data);
      });
    }
  }
};
