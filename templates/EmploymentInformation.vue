<template>
  <form>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <h1>Employment Information</h1>
        </div>
        <div class="cell">
          <h2>Employer Address</h2>
        </div>
        <AddressComponent
          :line1.sync="addresses.employer.line1"
          :line2.sync="addresses.employer.line2"
          :city.sync="addresses.employer.city"
          :state.sync="addresses.employer.state"
          :zip.sync="addresses.employer.zip"/>
      </div>
    </div>
  </form>
</template>

<script>
import AddressComponent from './components/AddressComponent.vue';

export default {
  name: 'EmploymentInformation',
  components: {
    AddressComponent,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
