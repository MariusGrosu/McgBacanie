const detailsModule = {
  namespaced: true, // Activeaza namespacing-ul pentru acest modul
  state: {
    details: [], // Stocam toate detaliile produselor
  },
  mutations: {
    // Seteaza lista completa de detalii
    setDetails(state, details) {
      state.details = details;
    },
    // Adauga un nou detaliu in lista existenta
    addDetail(state, detail) {
      state.details.push(detail);
    },
  },
  actions: {
    // Incarca detaliile din localStorage si le seteaza in state
    loadDetails({ commit }) {
      const details = JSON.parse(localStorage.getItem('details')) || [];
      commit('setDetails', details); // Actualizeaza state-ul
    },
    // Adauga un nou detaliu si salveaza in localStorage
    addDetail({ commit }, detail) {
      const details = JSON.parse(localStorage.getItem('details')) || [];
      details.push(detail); // Adaugam detaliul in lista
      localStorage.setItem('details', JSON.stringify(details)); // Salvam lista in localStorage
      commit('addDetail', detail); // Actualizam state-ul Vuex
    },
  },
  getters: {
    // Returneaza detaliile asociate unui produs specific (prin productId)
    getDetailsByProductId: (state) => (productId) => {
      return state.details.filter((detail) => detail.productId === productId);
    },
  },
};

export default detailsModule;
