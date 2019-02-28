<template>
        <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in experience" :key="index">
          <div class="item" :class="'item'+index">
            <h3>{{item.name}}</h3>
            <p>项目描述:{{item.description}}</p>
            <p>应用技术:{{item.technologyStack}}</p>
            <div class="jobContent">
              <span> 技术实现:</span>
              <ul class="jobContent-ul">
                <li class="jobContent-li" v-for="(item,index) in item.jobContent" :key="index">{{item}}</li> 
              </ul>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        loop: true,
         autoplay:true,
        height : window.innerHeight,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      experience:[]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted(){
    this.$axios.post('https://www.easy-mock.com/mock/5c766914cf8fa43c7c46ccca/resume/experience')
    .then((res)=>{
      this.experience = this.experience.concat(res.data.data)
    })
  }
};
</script>
<style scoped>
#carrousel {
  width: 100%;
  height: 100%;
}
.swiper-container{
    height:100%;
}
.item h3{
  margin-top: 80px;
}
.item p,.jobContent{
  margin-top: 20px;
}
.jobContent-ul{
  width: 60%;
  margin: 0 auto;
}
.jobContent-li{
  margin-top: 20px;
  text-align: left
}
.item{
  width: 100%;
  height: 100%;
  background: url(../../assets/img/slide5.jpg) no-repeat;
  background-size:cover; 
  border: 1px solid transparent;
  box-sizing: border-box;
}
.item1{
  background: url(../../assets/img/slide1.jpg) no-repeat;
  background-size:cover; 
}
.item2{
  background: url(../../assets/img/slide5.jpg) no-repeat;
  background-size:cover; 
}
.item3{
  background: url(../../assets/img/slide2.jpg) no-repeat;
  background-size:cover; 
}
.item4{
  background: url(../../assets/img/slide1.jpg) no-repeat;
  background-size:cover; 
}
</style>
