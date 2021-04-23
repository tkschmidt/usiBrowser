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
	<Table v-bind:tableId=item.id v-bind:peptideSequence=item.sequence />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
 import Table from './Table.vue'


export default {
	components: {
		Table
	},
  data () {
      return {
        tab: null,
        items: [{'title': 'search1', id: 'use1', sequence:'AEAEAQAEELSFPR'},
        // {'title': 'search2', id: 'use2', sequence: 'DGNVFTTGFSR'}]
        {'title': 'search2', id: 'use2', sequence: 'AEAEAQAEELSFPR'}]
}}
}
</script>
