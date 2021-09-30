<template>
  <v-select :items="items" :label="label" outlined v-model="field">
    <template v-slot:append-outer>
      <v-icon right @click="resetSelect" class="ma-0"> mdi-close </v-icon>
    </template>
  </v-select>
</template>

<script>
export default {
  name: "BaseSelect",
  props: ["items", "label"],
  data() {
    return {
      field: "",
    };
  },
  methods: {
    resetSelect() {
      this.field = "";
    },
  },
};
</script>