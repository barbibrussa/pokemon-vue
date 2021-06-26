<template>
  <v-app>
    <v-app-bar
      app
      color="orange darken-4"
      dark
    >
      <div>
        <v-img
          contain
          height="50"
          src="./assets/pokemon.svg"
        ></v-img>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/barbibrussa/pokemon-vue"
        target="_blank"
        text
      >
        <span class="mr-2">GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
