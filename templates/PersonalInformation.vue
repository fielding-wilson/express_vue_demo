<template>
  <form>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <h1>Personal Information</h1>
        </div>
        <div class="cell">
          <h2>Legal Address</h2>
        </div>
        <AddressComponent
          :line1.sync="addresses.legal.line1"
          :line2.sync="addresses.legal.line2"
          :city.sync="addresses.legal.city"
          :state.sync="addresses.legal.state"
          :zip.sync="addresses.legal.zip"/>
        <div class="cell">
          <p>Is your mailing address the same as your legal address?</p>
          <div class="switch small">
            <input
              id="smallSwitch"
              v-model="mailingSameAsLegal"
              class="switch-input"
              type="checkbox"
              name="exampleSwitch"
              true-value="true"
              false-value="false">
            <label
              class="switch-paddle"
              for="smallSwitch">
              <span class="show-for-sr">
                Is your mailing address the same as your legal address?
              </span>
              <span
                class="switch-active"
                aria-hidden="true">
                Yes
              </span>
              <span
                class="switch-inactive"
                aria-hidden="true">
                No
              </span>
            </label>
          </div>
        </div>
        <div
          v-if="showMailingSection"
          class="cell">
          <h2>Mailing Address</h2>
        </div>
        <AddressComponent
          v-if="showMailingSection"
          :line1.sync="addresses.mailing.line1"
          :line2.sync="addresses.mailing.line2"
          :city.sync="addresses.mailing.city"
          :state.sync="addresses.mailing.state"
          :zip.sync="addresses.mailing.zip"/>
        <div class="cell">
          <button
            type="button"
            class="button"
            @click.prevent="handleSubmit">
            Next
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import AddressComponent from './components/AddressComponent.vue';

export default {
  name: 'PersonalInformation',
  components: {
    AddressComponent,
  },
  data() {
    return {};
  },
  computed: {
    showMailingSection() {
      return this.mailingSameAsLegal !== 'true';
    },
  },
  methods: {
    handleSubmit() {
      axios.post('/personal-information', { addresses: this.addresses })
        .then((response) => {
          window.location.href = response.data.nextPage;
        });
    },
  },
};
</script>

<style scoped>

</style>
