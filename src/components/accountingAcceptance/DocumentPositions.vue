<template>
  <v-expansion-panel :expand="isFirst">
    <v-expansion-panel-header> Pozycja {{ id }} </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn
            color="accent"
            elevation="2"
            class="mr-2"
            @click="$emit('duplicate')"
            >Duplikuj</v-btn
          >
          <v-btn elevation="2">Usuń</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4" xs="12">
          <base-select :items="items" label="Rodzaj kosztu"></base-select>
        </v-col>
        <v-col md="4" xs="12">
          <base-select :items="items" label="Nazwa"></base-select>
        </v-col>
        <v-col md="4" xs="12">
          <base-select
            :items="items"
            label="Miejsce powstania kosztu"
          ></base-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3" xs="12">
          <v-text-field label="Kwota netto" outlined> </v-text-field>
        </v-col>
        <v-col md="3" xs="12">
          <base-select :items="items" label="Stawka VAT"></base-select>
        </v-col>
        <v-col md="3" xs="12">
          <v-text-field label="Kwota Brutto" outlined> </v-text-field>
        </v-col>
        <v-col md="1" xs="12">
          <v-text-field label="Kurs" outlined> </v-text-field>
        </v-col>
        <v-col md="2" xs="12">
          <v-text-field label="Nośnik" outlined> </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field label="Numer zamówienia" outlined> </v-text-field>
            </v-col>
            <v-col>
              <base-select :items="items" label="Element 4"></base-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="Numer zlecenia" outlined> </v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Element 5" outlined> </v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-textarea outlined name="input-7-4" label="Opis"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Osoba autoryzująca" outlined> </v-text-field>
        </v-col>
        <v-col>
          <base-select
            :items="items"
            label="Dokument zakupu"
            disabled
            readonly
          ></base-select>
        </v-col>
        <v-col>
          <base-date-picker label="Data decyzji"></base-date-picker>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: ["id"],
  emits: ["duplicate"],
  data() {
    return {
      items: ["Item1", "Item2"],
    };
  },
  computed: {
    isFirst() {
      if (this.id === 0) {
        return true;
      }
      return false;
    },
    posNumber() {
      return this.id + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.container--border {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0 !important;

  &:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
}
</style>