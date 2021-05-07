<template>

  <v-card color="basil">

    <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
    >
      <v-tab
          v-for="item in items"
          :key="item.title"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="item in items"
          :key="item.title"
      >
        <v-card
            color="basil"
            flat
        >
          <Table :ref="'tableRef'+item.id" :tableId="item.id" :peptideSequence="item.sequence" @usiSelected="checkAndEnableNext"/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-btn :disabled="!moveOn" fab color="primary" @click="progress">
      <v-icon>mdi-arrow-down-bold</v-icon>
    </v-btn>

  </v-card>
</template>

<script>
import Table from './Table.vue'

export default {
  components: {
    Table,
  },
  data() {
    return {
      moveOn: false,
      tab: null,
      items: [{'title': 'search1', id: 'search1', sequence: this.$store.state.peptide1},
        {'title': 'search2', id: 'search2', sequence: this.$store.state.peptide2}]
    }
  },
  methods: {
    checkAndEnableNext() {
      this.moveOn = this.$store.state.use1 !== "" || this.$store.state.use2 !== "";
    },
    progress() {
      this.$emit("nextStep", null);
    },
    resetTable(id) {
      this.$refs['tableRef'+id].reset();
    }
  }
}
</script>
