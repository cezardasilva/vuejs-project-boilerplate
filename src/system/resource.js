
import Vue from 'vue'
import VueResource from 'vue-resource'

import Auth from "./auth"
import {router} from "./routers"

Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {

})
