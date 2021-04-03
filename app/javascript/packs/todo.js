import Vue from "vue/dist/vue.esm.js"
import Router from './router/router'
import Header from "./components/header"


let app = new Vue({
  el: "#app",
  router: Router,
  components: {
    'navbar': Header,
  }
})
