<template>
  <div id="work">
    <el-steps direction="vertical" space="30%">
        <el-step  title="2016.02-2017.1-服装外贸" description="服装外贸理单"></el-step>
        <el-step  title="2017.02-2017.12-前端开发" description="在绍兴原色数码公司理单的过程中,接触到公司网络部的前端工作，对前端产生兴趣，自学了前端，在公司开始工作，负责制作静态页面，将后台数据使用ajax渲染到页面"></el-step>
        <el-step  title="2018.03-2019.2-前端开发" description="南京眼湖科技担任前端开发,主要工作:切图，与ui及后端程序员合作，定制数据格式，完成数据交互及功能的开发"></el-step>
    </el-steps>
  </div>
</template>

<script>
import foot from "@/components/foot";
export default {
  data() {
    return {};
  },
  components: {
    foot
  }
};
</script>

<style>
#work {
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  background: url("../../assets/img/bg4.jpg");
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
}
.el-steps{
    width: 80%;
    margin: 20px auto 0;
    height: calc(100% - 20px);
}
.el-step.is-vertical .el-step__title{
    font-size: 16px;
    color: #fff;
}
.el-step.is-vertical .el-step__description{
    color: #fff;
    font-size: 14px;
}
</style>
