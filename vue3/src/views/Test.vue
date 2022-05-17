<template>
    <div class="border border-orange-900">
        <h1>Test page</h1>
        <alert v-for="(alert,i) in alerts" :key="i" :color="alert.color" :index="i" :msg="alert.msg" v-show="alert.show" @close="closeAlert"/>
    </div>
</template>

<script>
import alert from '../components/alert.vue';
export default {
    components:{alert},
    data(){
        return {
            alerts:[
                {
                    color:'alert',
                    msg:'this is msg',
                    show:true
                },
                {
                    color:'alert-info',
                    msg:'this is info msg',
                    show:true
                },
                {
                    color:'alert-success',
                    msg:'this is success msg',
                    show:true
                },
                {
                    color:'alert-warning',
                    msg:'this is warning msg',
                    show:true
                },
                {
                    color:'alert-error',
                    msg:'this is error msg',
                    show:true
                },
            ]
        }
    },
    methods:{
        closeAlert({i,show}){
            this.alerts[i].show = show
        }
    }
}
</script>

<style>

</style>