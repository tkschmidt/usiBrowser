// src/store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // put variables and collections here
  url: 'https://www.proteomicsdb.org/use/?usi=mzspec:PXD000561:Adult_Frontalcortex_bRP_Elite_85_f09:scan:17555:VLHPLEGAVVIIFK/2&usi_origin=peptideatlas&usibottom=mzspec:PXD015890:18May18_Olson_WT2.raw%20(F001551).mzid_18May18_Olson_WT2.raw_(F001551).MGF:index:6913:AEAEAQAEELSFPR/2&usibottom_origin=pride',
  use1: '123',
  use2: '',
  peptide1: 'DGNVFTTGFSR',
  peptide2: 'DGNVFTTGFSR',
combinedUrl: '',
  },
  mutations: {
    setUsi(state, obj) {
    var usi = obj["usi"];
    var id = obj["id"];
		state[id] = usi;
    var url_base =  'https://www.proteomicsdb.org/use/?usi=';
    state["combinedUrl"] = url_base + 
    state["use1"] + '&usi_origin=pride' + '&usibottom=' + 
    state["use2"] + '&usibottom_origin=pride' ;

      }
    // put sychronous functions for changing state e.g. add, edit, delete
  },
  actions: {
    // put asynchronous functions that can call one or more mutation functions
  }
})
