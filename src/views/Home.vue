<template>
  <div>
    <v-row>
      <v-col>
        <v-toolbar
          dense
        >
          <v-container>
            <v-text-field
              color="orange darken-4"
              label="Search pokemon by name"
              hide-details
              prepend-icon="mdi-magnify"
              single-line
              v-model="search"
            ></v-text-field>
          </v-container>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row wrap>
      <v-col
        cols="3"
        :key="pokemon.name"
        v-for="pokemon in list"
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
  computed: {
    list() {
      return this.data.filter((item) => item.name.includes(this.search));
    },
  },
  data() {
    return {
      data: [],
      search: '',
    };
  },
  beforeMount() {
    client.get('pokemon?limit=151').then((res: any) => {
      this.data = res.data.results;
    });
  },
});
</script>
