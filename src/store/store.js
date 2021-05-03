// src/store/store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // put variables and collections here
    url: '',
    use1: '',
    use2: '',
    peptide: '',
    peptide1: 'DGNVFTTGFSR',
    peptide2: 'DQNGTWEMESNENFEGYMK',
    combinedUrl: '',
  },
  mutations: {
    setUsi(state, obj) {
      if(obj["id"] === "search1"){
        state["use1"] = obj["usi"];
      }else{
        state["use2"] = obj["usi"];
      }
      var url_base =  'https://www.proteomicsdb.org/use/?';
      state["combinedUrl"] = url_base +
          ((state["use1"] !== "")? "usi=" + state["use1"] + "&" : "") +
          ((state["use2"] !== "")? "usibottom=" + state["use2"]   : "");

    },
    setGlobalPeptide(state, obj){
      state["peptide"] = obj;
    },
    setPeptide(state, obj){
      if(obj["id"]==="search1"){
        state["peptide1"] = state["peptide"]
      }else{
        state["peptide2"] = state["peptide"]
      }
    }
    // put sychronous functions for changing state e.g. add, edit, delete
  },
  actions: {
    // put asynchronous functions that can call one or more mutation functions
  }
})
