<template>
  <v-text-field
    :label="label"
    outlined
    :readonly="readonly"
    :value="computedDocName"
  >
    <template v-slot:append-outer>
      <v-icon right @click="getDocument" class="ma-0"> mdi-download </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  props: ["buttonText", "label", "disabled", "readonly", "docName"],
  methods: {
    getDocument() {
      //
    },
  },
  computed: {
    computedDocName() {
      return this.docName ? this.docName : "Brak pliku";
    },
  },
};
</script>