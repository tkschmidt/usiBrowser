<template>
  <v-btn
      class="ma-2"
      color="secondary"
      @click="setPeptide"
      :disabled="!isEnabled"
  > Load {{this.$store.state.peptide}} into {{this.id}}
  </v-btn>
</template>

<script>
// v-on  <=> @
export default {
  name: "loadButton",
  props: ['txt',
    'id'],
  data: () => ({
    'title': 'test',
  }),
  computed: {
    isEnabled() {
      return this.$store.state.peptide.length > 0;
    },
    peptideSequence: ()=>{
      if(this.id == "tab1"){
        return this.$store.state.peptide1;
      }else{
        return this.$store.state.peptide2;
      }
    }
  },
  methods:{
    setPeptide(){
      this.$store.commit('setPeptide', {"id": this.id});

    }

  }
}
</script>

<style scoped>

</style>