<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    min-width="auto"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        append-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        outlined
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ["label"],
  data() {
    return {
      menu: false,
      date: null,
    };
  },
};
</script>