<template>
  <div class="medium-6 cell">
    <div class="cell">
      <label>Line 1
        <input
          v-model="inputLine1"
          type="text">
      </label>
    </div>
    <div class="cell">
      <label>Line 2
        <input
          v-model="inputLine2"
          type="text">
      </label>
    </div>
    <div class="cell">
      <label>City
        <input
          v-model="inputCity"
          type="text">
      </label>
    </div>
    <div class="cell">
      <label>State
        <input
          v-model="inputState"
          type="text">
      </label>
    </div>
    <div class="cell">
      <label>Zip
        <input
          v-model="inputZip"
          type="text">
      </label>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AddressComponent',
  props: {
    line1: {
      type: String,
      default: '',
    },
    line2: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
    zip: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputLine1: {
      get() {
        return this.line1;
      },
      set(newValue) {
        this.$emit('update:line1', newValue);
      },
    },
    inputLine2: {
      get() {
        return this.line2;
      },
      set(newValue) {
        this.$emit('update:line2', newValue);
      },
    },
    inputCity: {
      get() {
        return this.city;
      },
      set(newValue) {
        this.$emit('update:city', newValue);
      },
    },
    inputState: {
      get() {
        return this.state;
      },
      set(newValue) {
        this.$emit('update:state', newValue);
      },
    },
    inputZip: {
      get() {
        return this.zip;
      },
      set(newValue) {
        this.$emit('update:zip', newValue);
      },
    },
  },
};
</script>

<style scoped>

</style>
