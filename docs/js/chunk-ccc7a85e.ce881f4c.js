(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccc7a85e"],{"3c11":function(t,e,n){t.exports=n.p+"img/face.3176949e.png"},8808:function(t,e,n){},af50:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-spacer"),a("app-content-title",{staticClass:"headline font-weight-black",attrs:{contentHtml:"노윤철<br>Yoonchul, Roe.<br>(Email: dbscjf324@gmail.com)"}}),a("div",[a("v-container",{staticStyle:{"margin-top":"2.5%","margin-bottom":"2.5%"}},[a("v-row",{staticClass:"pa-3 d-none d-md-flex"},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("my-profile")],1),a("v-col",{staticClass:"my text-center",attrs:{cols:"12",md:"6"}},[a("v-img",{staticClass:"grey lighten-2 face mx-auto",attrs:{src:n("3c11"),width:"200"}})],1)],1),a("v-row",{staticClass:"pa-3 d-md-none"},[a("v-col",{staticClass:"my-auto text-center",attrs:{cols:"12",md:"6"}},[a("v-img",{staticClass:"grey lighten-2 face mx-auto",attrs:{src:n("3c11"),width:"200"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("my-profile")],1)],1),a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[a("v-btn",{attrs:{color:"pink lighten-1",outlined:"outlined",to:"/contact"}},[a("v-icon",{attrs:{left:"left"}},[t._v("mdi-phone-hangup")]),t._v("Contact ")],1)],1)],1)],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticStyle:{"background-color":"#ECEFF1"},attrs:{"my-3":"","py-3":""}},[n("v-container",[n("p",{staticStyle:{"line-height":"180%"},domProps:{innerHTML:t._s(t.contentHtml)}})])],1)},c=[],i={name:"app-content-title",props:["contentHtml","alignCenter"],data:function(){return{}}},l=i,s=n("2877"),u=n("6544"),d=n.n(u),f=n("a523"),p=(n("20f6"),n("e8f2")),m=Object(p["a"])("flex"),b=Object(s["a"])(l,o,c,!1,null,null,null),v=b.exports;d()(b,{VContainer:f["a"],VFlex:m});var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Education")]),n("hr"),n("div",{staticClass:"my-3 pl-3 about-me",domProps:{innerHTML:t._s(t.education)}}),n("br"),n("h1",[t._v("Skill")]),n("hr"),t._l(t.skills,(function(e){return n("div",{key:e.name,staticClass:"my-4 pl-3"},[n("h3",[t._v(t._s(e.name)+" ")]),t._l(e.description,(function(e){return n("li",{key:e,staticClass:"my-1 grey--text text--darken-2 ml-4"},[t._v(" "+t._s(e)+" ")])}))],2)})),n("br")],2)},y=[],h={name:"Home",data:function(){return{education:"<p>\n               \t\t\t<p>2017. 03 ~ 2022 .02</p> <br>\n               \t\t\t<p>&nbsp;&nbsp; Software Engineering</p> <br>\n               \t\t\t<p>&nbsp;&nbsp; Seoil University(서일대학교)<p>\n               \t\t</p>",skills:[{name:"Java",description:["Springframework를 활용하여 어노테이션 기반 MVC 프레임워크 구조에 따른 로그인, 로그아웃 기능이 있는 게시판 프로그램 구현 가능 "]},{name:"Frontend",description:["플러그인, 이벤트가 동작하는 반응형 웹 사이트 작성 가능 (node.js, jQuery, Vue 활용 가능)"]},{name:"JSP, PHP",description:["웹 페이지와 서버, 데이터베이스 연결 가능, 게시판 구현 가능"]},{name:"Android",description:["필요한 기능을 API 문서나 라이브러리를 참조하여 구현할 수 있음.","MVC, MVVM 패턴 등의 대한 이해"]},{name:"RDBMS",description:["기본적인 CRUD SQL과 간단한 테이블 수준의 모델링"]},{name:"OA",description:["워 드(한글, Word) :전반적인 기능 사용에 자유롭고, 다양한 서식 파일 작성 가능","스프레드시트(Excel): 전반적인 기능 사용, 함수 및 도표 작성 가능, 자동 계산식이 적용되는 sheet 작성 가능","프리젠테이션(PowerPoint): 전반적인 기능 사용 가능 다양한 서식에 따라 문서 연결 및 작성 가능"]},{name:"그 외",description:["Adobe Photoshop, After effects, Vegas Pro","기본적인 컴퓨터 조립, 분해 가능"]}]}}},C=h,S=Object(s["a"])(C,g,y,!1,null,null,null),j=S.exports,w={name:"layout-home",components:{MyProfile:j,AppContentTitle:v},data:function(){return{}}},O=w,x=(n("f5e9"),n("8336")),_=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),k=n("5530"),V=(n("4b85"),n("2b0e")),P=n("d9f7"),E=n("80d2"),M=["sm","md","lg","xl"],H=function(){return M.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),A=function(){return M.reduce((function(t,e){return t["offset"+Object(E["m"])(e)]={type:[String,Number],default:null},t}),{})}(),N=function(){return M.reduce((function(t,e){return t["order"+Object(E["m"])(e)]={type:[String,Number],default:null},t}),{})}(),L={col:Object.keys(H),offset:Object.keys(A),order:Object.keys(N)};function B(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var F=new Map,J=V["default"].extend({name:"v-col",functional:!0,props:Object(k["a"])(Object(k["a"])(Object(k["a"])(Object(k["a"])({cols:{type:[Boolean,String,Number],default:!1}},H),{},{offset:{type:[String,Number],default:null}},A),{},{order:{type:[String,Number],default:null}},N),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,r=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var i=F.get(o);return i||function(){var t,e;for(e in i=[],L)L[e].forEach((function(t){var a=n[t],r=B(e,t,a);r&&i.push(r)}));var a=i.some((function(t){return t.startsWith("col-")}));i.push((t={col:!a||!n.cols},Object(_["a"])(t,"col-".concat(n.cols),n.cols),Object(_["a"])(t,"offset-".concat(n.offset),n.offset),Object(_["a"])(t,"order-".concat(n.order),n.order),Object(_["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),F.set(o,i)}(),t(n.tag,Object(P["a"])(a,{class:i}),r)}}),R=n("132d"),I=n("adda"),T=n("0fd9"),$=n("2fa4"),D=Object(s["a"])(O,a,r,!1,null,"dd8fbb62",null);e["default"]=D.exports;d()(D,{VBtn:x["a"],VCol:J,VContainer:f["a"],VIcon:R["a"],VImg:I["a"],VRow:T["a"],VSpacer:$["a"]})},f5e9:function(t,e,n){"use strict";var a=n("8808"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-ccc7a85e.ce881f4c.js.map