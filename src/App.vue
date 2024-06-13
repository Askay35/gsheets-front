<template>
  <v-app class="pink-darken-2">
    <v-app-bar app>
      <v-toolbar-title class="text-pink-darken-2 text-h4 font-weight-bold">GSheets</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="pink-darken-2" to="/">Возврат</v-btn>
      <v-btn text color="pink-darken-2" to="/tables">Google Таблицы</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Ваши стили */
</style>
