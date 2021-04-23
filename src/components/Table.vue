<template>
<v-card>
    <v-card-title>
      Data from Pride
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
    }
  },
  watch: {
    foo() {
	var usi = this.selected[0]["usi"];
var id = this.id;
     this.$store.commit('setUsi', {"id": id, "usi":usi});
    }
  },
mounted () {
	var that = this;
this.id = this.tableId;
console.log(that.peptideSequence);
    axios
      .get('https://www.ebi.ac.uk/pride/ws/archive/v2/spectra?peptideSequence=' + that.peptideSequence + '&pageSize=500')
      .then(function(response){
		that.api = response.data._embedded.spectraevidences;
		console.log(that.api);
     that.$store.commit('setUsi', {"id": this.id, "usi": ''});
		}
);
console.log(this.tableId);
      
  }
  }
</script>
