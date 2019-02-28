<template>
  <div id="home">
    <div class="user-photo">
      <img class="user-img" src="../assets/img/user.jpg">
    </div>
    <div class="introduction">
      <h3 class="title">hello , I'm Acer</h3>
      <p>Better to run than curse the road.</p>
      <p class="text">我叫李春良</p>
      <p class="text">一名前端开发工程师</p>
    </div>
    <ul class="hobbies" ref='home'>
      <li>
        <a class="iconfont icon-github" href="https://github.com/oldAcer"></a>
      </li>
      <li>
        <a class="iconfont icon-unie655" @click="connection('wx')">
            <div v-show="isShow.isShowWX" class="connection-modal">
            <div class="connection-way">
              <img src="../assets/img/wx.jpg">
            </div>
            <div class="triangle"></div>
          </div>
        </a>
      </li>
      <li>
        <a class="iconfont icon-qq" @click="connection('qq')">
          <div v-show="isShow.isShowQQ" class="connection-modal">
            <div class="connection-way">
              <img src="../assets/img/qq.jpg">
            </div>
            <div class="triangle"></div>
          </div>
        </a>
      </li>
      <li>
        <a class="iconfont icon-zhihu-circle" href="https://www.zhihu.com/people/xiao-xing-xing-95-58/activities"></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      title: "正文",
      isShow: {
          isShowWX:false,
          isShowQQ:false,
      },
      loading:true
    };
  },
  methods: {
    connection(way) {
        if(way=='wx'){
            this.isShow.isShowWX=!this.isShow.isShowWX;
            this.isShow.isShowQQ = false;
        }else if(way=='qq'){
            this.isShow.isShowQQ=!this.isShow.isShowQQ;
            this.isShow.isShowWX = false;
        }
    }
  },
  mounted(){
      let that = this;
      document.addEventListener('click',function (e) {
          if(!!that.$refs.home.contains(e.target)) return;
          that.isShow.isShowWX=false;
          that.isShow.isShowQQ=false;
      })
  }
};
</script>
<style>
@font-face {
  font-family: "COCOGOOSE";
  src: url("//cdn.webfont.youziku.com/webfonts/nomal/127811/47031/5c76be56f629d8048c41e18a.gif?r=99679447135");
  src: url("//cdn.webfont.youziku.com/webfonts/nomal/127811/47031/5c76be56f629d8048c41e18a.gif?r=99679447135?#iefix")
      format("embedded-opentype"),
    url("//cdn.webfont.youziku.com/webfonts/nomal/127811/47031/5c76be56f629d8048c41e18a.png?r=99679447135")
      format("woff2"),
    url("//cdn.webfont.youziku.com/webfonts/nomal/127811/47031/5c76be56f629d8048c41e18a.bmp?r=99679447135")
      format("woff");
  font-weight: normal;
  font-style: normal;
}
#home {
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    background:url("../assets/img/bg2.jpg");
    background-size:cover;
    box-sizing: border-box;
}
.user-photo {
  width: 100%;
  text-align: center;
  margin-top: 80px;
}
.user-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #a6a9aa;
}
.title {
  font-family: "COCOGOOSE";
}
.introduction p {
  font-family: "COCOGOOSE";
}
.introduction .text {
  font-family: "微软雅黑";
  margin-top: 20px;
}

.hobbies {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.hobbies li {
  padding: 0 20px;
  list-style: none;
}
.hobbies a {
  font-size: 30px;
  position: relative;
  cursor: pointer;
  color: #fff;
}
.connection-modal {
  position: absolute;
  left: -62px;
  bottom: 45px;
  z-index: 10;
}
.connection-way {
  width:150px;
  height: 150px;
  border: 2px solid #337ab7;
  border-radius: 5px;
  background: #fff;
}
.connection-way img {
  width: 100%;
  height: 100%;
}
.triangle{
    width: 0;
    height: 0;
    border-top:10px solid  #337ab7;
    border-bottom: none;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    left: 50%;
    bottom:-10px;
    transform: translate(-50%);
}
</style>


