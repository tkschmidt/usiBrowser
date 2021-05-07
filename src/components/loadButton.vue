<template>
  <v-btn
      class="ma-2"
      color="third"
      @click="setPeptide"
      :disabled="!isEnabled"
  > Retrieve USIs for peptide "{{this.$store.state.peptide}}" in {{this.id}}
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
      if(this.id === "search1"){
        return this.$store.state.peptide1;
      }else{
        return this.$store.state.peptide2;
      }
    }
  },
  methods:{
    setPeptide(){
      this.$store.commit('setPeptide', {"id": this.id});
      this.$emit('peptideSet', this.id);
    }

  }
}
</script>

<style scoped>

</style>