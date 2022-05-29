<template>
  <button class="btn btn-sm mx-2" @click="plus">+</button>
  {{modelValue}}
  <button class="btn btn-sm mx-2" @click="minus">-</button>
</template>

<script>
export default {
    data(){
        return {
            value:this.valueProp
        }
    },
    methods:{
        plus(){
            this.$emit('update',this.modelValue+1)
        },
        minus(){
            if(this.modelValue > 0) {
                this.$emit('update',this.modelValue-1)
            }
        },
    },
    emits:['update'],
    props:{
        modelValue:{
            type:Number,
            default:0
        }
    }
}
</script>

<style>

</style>