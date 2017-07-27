import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'

import store from '../store'

Vue.use(VueSocketio, socketio('http://localhost:9001'), store)
