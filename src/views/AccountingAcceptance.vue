<template>
  <div class="accounting-container mt-16">
    <v-container>
      <v-row class="flex-column">
        <v-col>
          <h2
            class="
              text-h4
              grey--text
              text--darken-4
              font-weight-bold
              text-uppercase text-center
            "
          >
            Akceptacja księgowa
          </h2>
          <v-row class="my-4">
            <v-col>
              <BaseSteps :currentStep="currentStepNumber" />
            </v-col>
          </v-row>
          <keep-alive>
            <component
              :is="currentStep"
              @nextStep="goToNextStep"
              @previousStep="goToPreviousStep"
            ></component>
          </keep-alive>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BaseSteps from "@/components/ui/BaseSteps";
import FirstStep from "@/components/accountingAcceptance/FirstStep";
import SecondStep from "@/components/accountingAcceptance/SecondStep";
import ThirdStep from "@/components/accountingAcceptance/ThirdStep";

export default {
  name: "AccountingAcceptance",
  components: {
    BaseSteps,
    // dla ułatwienia zmieniam na step-x
    "step-1": FirstStep,
    "step-2": SecondStep,
    "step-3": ThirdStep,
  },
  data() {
    return {
      valid: false,
      currentStep: "step-1",
      currentStepNumber: 1,
    };
  },
  methods: {
    goToNextStep() {
      const step = +this.currentStep.slice(-1) + 1;
      this.currentStepNumber = step;
      this.currentStep = `step-${step}`;
      this.scrollToTop();
    },
    goToPreviousStep() {
      const step = +this.currentStep.slice(-1) - 1;
      this.currentStepNumber = step;
      this.currentStep = `step-${step}`;
      this.scrollToTop();

      console.log(this.currentStepNumber);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.accounting-container {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
