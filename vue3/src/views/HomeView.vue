<script>
  import { useMouse } from '../composable/useMouse';
  import gsap from "gsap";
  
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
    mounted(){
      gsap.from(this.$refs.title,{x:-300,y:200,opacity:0,duration:2,fontSize:'3rem'})
    },
    setup(){
      const {x,y} = useMouse()
      return {x,y}
    }
  }
</script>

<template>
  <main>
    <h1 class="text-xl font-bold" ref="title">Home Page</h1>
    <br>
    {{x}} {{y}}
    <br>
    <!-- <Counter :modelValue="counterData" @update="handleValue"/> -->
    <Counter v-model:modelValue="counter" v-model:modelCity="city" />
    <br />
    <small>the city is : {{ city }}</small>
  </main>
</template>
