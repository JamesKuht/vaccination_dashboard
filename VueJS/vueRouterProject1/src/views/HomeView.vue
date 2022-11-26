<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
    <!--below we are looping through the destinations in the data json file
    then adding a unique key to them using v-bind, so that we can re-use or re-order them
    then adding a "to" attribute, which links to the destination slug (a url friendly version of the name of the destination)-->
    <RouterLink 
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name: 'destination.show', params:{id: destination.id}}"
      >
    <h2>{{destination.name}}</h2>
    <img :src="`/images/${destination.image}`" :alt="destination.name">
    </RouterLink>
  </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data(){
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>