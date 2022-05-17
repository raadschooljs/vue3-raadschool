<template>
  <div :class="['alert shadow-lg my-3',color]">
    <div class="w-full justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
				
        <span>{{msg}}</span>

				 <XIcon class="h-5 w-5 text-blue-500 cursor-pointer " @click="$emit('close',{i:`${index}`,show:false})"/>
    </div>
	</div>
</template>

<script>
import {XIcon} from '../../node_modules/@heroicons/vue/solid';
export default {
	components:{XIcon},
props:{
	color:{
		type:String
	},
	msg:{
		type:String
	},
	index:{
		type:Number
	}
}
}
</script>

<style>

</style>