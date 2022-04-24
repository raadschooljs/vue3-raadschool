<template>
  <div>
    <h1>Hello Vue</h1>
    <todolist></todolist>
    <card />
    <card />
  </div>
</template>

<script>
import card from './components/card.vue'
import todolist from './components/todolist.vue'
export default {
  components:{card,todolist}
}
</script>

<style>

</style>