<template>
  <v-container>
    <v-row justify="center">
      <span class="mx-1" :class="{ active: currentStep === 1 }"
        >Dane dostawcy</span
      >
      -
      <span class="mx-1" :class="{ active: currentStep === 2 }"
        >Dane do faktury</span
      >
      -
      <span class="mx-1" :class="{ active: currentStep === 3 }"
        >Rejestracja i akceptacja</span
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BaseSteps",
  props: ["currentStep"],
};
</script>

<style lang="scss">
.active {
  color: #f0a500 !important;
}
</style>