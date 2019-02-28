<template>
  <div id="skill">
    <div class="text">
      <h3>技能掌握</h3>
      <p>1.两年前端工作经验，本科，计算机科学与技术专业</p>
      <p>2.精通DIV+CSS布局的HTML代码编写，熟练掌握Photoshop基本操作，能快速完成html静态页面</p>
      <p>3.熟练掌握原生javascript，主流JS框架Jquery，UI框架Bootstrap,layui等</p>
      <p>4.熟练掌握前端MVVM框架Vue全家桶，熟悉前端工程化与模块化开发，有完整Vue项目经验</p>
      <p>5.熟悉热门前端插件，如富文本编辑器tinymce，数据可视化插件echart等</p>
    </div>
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
#skill {
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  background: url("../assets/img/bg1.jpg");
  background-size: cover;
  box-sizing: border-box;
}
.text{
  width: 80%;
  margin: 0 auto;
}
.text h3{
  margin-top: 80px;
}
.text p{
  text-align: left;
  margin-top: 20px;
}
</style>
