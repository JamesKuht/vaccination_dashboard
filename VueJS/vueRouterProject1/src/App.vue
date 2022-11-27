<template>

<TheNavigation />

  <div class="container">
    <RouterView :key="$route.path" />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import TheNavigation from '@/components/TheNavigation.vue'
export default{
  components: {TheNavigation}
}
</script>

