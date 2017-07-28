import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'

import store from '../store'

const socket = socketio('http://localhost:9001')

Vue.use(VueSocketio, socket, store)

export default socket
