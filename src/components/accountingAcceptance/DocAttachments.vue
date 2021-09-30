<template>
  <v-row class="mt-3">
    <v-col xs="4" md="5">
      <base-download-field label="Załącznik"></base-download-field>
    </v-col>
    <v-col xs="6" md="5">
      <v-text-field outlined label="Opis"></v-text-field>
    </v-col>
    <v-col>
      <v-btn class="mt-2" icon @click="$emit('delete', id)"
        ><v-icon> mdi-close </v-icon></v-btn
      >
    </v-col>
  </v-row>
</template>

 <script>
export default {
  props: ["id"],
};
</script>
