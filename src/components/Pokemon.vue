<template>
    <v-card :max-width="maxWidth">
      <v-img
        height="200px"
        contain
        :src="features.sprites.other['official-artwork'].front_default"
      ></v-img>
      <v-card-title>
        <v-row>
          <v-col class="text-capitalize">
            {{ pokemon.name }}
          </v-col>
          <v-col class="text-right">
            {{ features.id }}
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <ul>
          <li>
            <span class="font-weight-medium">Type: </span>
            <v-chip
              class="text-capitalize"
              v-for="(item, index) of features.types"
              :key="index"
              :color="getColor(item.type.name)"
            >{{item.type.name}}</v-chip>
          </li>
          <li class="text-capitalize">
            <span class="font-weight-medium">Abilities:</span>
            {{ features.abilities[0].ability.name }}
            <span v-if="features.abilities[1] !== undefined">
            / {{features.abilities[1].ability.name}}
          </span>
          </li>
        </ul>
      </v-card-text>
    </v-card>
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
  ['normal', 'blue-grey lighten-3'],
  ['electric', 'yellow darken-1'],
  ['ground', 'brown darken-1'],
  ['fairy', 'pink lighten-2'],
  ['fighting', 'orange accent-4'],
  ['psychic', 'pink darken-1'],
  ['rock', 'lime darken-4'],
  ['steel', 'blue-grey'],
  ['ice', 'cyan accent-2'],
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
      console.log(this.features);
    });
  },
});
</script>
