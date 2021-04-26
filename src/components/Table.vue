<template>
  <v-card>
    <v-card-title>
      Data from Pride for {{peptideSequenceComputed}}
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-model="selected"
        :headers="headers"
        :items="api"
        :single-select="singleSelect"
        multi-sort
        item-key="usi"
        show-select
        dense
        class="elevation-1"
        :search="search"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  props: ['tableId', 'peptideSequence'],
  data: () => ({
    singleSelect: true,
    id: '',
    selected: [],
    search: '',
    headers: [
      {
        text: 'Usi',
        align: 'start',
        sortable: true,
        value: 'usi',
      },
      { text: 'PeptideSequence', value: 'peptideSequence' },
      { text: 'Charge', value: 'charge' },
      { text: 'precursorMz', value: 'precursorMZ' },
      { text: 'valid', value: 'valid' },
      { text: 'Links', value: 'links.self.href' },
      { text: 'scpre', value: 'attributes[0].value' }
    ],
    api: [],
  }),
// https://stackoverflow.com/questions/42133894/vue-js-how-to-properly-watch-for-nested-data
  computed: {
    foo() {
      return this.selected;
    },
    peptideSequenceComputed(){
      var _peptideSequenceComputed;
      if(this.tableId === "tab1"){
        _peptideSequenceComputed = this.$store.state.peptide1;
      }else{
        _peptideSequenceComputed =  this.$store.state.peptide2;
      }
      this.doCall(_peptideSequenceComputed);
      return _peptideSequenceComputed;
    }
  },
  watch: {
    foo() {
      var id = this.tableId;
      var usi = typeof this.selected[0] === "undefined"? "": this.selected[0]["usi"];
      this.$store.commit('setUsi', {"id": id, "usi":usi});
    },
  },
  methods: {
    doCall(inputVariable) {
      var that = this;
      axios
          .get('https://www.ebi.ac.uk/pride/ws/archive/v2/spectra?peptideSequence=' + inputVariable + '&pageSize=500')
          .then(function (response) {
                if (typeof response.data._embedded !== 'undefined'){
                  that.api = response.data._embedded.spectraevidences;
                  that.$store.commit('setUsi', {"id": that.tableId, "usi": ''});
                }else{
                  that.api = [];
                }
              }
          );
    }
  },
  mounted () {
    var _peptideSequenceComputed = "";
    if(this.tableId === "tab1"){
      _peptideSequenceComputed = this.$store.state.peptide1;
    }else {
      _peptideSequenceComputed = this.$store.state.peptide2;
    }
    this.doCall(_peptideSequenceComputed);
  }
}
</script>
