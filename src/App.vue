<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <span class="mr-2">USI browser</span>
      </div>

      <v-spacer>
      </v-spacer>
      <v-spacer>
        <b>1.</b> Define a peptide sequence<em></em> <b>2.</b> Search for fitting USIs <b>3.</b> Select USIs <b>4.</b> Click the link to the Universal Spectrum Explorer
      </v-spacer>
      <v-spacer>
      </v-spacer>

      <v-btn
          href="https://github.com/tkschmidt/usiBrowser"
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-row
          justify="center"
          align="center">
        <v-col
            cols="6"
            md="6"
        >
          <PeptideSelection/>
        </v-col>
        <v-col
            cols="6"
            md="6"
            align="center"

        >
          <a v-bind:href= $store.state.combinedUrl target="_blank" class="v-btn" >dynamic link to the Universal Spectrum Explorer (USE) </a>
        </v-col>
      </v-row>
      <v-row>
        <tabs/>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import PeptideSelection from './components/PeptideSelection.vue';
import tabs from './components/2_wayselection_tab';

export default {
  name: 'App',

  components: {
    PeptideSelection,
    tabs,
  },

  data: () => ({
    //
  }),
};
</script>
