import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editPage: {
      image: "",
      name: "",
      title: "",
      text: "",
      buttonText: "לחץ/י כאן",
      buttonUrl: ""
    },
    account: {
      dataLoaded: false,
      data: {
        CurrentPackage: "",
        CurrentPackagePrice: "",
        Name: "",
        NextPackage: "",
        NextPackagePrice: "",
        NumberOfSubscribers: "",
        UpgradeRequired: false
      }
    }
  },
  getters: {},
  mutations: {
    updateEditPageImage (state, value) {
      state.editPage.image = value
    },
    updateEditPageName (state, value) {
      state.editPage.name = value
    },
    updateEditPageTitle (state, value) {
      state.editPage.title = value
    },
    updateEditPageText (state, value) {
      state.editPage.text = value
    },
    updateEditPageButtonText (state, value) {
      state.editPage.buttonText = value
    },
    updateEditPageButtonUrl (state, value) {
      state.editPage.buttonUrl = value
    },
    updateAccountDataLoaded (state, value) {
      state.account.dataLoaded = value
    },
    updateAccountCurrentPackage (state, value) {
      state.account.data.CurrentPackage = value
    },
    updateAccountCurrentPackagePrice (state, value) {
      state.account.data.CurrentPackagePrice = value
    },
    updateAccountName (state, value) {
      state.account.data.Name = value
    },
    updateAccountNextPackage (state, value) {
      state.account.data.NextPackage = value
    },
    updateAccountNextPackagePrice (state, value) {
      state.account.data.NextPackagePrice = value
    },
    updateAccountNumberOfSubscribers (state, value) {
      state.account.data.NumberOfSubscribers = value
    },
    updateAccountUpgradeRequired (state, value) {
      state.account.data.UpgradeRequired = value
    },
  },
  actions: {},
  modules: {},
});
