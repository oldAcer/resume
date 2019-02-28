<template>
    <div class="head">
        {{title}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                title:''
            }
        },
        mounted(){
            switch (this.$route.path) {
                case '/':
                    this.title ='首页'
                    break;
                case '/skill':
                    this.title ='技能'
                    break;
                case '/work':
                    this.title ='经历'
                    break;
                case '/experience':
                    this.title ='经验'
                    break;
                default:
                    break;
            }
        }
    }
</script>

<style scoped>

</style>
