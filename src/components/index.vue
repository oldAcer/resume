<template>
<div id="body">
    <home></home>
</div>
</template>
<script>
    import myhead from '@/components/head'
    import home from '@/components/home'
    import foot from '@/components/foot'
    export default {
        name:"index",
        data(){
            return{
        
            }
        },
        components:{
            myhead,
            home,
            foot
        }
    }
</script>
<style>
#body{
    width: 100%;
    height: 100%;
}
</style>


