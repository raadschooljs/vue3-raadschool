<template>
  <div class="counter">
      owner is {{owner.person.name}} have {{owner.person.value}} value
      <div class="counterWrp">
          <button class="btn" @click="plus()">plus</button>
          <span>{{counter}}</span>
          <button class="btn" @click="minus()">minus</button>
      </div>
      {{doubleCounter}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            counter:0,
        }
    },
    computed:{
        doubleCounter(){
            return this.counter * 2
        }
    },
    methods:{
        plus(){
            this.counter++
            this.$emit('update',{i:this.owner.i,value:this.counter})
        },
        minus(){
            this.counter--
            this.$emit('update',{i:this.owner.i,value:this.counter})
        },
    },
    props:{
        owner:{
            type:Object
        }
    }
}
</script>

<style>
.counter {
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
    color: aliceblue;
}
span {
    margin:10px 20px
}
.counterWrp {
    display: flex;
}
</style>