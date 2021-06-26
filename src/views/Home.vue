<template>
  <div>
    <v-row wrap>
      <v-col
        cols="3"
        :key="index"
        v-for="(pokemon, index) in list"
      >
        <pokemon :pokemon="pokemon">
        </pokemon>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Pokemon from '@/components/Pokemon.vue';
import client from '@/api/client';

export default Vue.extend({
  name: 'Home',
  components: {
    Pokemon,
  },
  data() {
    return {
      list: [],
    };
  },
  beforeMount() {
    client.get('pokemon?limit=151').then((res: any) => {
      this.list = res.data.results;
    });
  },
});
</script>
