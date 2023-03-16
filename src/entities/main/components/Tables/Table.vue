<template>
    <v-table>
      <thead>
        <tr>
          <th class="w-25">Type</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in props.items" :key="item.package.name + index" class="table__item">
          <td>{{ item.package.name }}</td>
          <td>{{ item.package.description }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  <script setup>
  //vue
  import { defineProps } from "vue";
  
  //props
  const props = defineProps({
    items: Array,
  });
  </script>
  
  <style lang="scss" scoped>
 .table {
    &__item {
        cursor: pointer;
    }
 }
  </style>