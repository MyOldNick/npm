<template>
  <div>
    <div class="d-flex">
      <v-text-field
        v-model="searchInputValue"
        label="Find package"
      ></v-text-field>
      <v-btn
        @click="findPackage(searchInputValue, page)"
        size="x-large"
        class="ml-5"
        >Find</v-btn
      >
    </div>
    <Loader v-if="loading" />
    <div v-else>
      <Table
        @clickTableItem="(item) => setCurrentItem(item)"
        :items="packages"
      />
      <v-pagination
        :model-value="page"
        @update:modelValue="setPage"
        :length="paginationLength"
        class="mt-10"
      ></v-pagination>
    </div>
    <Modal
      @updateModalModel="setModalState"
      :model="openModal"
      :package="currentItem"
    />
  </div>
</template>

<script setup>
//vue
import { ref, computed } from "vue";
//vuex
import { useStore } from "vuex";
//components
import Table from "./components/tables/Table.vue";
import Loader from "../../ui/loaders/Loader.vue";
import Modal from "./components/modals/Modal.vue";

//state
const store = useStore();
const searchInputValue = ref("");
const page = ref(1);
const loading = ref(false);
const openModal = ref(false);
const currentItem = ref();
const packages = computed(() => store.state.package.packages);
const paginationLength = computed(() => store.state.package.totalPages / 10);

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

const setCurrentItem = (item) => {
  currentItem.value = item;

  setModalState(true);
};

const setModalState = (value) => (openModal.value = value);
</script>

<style lang="scss" scoped>
</style>