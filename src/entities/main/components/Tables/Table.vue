<template>
  <v-table class="table">
    <thead>
      <tr>
        <th class="w-25">Type</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in props.items"
        :key="item.package.name + index"
        @click="clickTableItemEvent(item)"
        class="table__item"
      >
        <td>{{ item.package.name }}</td>
        <td>{{ item.package.description }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
  
  <script setup>
//vue
import { defineProps, defineEmits } from "vue";

//props
const props = defineProps({
  items: Array,
});

//emits
const emits = defineEmits(["clickTableItem"]);

//methods
const clickTableItemEvent = (item) => emits("clickTableItem", item.package);
</script>
  
<style lang="scss" scoped>
.table {
  min-height: 500px;
  &__item {
    cursor: pointer;
  }
}
</style>