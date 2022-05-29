<template>
    <div>
      <button class="btn mx-3" @click="plus">+</button>{{ modelValue }}<button class="btn mx-3" @click="minus">-</button>
    </div>
	<br />
	<button class="btn btn-sm btn-secondary" @click="changeCity">change city</button>
    <br>
    amount is :  {{amount}}
    <br>
    my name is {{data.name}} and I'm {{data.age}} years old
    <br>
    {{data.doubleAge}}
  
</template>

<script lang="ts">
import {defineComponent,ref,reactive,computed,watch} from 'vue';

export default defineComponent({
    props: {
        modelValue: { type: Number, default: 0 },
        modelCity: { type: String, default: "Qom" }
    },
    emits: ["update:modelValue", "update:modelCity"],
    setup(props,{emit})  {
        const plus= ()=>emit("update:modelValue", props.modelValue + 1)
        const minus = () => {
            if (props.modelValue > 0) {
                emit("update:modelValue", props.modelValue - 1)
                }
        }
        const amount = ref(0)
        const data = reactive({
            name:"ali",
            age:18,
            cars:['benz',],
            doubleAge:computed(()=>data.age*2)
        })
        // const doubleAge = computed(()=>data.age*2)
        const changeCity = () => {
				emit("update:modelCity", "Tehran")
			}
       
        watch(
            ()=>data.age,
            (val,oldVal)=>{console.log(val,oldVal);}
            )
        return { plus, minus, changeCity,amount,data }
    }
})
</script>

<style>

</style>