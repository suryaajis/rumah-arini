<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <table-search/>
  </div>
</template>

<script>
import TableSearch from '../components/TableSearch.vue'

export default {
  name: 'Home',
  components: {
    TableSearch
  }
}
</script>
