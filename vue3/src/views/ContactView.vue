<template>
  <div class="contact">
    <h1>This is an contact page</h1>
  </div>
</template>
<script>
export default {
  methods:{
    autoRoute(){
      setTimeout(() => {
        this.$router.push({ name: 'about', params: { userId: '123',userName:'john doe' },query: { brand: 'samsung' }})
      }, 3000);
    }
  },
  mounted(){
    this.autoRoute()
  }
}

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
