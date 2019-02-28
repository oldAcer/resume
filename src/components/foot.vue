<template>
    <div class="foot">
        <ul class="foot-ul"  >
            <li  class="foot-li" v-for="item,index in menu" :key='index' :class="{'active':$route.path==item.url}">
                <a>
                    <router-link :to="item.url">
                    <span :class="'iconfont ' +item.class"></span>
                    <span class="foot-span">{{item.name}}</span>
                    </router-link>  
                </a>             
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                menu:[]
            }
        },
        mounted(){
            this.$axios
            .get('https://www.easy-mock.com/mock/5c766914cf8fa43c7c46ccca/resume/footlist')
            .then(res => {
                this.menu = this.menu.concat(res.data.data)
            })
            .catch(error =>(console.log(error)))
        }
    }
</script>

<style scoped>
    .foot{
        width: 100%;
        height: 50px;
        border-top: 1px solid #fff;
        position: fixed;
        bottom: 0px;
        left: 0;
        z-index: 99999;
        /* background: rgb(203,151,93) */
    }
    .foot-ul{
        display: flex;
        list-style: none;
        height: 100%;
    }
    .foot-ul li{
        width: 25%;
        height: 100%;
    }
    .foot-li a{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        color: #fff;
    }
    .foot-li a span{
        height: 50%;
        line-height: 25px;
    }
    .foot-li.active a{
        color: #39ac69;
    }
    .foot-li .foot-span{
        font-size: 14px;
    }
</style>
