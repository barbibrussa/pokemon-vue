<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :max-width="maxWidth"
      elevation="14"
    >
      <v-img
        height="300px"
        contain
        :src="features.sprites.other['official-artwork'].front_default"
      ></v-img>
      <v-expand-transition>
        <div
          v-if="hover"
          class="d-flex transition-fast-in-fast-out v-card--reveal white--text"
          style="height: 100%;"
          :class="getColor(features.types[0].type.name)"
        >
          <v-container>
            <v-row>
              <v-col class="text-capitalize text-h4 text-center">
                {{ pokemon.name }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <span class="text-h6">Types:</span>
                <ul>
                  <li
                    class="text-capitalize"
                    v-for="(item, index) of features.types"
                    :key="index"
                  >
                    {{ item.type.name }}
                  </li>
                </ul>
              </v-col>
              <v-col>
                <span class="text-h6">Abilities:</span>
                <ul>
                  <li>
                    {{ features.abilities[0].ability.name }}
                  </li>
                  <li
                    v-if="features.abilities[1] !== undefined"
                  >
                    {{features.abilities[1].ability.name}}
                  </li>
                </ul>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <span class="font-weight-bold">Height:</span>
                {{ features.height / 10 }} m
              </v-col>
              <v-col>
                <span class="font-weight-bold">Weight:</span>
                {{ features.weight / 10 }} kg
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import Vue from 'vue';
import client from '@/api/client';

const typesColors: Map<string, string> = new Map<string, string>([
  ['grass', 'green darken-1'],
  ['poison', 'deep-purple lighten-1'],
  ['fire', 'orange darken-1'],
  ['water', 'blue darken-1'],
  ['bug', 'light-green darken-2'],
  ['normal', 'blue-grey darken-1'],
  ['electric', 'amber darken-1'],
  ['ground', 'brown darken-1'],
  ['fairy', 'pink lighten-2'],
  ['fighting', 'orange accent-4'],
  ['psychic', 'pink darken-1'],
  ['rock', 'lime darken-4'],
  ['steel', 'blue-grey'],
  ['ice', 'cyan darken-1'],
  ['ghost', 'purple darken-1'],
  ['dragon', 'red lighten-1'],
  ['flying', 'indigo lighten-2'],
]);

export default Vue.extend({
  name: 'Pokemon',
  props: {
    pokemon: Object,
    maxWidth: Number,
  },
  data() {
    return {
      features: Object,
    };
  },
  methods: {
    getColor(type: string): string {
      const color: string | undefined = typesColors.get(type);

      if (color === undefined) {
        return 'primary';
      }

      return color;
    },
  },
  beforeMount() {
    client.get(`/pokemon/${this.pokemon.name}`).then((res: any) => {
      this.features = res.data;
    });
  },
});
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>
