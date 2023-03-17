<template>
  <v-dialog v-model="props.model" @update:modelValue="modalEvent" width="auto">
    <v-card class="px-5 py-5">
      <v-card-title
        >Name: {{ props.package.name }}
        {{ props.package.version }}</v-card-title
      >
      <v-card-text>
        Description: {{ props.package.description }}
        <br />
        Publisher:
        <br />
        email: {{ props.package.publisher.email }}
        <br />
        user: {{ props.package.publisher.username }}
        <br />
        <br />
        maintainers:
        <p v-for="user in props.package.maintainers" :key="user.username">
          username: {{ user.username }}, email: {{ user.email }}
        </p>
        <br />
        <br />
        Links:
        <p
          v-for="[key, link] in Object.entries(props.package.links)"
          :key="key"
        >
          {{ key }}:
          <a :href="link">{{ link }}</a>
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
//vue
import { defineProps, defineEmits } from "vue";

//props
const props = defineProps({
  package: Object,
  model: Boolean,
});

//emits
const emits = defineEmits(["updateModalModel"]);

//methods
const modalEvent = () => emits("updateModalModel");
</script>

<style>
</style>