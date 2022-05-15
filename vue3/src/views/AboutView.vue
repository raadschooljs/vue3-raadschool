
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(person,i) in persons" :key="i">{{person.name}} is {{person.value}}</h2>
    <div class="cWrp">
      <counter v-for="(person,i) in persons" :key="i" :owner="{i,person}" @update="updateValue"/>    
    </div>

  </div>
</template>
<script>
import counter from '../components/counter.vue';
export default {
  name: 'About',
  components:{counter},
  data(){
    return {
      persons:[
        {
          name:'hasan',
          value:0
        },
        {
          name:'ali',
          value:0
        },
        {
          name:'reza',
          value:0
        }
      ]
    }
  },
  beforeCreate(){
    // console.log('beforeCreate');
    // console.log(Date.now());
  },
  created(){
    // console.log('created');
    // console.log(Date.now());
  },
  beforeMount(){
    // console.log('beforeMount');
    // console.log(Date.now());
  },
  mounted(){
    // console.log('mounted');
    // console.log(Date.now());
    // this.getList()
  },
  beforeUpdate(){
    // console.log('beforeUpdate');
    // console.log(Date.now());
  },
  updated(){
    // console.log('updated');
    // console.log(Date.now());
  },
 
  methods: {
    updateValue({i,value}){
      this.persons[i].value = value
    },
    getList() {
      this.axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log(res.data)
      })
     
    }
  },
}
</script>
<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: initial;
    align-items: center;
  }
}
h1 {
  color:red;
}
</style>
