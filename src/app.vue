<template>
    <div>
        <router-link to="/view1">跳转至View1</router-link>
        <router-link to="/view2">跳转至View2</router-link>
        <router-link to="/">跳转至主页</router-link>
        <router-view></router-view>        

        <my-input-component></my-input-component>

        
    </div>
</template>
<script>
    import myInputComponent from './component/myinputcomponent.vue'
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        },
        components:{
            myInputComponent
        }
    };
</script>