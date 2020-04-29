<template>
  <div class="container mt-5">
    <div class="card-body">
          <h1>{{valor}}</h1>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      valor:""
    } 
  },

  async created(){
    try {
          const data = await axios.get('https://spreadsheets.google.com/feeds/cells/1xZS_INQh1dKZM8q7Lje5zSj8CA3rPdskAL9vZla9g08/1/public/full?alt=json');
          console.log(data.data.feed.entry[0].gs$cell.inputValue)
          this.valor= data.data.feed.entry[3].gs$cell.inputValue
    }catch(error){
      console.log(error)
    }
  }
}
</script>

<style scoped>

</style>
