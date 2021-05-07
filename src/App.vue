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
        <b>1.</b> Define a peptide sequence<em></em> <b>2.</b> Search for fitting USIs <b>3.</b> Select USIs <b>4.</b>
        Click the link to the Universal Spectrum Explorer
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
      <v-stepper
          v-model="e6"
          vertical
          class="mx-10"
      >
        <v-stepper-step :complete="e6 > 1" step="1" editable>Retrieve USIs for a peptide sequence</v-stepper-step>
        <v-stepper-content step="1">
          <v-row>
            <PeptideSelection @nextStep="e6++"/>
          </v-row>
        </v-stepper-content>
        <v-stepper-step :complete="e6 > 2" step="2" editable>Select one USI in at least one Search Tab</v-stepper-step>
        <v-stepper-content step="2">
          <v-row>
            <tabs ref="tab" class="ma-5" @nextStep="e6++"/>
          </v-row>
        </v-stepper-content>
        <v-stepper-step :complete="e6 > 3" step="3">
          Go to USE and compare your spectra
        </v-stepper-step>
        <v-stepper-content step="3">
            <v-btn class="pa-3" color="primary" dark :href="$store.state.combinedUrl" target="_blank" medium>Dynamic link to the USE</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-main>
  </v-app>
</template>

<script>
import PeptideSelection from '@/components/PeptideSelection.vue';
import tabs from '@/components/2_wayselection_tab';

export default {
  name: 'App',

  components: {
    PeptideSelection,
    tabs,
  },

  data: () => ({
    e6: 1
    //
  }),
};
</script>
