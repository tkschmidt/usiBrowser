<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="12"
        >
          <v-text-field
              v-model="title"
              counter="100"
              label="peptide sequence"
              outlined
              @change="toSetPeptide"
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col
              cols="12"
              md="6"
          >
            <load-button txt='into second' id='tab1'/>
          </v-col>
          <v-col
              cols="12"
              md="6"
          >
            <load-button txt='test123' id='tab2'/>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import axios from 'axios';
import loadButton from './loadButton';

export default {
  components: {
    loadButton
  },
  methods:{
    toSetPeptide() {
      console.log(this.title);
      this.$store.commit('setGlobalPeptide', this.title);
    }

  },
  data: () => ({
    valid: false,
    title: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  mounted () {
    axios
        .get('https://www.ebi.ac.uk/pride/ws/archive/v2/spectra?peptideSequence='+this.title)
        .then(response => (this.info = response))
  }
}
</script>
