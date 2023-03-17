<template>
  <!-- layouts нужно сделать через components is, но так как тут все просто, будет так -->
  <main class="main w-75 mx-auto pt-10">
    <Main />
  </main>
  <footer class="footer px-10 py-10">
    <h5>Git:</h5>
    <a href="https://github.com/myoldnick">https://github.com/myoldnick</a>
    <h5>Name:</h5>
    <p>Denys</p>
  </footer>
</template>

<script setup>
//entities
import Main from "./entities/main/Main.vue";
</script>


<style lang="scss" scoped>
.main {
  height: 80vh;
}

.footer {
  height: 20vh;
  background-color: rgb(218, 222, 222);
}
</style>
