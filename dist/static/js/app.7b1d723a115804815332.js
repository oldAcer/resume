webpackJsonp([1],{"+Con":function(t,e){},"0Brf":function(t,e){},"1Bnj":function(t,e,n){t.exports=n.p+"static/img/user.ac02ee8.jpg"},"7IPI":function(t,e){},"991W":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("991W"),n("muQq");var i=n("zL8q"),s=n.n(i),o=(n("tvR6"),n("7+uW")),a=n("mtWM"),c=n.n(a),r=n("mw3O"),l=n.n(r),u={data:function(){return{menu:[]}},mounted:function(){var t=this;this.$axios.get("https://www.easy-mock.com/mock/5c766914cf8fa43c7c46ccca/resume/footlist").then(function(e){t.menu=t.menu.concat(e.data.data)}).catch(function(t){return console.log(t)})}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot"},[n("ul",{staticClass:"foot-ul"},t._l(t.menu,function(e,i){return n("li",{key:i,staticClass:"foot-li",class:{active:t.$route.path==e.url}},[n("a",[n("router-link",{attrs:{to:e.url}},[n("span",{class:"iconfont "+e.class}),t._v(" "),n("span",{staticClass:"foot-span"},[t._v(t._s(e.name))])])],1)])}),0)])},staticRenderFns:[]};var p=n("VU/8")(u,h,!1,function(t){n("0Brf")},"data-v-974e2014",null).exports,f={name:"App",components:{foot:p}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("foot")],1)},staticRenderFns:[]};var d=n("VU/8")(f,v,!1,function(t){n("7IPI")},null,null).exports,m=n("/ocq"),_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"head"},[this._v("\n    "+this._s(this.title)+"\n")])},staticRenderFns:[]};var w={name:"home",data:function(){return{title:"正文",isShow:{isShowWX:!1,isShowQQ:!1},loading:!0}},methods:{connection:function(t){"wx"==t?(this.isShow.isShowWX=!this.isShow.isShowWX,this.isShow.isShowQQ=!1):"qq"==t&&(this.isShow.isShowQQ=!this.isShow.isShowQQ,this.isShow.isShowWX=!1)}},mounted:function(){var t=this;document.addEventListener("click",function(e){t.$refs.home.contains(e.target)||(t.isShow.isShowWX=!1,t.isShow.isShowQQ=!1)})}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",{ref:"home",staticClass:"hobbies"},[t._m(2),t._v(" "),n("li",[n("a",{staticClass:"iconfont icon-unie655",on:{click:function(e){return t.connection("wx")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow.isShowWX,expression:"isShow.isShowWX"}],staticClass:"connection-modal"},[t._m(3),t._v(" "),n("div",{staticClass:"triangle"})])])]),t._v(" "),n("li",[n("a",{staticClass:"iconfont icon-qq",on:{click:function(e){return t.connection("qq")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow.isShowQQ,expression:"isShow.isShowQQ"}],staticClass:"connection-modal"},[t._m(4),t._v(" "),n("div",{staticClass:"triangle"})])])]),t._v(" "),t._m(5)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-photo"},[e("img",{staticClass:"user-img",attrs:{src:n("1Bnj")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introduction"},[e("h3",{staticClass:"title"},[this._v("hello , I'm Acer")]),this._v(" "),e("p",[this._v("Better to run than curse the road.")]),this._v(" "),e("p",{staticClass:"text"},[this._v("我叫李春良")]),this._v(" "),e("p",{staticClass:"text"},[this._v("一名前端开发工程师")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"iconfont icon-github",attrs:{href:"https://github.com/oldAcer"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"connection-way"},[e("img",{attrs:{src:n("rZOy")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"connection-way"},[e("img",{attrs:{src:n("hrUR")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"iconfont icon-zhihu-circle",attrs:{href:"https://www.zhihu.com/people/xiao-xing-xing-95-58/activities"}})])}]};var C={name:"index",data:function(){return{}},components:{myhead:n("VU/8")({data:function(){return{title:""}},mounted:function(){switch(this.$route.path){case"/":this.title="首页";break;case"/skill":this.title="技能";break;case"/work":this.title="经历";break;case"/experience":this.title="经验"}}},_,!1,function(t){n("hztD")},"data-v-8dbb3d90",null).exports,home:n("VU/8")(w,x,!1,function(t){n("+Con")},null,null).exports,foot:p}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"body"}},[e("home")],1)},staticRenderFns:[]};var S=n("VU/8")(C,g,!1,function(t){n("mn0E")},null,null).exports,k={data:function(){return{}},components:{foot:p}},$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"skill"}},[n("div",{staticClass:"text"},[n("h3",[t._v("技能掌握")]),t._v(" "),n("p",[t._v("1.两年前端工作经验，本科，计算机科学与技术专业")]),t._v(" "),n("p",[t._v("2.精通DIV+CSS布局的HTML代码编写，熟练掌握Photoshop基本操作，能快速完成html静态页面")]),t._v(" "),n("p",[t._v("3.熟练掌握原生javascript，主流JS框架Jquery，UI框架Bootstrap,layui等")]),t._v(" "),n("p",[t._v("4.熟练掌握前端MVVM框架Vue全家桶，熟悉前端工程化与模块化开发，有完整Vue项目经验")]),t._v(" "),n("p",[t._v("5.熟悉热门前端插件，如富文本编辑器tinymce，数据可视化插件echart等")])])])}]};var y=n("VU/8")(k,$,!1,function(t){n("yCga")},null,null).exports,b={data:function(){return{}},components:{foot:p}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"work"}},[e("el-steps",{attrs:{direction:"vertical",space:"30%"}},[e("el-step",{attrs:{title:"2016.02-2017.1-服装外贸",description:"服装外贸理单"}}),this._v(" "),e("el-step",{attrs:{title:"2017.02-2017.12-前端开发",description:"在绍兴原色数码公司理单的过程中,接触到公司网络部的前端工作，对前端产生兴趣，自学了前端，在公司开始工作，负责制作静态页面，将后台数据使用ajax渲染到页面"}}),this._v(" "),e("el-step",{attrs:{title:"2018.03-2019.2-前端开发",description:"南京眼湖科技担任前端开发,主要工作:切图，与ui及后端程序员合作，定制数据格式，完成数据交互及功能的开发"}})],1)],1)},staticRenderFns:[]};var Q=n("VU/8")(b,E,!1,function(t){n("s702")},null,null).exports,q=n("7QTg"),V=n.n(q),R={name:"carrousel",data:function(){return{swiperOption:{direction:"vertical",loop:!0,autoplay:!0,height:window.innerHeight,mousewheel:!0,pagination:{el:".swiper-pagination",clickable:!0}},experience:[]}},components:{swiper:q.swiper,swiperSlide:q.swiperSlide},mounted:function(){var t=this;this.$axios.post("https://www.easy-mock.com/mock/5c766914cf8fa43c7c46ccca/resume/experience").then(function(e){t.experience=t.experience.concat(e.data.data)})}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.experience,function(e,i){return n("swiper-slide",{key:i},[n("div",{staticClass:"item",class:"item"+i},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v("项目描述:"+t._s(e.description))]),t._v(" "),n("p",[t._v("应用技术:"+t._s(e.technologyStack))]),t._v(" "),n("div",{staticClass:"jobContent"},[n("span",[t._v(" 技术实现:")]),t._v(" "),n("ul",{staticClass:"jobContent-ul"},t._l(e.jobContent,function(e,i){return n("li",{key:i,staticClass:"jobContent-li"},[t._v(t._s(e))])}),0)])])])}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var U={data:function(){return{}},components:{foot:p,carrousel:n("VU/8")(R,j,!1,function(t){n("Q7hO")},"data-v-7bb41d08",null).exports}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"experience"}},[e("carrousel")],1)},staticRenderFns:[]};var F=n("VU/8")(U,W,!1,function(t){n("tgh9")},null,null).exports;o.default.use(m.a);var O=new m.a({mode:"hash",routes:[{path:"/",name:"index",component:S},{path:"/skill",name:"skill",component:y},{path:"/work",name:"work",component:Q},{path:"/experience",name:"experience",component:F}]});n("v2ns");o.default.use(V.a),o.default.prototype.$axios=c.a,o.default.prototype.qs=l.a,o.default.use(s.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:O,components:{App:d},template:"<App/>"})},Q7hO:function(t,e){},hrUR:function(t,e,n){t.exports=n.p+"static/img/qq.a9a7630.jpg"},hztD:function(t,e){},mn0E:function(t,e){},muQq:function(t,e){},rZOy:function(t,e,n){t.exports=n.p+"static/img/wx.cbdd054.jpg"},s702:function(t,e){},tgh9:function(t,e){},tvR6:function(t,e){},v2ns:function(t,e){},yCga:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7b1d723a115804815332.js.map