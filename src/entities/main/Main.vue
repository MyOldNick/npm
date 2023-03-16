<template>
  <div class="d-flex">
    <v-text-field
      v-model="searchInputValue"
      label="Find package"
    ></v-text-field>
    <v-btn @click="findPackage(searchInputValue, page)" size="x-large" class="ml-5">Find</v-btn>
  </div>
  <h1 v-if="loading">Loading...</h1>
  <div v-else>
    <Table :items="packages" />
    <v-pagination
      :model-value="page"
      @update:modelValue="setPage"
      :length="paginationLength"
      class="mt-10"
    ></v-pagination>
  </div>
</template>

<script setup>
//vue
import { ref, computed } from "vue";
//vuex
import { useStore } from "vuex";
//components
import Table from "./components/Tables/Table.vue";

//state
const store = useStore();
const searchInputValue = ref("");
const page = ref(1);
const loading = ref(false);
const openModal = ref(false);
const packages = computed(() => store.state.package.packages);
const paginationLength = computed(() => store.state.package.totalPages / 10)

//methods
const findPackage = async (name, page) => {
  setLoading(true);

  await store.dispatch("getPackages", { name, page });

  setLoading(false);
};


const setPage = (value) => {
  page.value = value;

  findPackage(searchInputValue.value, page.value);
};

const setLoading = (value) => (loading.value = value);
</script>

<style lang="scss" scoped>
</style>