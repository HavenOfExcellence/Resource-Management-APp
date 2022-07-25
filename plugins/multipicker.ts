import VueMultiSelect from "vue-multiselect";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("multiselect", VueMultiSelect);
});
