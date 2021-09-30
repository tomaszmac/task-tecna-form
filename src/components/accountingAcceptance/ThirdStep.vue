<template>
  <v-container class="pa-0">
    <v-form class="px-3">
      <v-card class="pa-10 outlined">
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
              Rejestracja
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4">
            <v-text-field outlined label="Rejestrujący"> </v-text-field>
          </v-col>
          <v-col md="4">
            <base-date-picker label="Data płatności" />
          </v-col>
          <v-col>
            <base-select :items="items" label="Akceptacja"></base-select>
          </v-col>
        </v-row>
        <v-divider class="my-10"></v-divider>
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
              Dekretacja
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4">
            <v-text-field outlined label="Opisujący"> </v-text-field>
          </v-col>
          <v-col md="4">
            <base-date-picker label="Data płatności" />
          </v-col>
          <v-col>
            <base-select :items="items" label="Akceptacja"></base-select>
          </v-col>
        </v-row>
        <v-divider class="my-10"></v-divider>
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
              Autoryzacja zapłaty
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4">
            <v-text-field outlined label="Autoryzujący"> </v-text-field>
          </v-col>
          <v-col md="4">
            <base-date-picker label="Data autoryzacji" />
          </v-col>
          <v-col>
            <base-select :items="items" label="Decyzja"></base-select>
          </v-col>
        </v-row>
        <v-divider class="my-10"></v-divider>
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
              Akceptacja dokumentu kosztownego
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4">
            <v-text-field outlined label="Akceptujący"> </v-text-field>
          </v-col>
          <v-col md="4">
            <base-date-picker label="Data akceptacji" />
          </v-col>
          <v-col>
            <base-select :items="items" label="Akceptacja"></base-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center pa-0 mb-7">
            <v-btn outlined elevation="1">Generuj notę</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <base-download-field
              label="Opis faktury mały"
              readonly
            ></base-download-field>
          </v-col>
          <v-col>
            <base-download-field
              label="Opis faktury A4"
              readonly
            ></base-download-field>
          </v-col>
        </v-row>
        <v-divider class="my-10"></v-divider>
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
              Komentarze
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-list>
              <v-list-item
                class="border-list"
                v-for="(item, i) in comments"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col>
            <v-textarea
              label="Wpisz wiadomość"
              auto-grow
              outlined
              rows="3"
              row-height="25"
              shaped
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center pa-0 mb-7">
            <v-btn outlined elevation="1">Dodaj komentarz</v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="my-4">
          <v-col class="text-start d-flex justify-space-between">
            <v-btn outlined class="mx-0 mt-3" @click="$emit('previousStep')">
              <v-icon left> mdi-arrow-left </v-icon>
              Faktury
            </v-btn>
            <v-btn class="mx-0 mt-3" color="primary" @click="$emit('nextStep')">
              Zatwierdź
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: ["Tak", "Nie"],
      comments: [
        { text: "Was this made on time?" },
        { text: "Everything is fine" },
        { text: "Conversions" },
      ],
    };
  },
};
</script>
