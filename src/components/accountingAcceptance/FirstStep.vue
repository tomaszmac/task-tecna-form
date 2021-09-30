<template>
  <v-container class="pa-0">
    <v-form class="px-3">
      <v-card class="pa-10 outlined">
        <div class="card-actions-wrapper">
          <v-card-actions @click="show = !show">
            <v-btn color="primary" text>
              Dodatkowe informacje na temat przycisków
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                <span class="font-weight-bold"
                  >Przycisk "Pobierz dane dostawcy"</span
                >
                - ipsum dolor sit amet consectetur adipisicing elit. Qui minima
                officia odio cupiditate ipsum modi mollitia quas adipisci quae
                magnam saepe similique, ullam harum repellat eligendi ipsa atque
                recusandae quos.
              </v-card-text>
              <v-card-text>
                <span class="font-weight-bold"
                  >Przycisk "Sprawdź podatnika"</span
                >
                - ipsum dolor sit amet consectetur adipisicing elit. Qui minima
                officia odio cupiditate ipsum modi mollitia quas adipisci quae
                magnam saepe similique, ullam harum repellat eligendi ipsa atque
                recusandae quos.
              </v-card-text>
            </div>
          </v-expand-transition>
        </div>
        <v-row class="my-5">
          <v-col>
            <h3
              class="
                text-h5
                grey--text
                text--darken-3
                font-weight-bold
                text-center
              "
            >
              Dane dostawcy
            </h3>
          </v-col>
        </v-row>
        <v-row wrap>
          <v-col xs="12" md="6">
            <v-text-field label="Numer klienta" outlined> </v-text-field>
          </v-col>
          <v-col xs="12" md="6">
            <v-text-field label="NIP" outlined> </v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" class="my-n6">
          <v-col xs="12" md="4">
            <v-btn color="grey darken-4" plain>
              <v-icon class="mr-2" right dark> mdi-file-document-edit </v-icon>
              Pobierz dane dostawcy
            </v-btn>
          </v-col>
          <v-col xs="12" md="4">
            <v-btn color="black" plain>
              <v-icon class="mr-2" right> mdi-account-check </v-icon>
              Sprawdź podatnika
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col md="12">
            <v-text-field label="Numer klienta" outlined> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12" md="6">
            <v-text-field label="Ulica" outlined> </v-text-field>
          </v-col>
          <v-col xs="12" md="6">
            <v-text-field label="Kod pocztowy" outlined> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12" md="6">
            <v-text-field label="Miejscowość" outlined> </v-text-field>
          </v-col>
          <v-col xs="12" md="6">
            <v-text-field label="Kraj" outlined> </v-text-field>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col class="text-end mt-4">
            <v-btn class="mx-0 mt-3" color="primary" @click="$emit('nextStep')">
              Dane do faktury
              <v-icon class="ml-2" right> mdi-arrow-right </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  emits: ["nextStep"],
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-actions-wrapper {
  border: 1px solid rgba(202, 202, 202, 0.377);
}
</style>