<script>
  import { useMouse } from '../composable/useMouse';

  
  // import Counter from '../components/CounterComponent.vue';
  import Counter from '../components/counter.vue';
  export default {
    components:{Counter},
    data(){
      return {
        counterData:1,
        counter: 0,
				city: "Qom",
  
      }
    },
    methods:{
      // handleValue(value){
      //   this.counterData = value
      // }
    },
    setup(){
      const {x,y} = useMouse()
      return {x,y}
    }
  }
</script>

<template>
  <main>
    <h1>home page</h1>
    <br>
    {{x}} {{y}}
    <br>
    <!-- <Counter :modelValue="counterData" @update="handleValue"/> -->
    <Counter v-model:modelValue="counter" v-model:modelCity="city" />
    <br />
    <small>the city is : {{ city }}</small>
  </main>
</template>
