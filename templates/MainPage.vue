<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
      <div class="cell">
        <div class="slide">
          <div class="title">
            <h1>Server Side Rendered Vue with Express-Vue</h1>
            <h3>Fielding Wilson, Principal Software Engineer</h3>
            <h3>fielding.wilson@icloud.com</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style scoped>
.slide {
  height:100vh;
  background-color: #4682b4;
  position: relative;
}
.title {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 0.9375rem;
  padding-right: 1.875rem;
}
h1, h3 {
  color: #fff;
  text-align: right;
}
</style>
