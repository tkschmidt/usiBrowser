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

      <v-spacer></v-spacer>

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
      <PeptideSelection/>
      <v-container>
        <v-row>      <v-col
            cols="12"
            md="12"
            align="center"
            justify="center"
        >
          <a v-bind:href= $store.state.combinedUrl target="_blank" class="v-btn" >dynamic link to the Universal Spectrum Explorer (USE) </a>
        </v-col>
        </v-row>
      </v-container>
      <tabs/>
      <p/>
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
