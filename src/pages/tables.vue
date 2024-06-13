<template>
  <v-container>
    <div class="text-center text-pink my-5 text-h4 font-weight-bold">
      Ссылки на таблицы
    </div>
    <v-list>
      <v-list-item v-for="(link, index) in table_links" :key="index">
        <a :href="link.url" target="_blank">{{ link.url }}</a>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  computed: {
    table_links() {
      return this.$store.state.table_links;
    },
  },
  created() {
    this.$store.dispatch("loadTableLinks");
  },
};
</script>

<style scoped>
/* Ваши стили */
</style>
