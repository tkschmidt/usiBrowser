<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="title"
            counter="25"
            label="peptide sequence"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      Load into first table
    </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      Load into first table
    </v-btn>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import axios from 'axios';

  export default {
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
