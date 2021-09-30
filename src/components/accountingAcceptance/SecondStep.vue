<template>
  <v-container class="pa-0">
    <v-form class="px-3">
      <v-card class="pa-10 outlined">
        <v-row>
          <v-col class="my-5">
            <h3
              class="
                text-h5
                grey--text
                text--darken-3
                font-weight-bold
                text-center
              "
            >
              Dane faktury
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12" md="4">
            <v-text-field label="Nr faktury" outlined disabled> </v-text-field>
          </v-col>
          <v-col xs="12" md="4">
            <base-select :items="items" label="Typ dokumentu"></base-select>
          </v-col>
          <v-col xs="12" md="4">
            <BaseDatePicker label="Data wpływu" />
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12" md="4">
            <BaseDatePicker label="Data wystawienia" />
          </v-col>
          <v-col xs="12" md="4">
            <BaseDatePicker label="Data wpisu do DA" />
          </v-col>
          <v-col xs="12" md="4">
            <BaseDatePicker label="Data płatności" />
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12" md="8">
            <base-select
              :items="items"
              label="Opisujący merytorycznie"
            ></base-select>
          </v-col>
          <v-col xs="12" md="4">
            <v-text-field label="Numer klienta" outlined disabled>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="my-3">
          <v-col>
            <h4 class="text-h6 text-center">Kwoty otrzymane z OCR</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3">
            <v-text-field outlined label="Kwota netto" v-model="netValue">
            </v-text-field>
          </v-col>
          <v-col md="2">
            <v-text-field outlined label="Kwota VAT" v-model="netValue">
            </v-text-field>
          </v-col>
          <v-col md="3">
            <v-text-field outlined label="Kwota brutto" v-model="netValue">
            </v-text-field>
          </v-col>
          <v-col md="2">
            <base-select :items="items" label="Waluta"></base-select>
          </v-col>
          <v-col md="2">
            <v-text-field
              outlined
              label="Liczba pozycji"
              :rules="[rules.isAboveLimit]"
              v-model="positonsNumber"
              type="number"
              hint="Od 1 do 25"
              persistent-hint
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="my-3">
          <v-col>
            <h4 class="text-h6 text-center">Pozycje dokumentu</h4>
          </v-col>
        </v-row>
        <v-expansion-panels multiple class="mb-4" v-model="panel">
          <DocumentPositions
            v-for="component in documentPositionsList"
            :key="component.id"
            :id="component.id"
            @duplicate="addDocumentPosition"
          />
        </v-expansion-panels>
        <v-row class="justify-center mt-5">
          <v-btn outlined elevation="1">Policz kwoty</v-btn>
        </v-row>
        <v-row class="my-3 mt-12">
          <v-col>
            <h4 class="text-h6 text-center">Suma opisu merytorycznego</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="2" xs="12">
            <base-select :items="items" label="Waluta"></base-select>
          </v-col>
          <v-col xs="12" md="4">
            <v-text-field label="Kwota netto" outlined> </v-text-field>
          </v-col>
          <v-col xs="12" md="2">
            <v-text-field label="Kwota VAT" outlined> </v-text-field>
          </v-col>
          <v-col xs="12" md="4">
            <v-text-field label="Kwota brutto" outlined> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" xs="12">
            <base-select :items="items" label="Faktura opłacona"></base-select>
          </v-col>
          <v-col md="4" xs="12">
            <base-select
              :items="items"
              label="Dyspozycyjność wartości zapłaty faktury"
            ></base-select>
          </v-col>
          <v-col md="3">
            <base-download-field
              label="Dokument zakupu"
              readonly
            ></base-download-field>
          </v-col>
          <v-col md="2">
            <v-text-field
              :items="items"
              label="Podgląd"
              value="Tak"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="my-3">
          <v-col>
            <h4 class="text-h6 text-center">
              Załączniki dokumentu kosztownego
            </h4>
          </v-col>
        </v-row>
        <v-row class="my-3">
          <v-col class="d-flex justify-end">
            <v-btn
              color="accent"
              elevation="2"
              class="mr-2"
              @click="addNewRecord"
              >Dodaj nowy rekord</v-btn
            >
          </v-col>
        </v-row>
        <DocAttachments
          v-for="component in recordList"
          :key="component.id"
          :id="component.id"
          @delete="deleteRecord"
        />
        <v-divider></v-divider>
        <v-row class="my-4">
          <v-col class="text-start d-flex justify-space-between">
            <v-btn outlined class="mx-0 mt-3" @click="$emit('previousStep')">
              <v-icon left> mdi-arrow-left </v-icon>
              Dane sprzedawcy
            </v-btn>
            <v-btn class="mx-0 mt-3" color="primary" @click="$emit('nextStep')">
              Rejestracja i akceptacja
              <v-icon class="ml-2" right> mdi-arrow-right </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import BaseDatePicker from "@/components/ui/BaseDatePicker";
import DocumentPositions from "@/components/accountingAcceptance/DocumentPositions";
import DocAttachments from "@/components/accountingAcceptance/DocAttachments";

export default {
  components: {
    BaseDatePicker,
    DocumentPositions,
    DocAttachments,
  },
  created() {
    this.addDocumentPosition();
  },
  data() {
    return {
      fakeIDPositions: 1,
      fakeIDRecords: 1,
      items: ["Item 1", "Item 2"],
      documentType: "",
      describing: "",
      netValue: 16,
      currency: 12,
      positonsNumber: 11,
      rules: {
        isAboveLimit: (value) => value < 25 && value > 0,
      },
      panel: [0],
      documentPositionsList: [],
      recordList: [],
    };
  },
  methods: {
    resetSelect(field) {
      this[field] = "";
    },
    addDocumentPosition() {
      const id = this.getID();
      const item = {
        id,
        type: "document-positions",
      };
      this.documentPositionsList.unshift(item);
    },
    addNewRecord() {
      const id = this.getIDRecords();
      const item = {
        id,
        type: "doc-attachments",
      };
      this.recordList.unshift(item);
    },
    getID() {
      return this.fakeIDPositions++;
    },
    getIDRecords() {
      return this.fakeIDRecords++;
    },
    deleteRecord(id) {
      const index = this.recordList.findIndex((r) => r.id === id);
      this.recordList.splice(index, 1);
    },
  },
};
</script>