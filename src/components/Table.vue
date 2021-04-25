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
      console.log("com[uted");
      var _peptideSequenceComputed;
      this.doCall()
      if(this.id === "tab1"){
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
      console.log(this.peptideSequenceComputed);
      var usi = this.selected[0]["usi"];
      console.log(usi);
      var id = this.id;
      this.$store.commit('setUsi', {"id": id, "usi":usi});
    },
    moreWatch(){
      console.log(this.$store.state.peptide1);
      this.doCall("AAAAAAAA");

    }
  },
  methods: {
    doCall(inputVariable) {
      var that = this;
      axios
          .get('https://www.ebi.ac.uk/pride/ws/archive/v2/spectra?peptideSequence=' + inputVariable + '&pageSize=500')
          .then(function (response) {
                if (typeof response.data._embedded !== 'undefined'){
                  console.log(response);
                  that.api = response.data._embedded.spectraevidences;
                  console.log(that.api);
                  that.$store.commit('setUsi', {"id": that.id, "usi": ''});
                }else{
                  that.api = [];
                }
              }
          );
    }
  },
  mounted () {
    var that = this;
    this.id = this.tableId;
    console.log(that.peptideSequence);
    this.doCall(that.peptideSequence);
    console.log(this.tableId);
  }
}
</script>
