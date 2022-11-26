<template>

<TheNavigation />

  <div class="container">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import TheNavigation from '@/components/TheNavigation.vue'
export default{
  components: {TheNavigation}
}
</script>

