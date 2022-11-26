<template>
  <div id="nav">
    <RouterLink id="logo" to="/">Vue School Travel App</RouterLink>
    <RouterLink 
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id}}"
        >
        {{destination.name}}
    </RouterLink>

  </div>
</template>

<!--we need to import them into the script, then export them to the template as a data property-->
<script>
import sourceData from '@/data.json'
export default{
    data(){
        return{
            destinations: sourceData.destinations
        }
    }
}
</script>

