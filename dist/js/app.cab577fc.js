(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"039a":function(t,e,n){"use strict";var r=n("3760"),i=n.n(r);i.a},"30d6":function(t,e,n){},3760:function(t,e,n){},"3fff":function(t,e,n){t.exports=n.p+"img/no.f98b32ce.png"},"41f3":function(t,e,n){"use strict";var r=n("bd16"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=n("5c96"),a=n.n(i),o=(n("0fae"),n("5f2b")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"padding-top":"40px"}},[r("center",[t.user.loggedIn?r("div",[r("h1",[t._v("Already Logged in")]),r("el-button",{staticStyle:{width:"300px",height:"50px",border:"2px solid #5A487A"},on:{click:function(e){return t.enterApp()}}},[r("span",{staticStyle:{"font-size":"20px"}},[t._v("Enter Application")])])],1):r("div",[r("h3",[r("p",{staticClass:"pa"},[t._v("Login to Explore Photographs")])]),r("p",{staticClass:"pa"},[t._v("Click pictures to satisfy you not to satisfy others "),r("span",{staticClass:"blink"},[t._v("|")])]),r("br"),r("br"),r("img",{staticStyle:{width:"50px",height:"50px",border:"2px solid #5A487A"},attrs:{src:n("eebb")}}),r("br"),r("br"),r("el-button",{staticStyle:{height:"55px",width:"300px"},attrs:{type:"primary",plain:""},on:{click:function(e){return t.submit()}}},[r("div",{staticStyle:{"font-size":"20px"}},[t._v("Sign in with Google")])])],1)])],1)},c=[],l=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),u=n("b752"),d=n.n(u),p=n("9ce4");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={data:function(){return{mobnum:"null",otp:"",text:null,result:null}},computed:b({},Object(p["b"])({user:"user"})),mounted:function(){this.check()},methods:{submit:function(){window.app=this;var t=new d.a.auth.GoogleAuthProvider;d.a.auth().useDeviceLanguage(),d.a.auth().signInWithPopup(t).then((function(t){t.credential.accessToken,t.user;window.app.$router.push("/Dashboard"),window.app.$message({message:"Logged In Successfully",type:"success"})}))},check:function(){this.user.loggedIn},enterApp:function(){this.$router.push("/dashboard")}}},h=g,v=(n("039a"),n("2877")),m=Object(v["a"])(h,s,c,!1,null,null,null),y=m.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("Register")]),n("div",{staticClass:"card-body"},[t.error?n("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),n("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t._m(0)])])])])])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group row mb-0"},[n("div",{staticClass:"col-md-8 offset-md-4"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])]),n("div",{attrs:{id:"recaptcha"}})])}],x={data:function(){return{form:{name:"",email:"",password:""},error:null}},methods:{submit:function(){d.a.auth().useDeviceLanguage(),window.recaptchaVerifier=new d.a.auth.RecaptchaVerifier("recaptcha",{callback:function(t){},"expired-callback":function(){}}),window.recaptchaVerifier.render();var t="+91 9500164001",e=window.recaptchaVerifier;d.a.auth().signInWithPhoneNumber(t,e).then((function(t){window.alert("SSSS"),window.confirmationResult=t})).catch((function(t){window.alert("ERROR")}))}}},j=x,S=Object(v["a"])(j,w,O,!1,null,null,null),_=S.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card"},[r("center",[r("div",{staticClass:"card-header"},[r("h1",[t._v("Dashboard")])]),r("img",{staticStyle:{width:"50px",height:"50px",border:"2px solid #5A487A"},attrs:{src:n("f06e")}}),r("br"),r("br"),r("div",[r("p",[t._v("!! All images uploaded will be open to public and any user of this app can view your photos or download to their devices")])]),r("br"),r("div",{staticClass:"card-body"},[t.user?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[r("div",[r("el-button",{staticClass:"navbar-brand",staticStyle:{width:"300px",height:"50px",border:"2px solid #5A487A"},on:{click:function(e){return t.$router.push("/Upload")}}},[r("span",{staticStyle:{"font-size":"25px"}},[t._v("Upload Image Public")])]),r("br"),r("br"),r("br"),r("br"),r("el-button",{staticClass:"navbar-brand",staticStyle:{width:"300px",height:"50px",border:"2px solid #5A487A"},on:{click:function(e){return t.$router.push("/Gridview")}}},[r("span",{staticStyle:{"font-size":"25px"}},[t._v("View Public Images")])])],1)]):t._e()])])],1)])])])},A=[];function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k={data:function(){return{flag:!0}},computed:D({},Object(p["b"])({user:"user"})),mounted:function(){},method:{showButton:function(){this.flag=!0}}},E=k,I=Object(v["a"])(E,P,A,!1,null,null,null),$=I.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",staticStyle:{"background-color":"#DEDAE4",border:"2px solid #5A487A"}},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card"},[t.user.loggedIn?r("div",{staticClass:"card-body"},[r("div",[t.flag?r("div",t._l(t.jsoninfo,(function(e,i){return r("div",{key:e.url,staticStyle:{"padding-top":"20px"}},[r("center",[r("el-card",{staticStyle:{"background-color":"#F8F8FF","padding-top":"20px",width:"1000px",border:"2px solid #5A487A","border-right":"8px solid #5A487A","border-left":"8px solid #5A487A"},attrs:{"body-style":{padding:"0px"}}},[r("center",[r("div",{staticStyle:{"padding-bottom":"10px"}},[r("img",{class:t.imageview,staticStyle:{width:"800px"},attrs:{src:e.url}}),r("div",{staticStyle:{"background-color":"#DEDAE4","padding-top":"20px",width:"800px",height:"100px",border:"2px solid #5A487A","padding-bottom":"10px"}},[r("div",[r("div",{staticStyle:{float:"left","font-size":"15px","font-weight":"bold"}},[t._v("Uploader:  ")]),r("div",{staticStyle:{float:"left","font-size":"15px"}},[t._v(t._s(e.name))]),r("img",{staticStyle:{width:"20px",height:"20px",float:"left"},attrs:{src:n("eebb")}})]),r("br"),r("div",{staticStyle:{"padding-top":"5px"}},[r("div",{staticStyle:{float:"left","font-size":"20px","font-weight":"bold"}},[t._v("Description:  ")]),e.description?r("div",{staticStyle:{float:"left","padding-top":"3.5px"}},[t._v(t._s(e.description))]):r("div",{staticStyle:{float:"left","padding-top":"3.5px"}},[t._v("The uploader not described photo")])])])])])],1)],1)],1)})),0):t._e()])]):r("div",{staticStyle:{height:"800px"}},[r("center",{staticStyle:{"padding-top":"200px"}},[r("h1",[t._v("Please Login")])])],1)])])])])},G=[];n("8615");function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z={data:function(){return{jsoninfo:null,mobnum:"null",otp:"",text:null,result:null,fileGlobe:null,imgSrc:null,description:"",flag:!1,imgurlarr:""}},computed:R({},Object(p["b"])({user:"user"})),created:function(){var t=this;this.flag=!0,d.a.database().ref().once("value",(function(e){t.jsoninfo=e.val(),t.getSingleImage(),window.flag=!0}))},methods:{getSingleImage:function(){Object.values(this.jsoninfo).forEach((function(t){}))},store:function(t){var e=document.getElementById(t.url);null!=e.src&&(e.src=t.url)}}},B=z,L=Object(v["a"])(B,U,G,!1,null,null,null),N=L.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("center",[r("div",{staticClass:"card"},[t.loader?r("div",{staticClass:"loader"}):r("div",{staticClass:"card-header"},[r("h1",[t._v("Upload Image")])]),r("div",{staticClass:"card-body",staticStyle:{width:"1200px",border:"2px solid #5A487A","border-right":"8px solid #5A487A","border-left":"8px solid #5A487A"}},[r("div",[r("div",[r("div",{staticStyle:{padding:"14px"}},[r("div",[r("h4",[t._v("Enter Image Description:")])]),r("el-input",{staticStyle:{width:"1000px",border:"2px solid #5A487A"},attrs:{placeholder:"Please don't forget to describe the your photo before uploading !!!! (စ‿စ ) (⪴╰╯⪳) ",maxlength:"100"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),r("div",{staticClass:"bottom clearfix"},[r("div",{staticClass:"button",attrs:{type:"text"}},[r("h4",[t._v("Image")])])])],1)]),r("center",[r("input",{staticStyle:{"padding-left":"80px"},attrs:{type:"file",id:"myfile",name:"myfile"},on:{select:function(e){return t.showButton()}}})]),r("br"),r("br"),r("br"),r("el-button",{staticStyle:{border:"2px solid #5A487A"},on:{click:function(e){return t.uploadSingleImage()}}},[t._v("Upload single image to public")]),r("br"),r("br"),r("br"),r("div",[r("h4",[t._v("Uploaded Image")])]),r("img",{staticStyle:{width:"800px",border:"10px solid #5A487A"},attrs:{src:n("3fff"),id:"uploadedimg"}})],1)])])])],1)])])},V=[];n("7f7f");function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var K={data:function(){return{mobnum:"null",otp:"",text:null,result:null,fileGlobe:null,imgSrc:null,description:"",source:null,loader:!1}},computed:J({},Object(p["b"])({user:"user"})),methods:{uploadSingleImage:function(){if(document.querySelector("#myfile").files[0]){this.loader=!0;var t=this;window.description=this.description,window.username=this.user.data.displayName;var e=d.a.storage().ref(),n=document.querySelector("#myfile").files[0],r=+new Date+"-"+n.name;window.imgname=n.name,this.fileGlobe=n,this.imgSrc=n.src;var i={contentType:n.type},a=e.child(r).put(n,i);a.then((function(t){return t.ref.getDownloadURL()})).then((function(e){t.loader=!1,window.url=e,document.getElementById("uploadedimg").src=e,t.source=e,t.saveMeta(),t.$message({message:"Image Uploaded Successfully",type:"success"})}))}else this.$message({message:"No photo selected. Please select atleast one photo",type:"error"})},saveMeta:function(){var t=new Date,e=t.getTime();d.a.database().ref(e).set({description:window.description,name:window.username,profile_picture:window.imgname,url:window.url})}}},q=K,W=(n("41f3"),Object(v["a"])(q,M,V,!1,null,null,null)),Y=W.exports;r["default"].use(o["a"]);var H=new o["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",component:y},{path:"/",name:"login",component:y},{path:"/register",name:"Register",component:_},{path:"/dashboard",name:"Dashboard",component:$},{path:"/upload",name:"Upload",component:Y},{path:"/gridview",name:"Gridview",component:N}]}),Z=H,Q=n("bc4a"),X=n.n(Q);r["default"].use(p["a"]);var tt=new p["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(t){return t.user}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e}},actions:{fetchUser:function(t,e){var n=t.commit;n("SET_LOGGED_IN",null!==e),n("SET_USER",e?{displayName:e.displayName,email:e.email}:null)}}}),et=n("b2d6"),nt=n.n(et),rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),n("main",{staticClass:"py-4"},[n("router-view")],1)],1)},it=[],at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-md navbar-light navbar-laravel",staticStyle:{"background-color":"#B9ABD3",border:"2px solid #5A487A"}},[r("div",{staticClass:"container",staticStyle:{height:"80px"}},[r("router-link",{staticClass:"navbar-brand",staticStyle:{"padding-left":"20px",float:"left"},attrs:{to:"/login"}},[r("img",{staticStyle:{width:"30px",height:"30px","padding-top":"20px"},attrs:{src:n("fbf5")},on:{click:function(e){return t.loginpage()}}})]),r("div",{staticStyle:{float:"left","padding-left":"580px","font-size":"40px","padding-top":"20px","font-weight":"bold"}},[t._v("Photo Grid")]),t.user.loggedIn?r("div",{staticClass:"nav-item",staticStyle:{float:"right","padding-right":"20px","padding-top":"30px"}},[t._v("Hi! "+t._s(t.user.data.displayName))]):t._e(),r("span",{staticStyle:{float:"right","padding-right":"20px","padding-top":"5px",cursor:"pointer"},on:{click:function(e){return t.goBack()}}},[r("h2",[t._v("Back")])]),r("br")],1),t.user.loggedIn?r("div",[r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[r("el-menu-item",{attrs:{index:"1"}},[r("span",{staticClass:"menuicon"},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/dashboard"}},[t._v("Dashboard")])],1)]),r("el-menu-item",{attrs:{index:"2"}},[r("span",{staticClass:"menuicon"},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/upload"}},[t._v("Upload Photo")])],1)]),r("el-menu-item",{attrs:{index:"3"}},[r("span",{staticClass:"menuicon"},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/gridview"}},[t._v("View Photos")])],1)]),r("el-menu-item",{attrs:{index:"4"},on:{click:function(e){return t.handleAbout()}}},[r("span",{staticClass:"menuicon"},[t._v("About")])]),r("div",{staticStyle:{float:"right","padding-right":"20px","padding-top":"10px"}},[t.user.loggedIn?r("el-button",{staticClass:"nav-link",staticStyle:{border:"2px solid #5A487A"},on:{click:function(e){return e.preventDefault(),t.signOut(e)}}},[t._v("Sign out")]):t._e()],1)],1)],1):t._e()])},ot=[];n("a481");function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var lt={computed:ct({},Object(p["b"])({user:"user"})),methods:{signOut:function(){var t=this;window.app=this,d.a.auth().signOut().then((function(){t.$router.replace({name:"login"}),window.app.$message("Logged out successfully")}))},goBack:function(){window.history.back()},handleAbout:function(){this.$message("Development Stage")},loginpage:function(){this.$router.push("/login")}}},ut=lt,dt=(n("5dfc"),Object(v["a"])(ut,at,ot,!1,null,null,null)),pt=dt.exports,ft={components:{navbar:pt}},bt=ft,gt=Object(v["a"])(bt,rt,it,!1,null,null,null),ht=gt.exports;r["default"].use(a.a,{locale:nt.a}),r["default"].config.productionTip=!1;var vt={apiKey:"AIzaSyCfY2lrJThKUEg1ZTe5p0jxffCdSOd33yM",authDomain:"scenaries-7c397.firebaseapp.com",databaseURL:"https://scenaries-7c397.firebaseio.com",projectId:"scenaries-7c397",storageBucket:"scenaries-7c397.appspot.com",messagingSenderId:"907399479158",appId:"1:907399479158:web:72bfaabaed2de7ad7b0457",measurementId:"G-B33GK2YMN8"};X.a.initializeApp(vt),X.a.auth().onAuthStateChanged((function(t){tt.dispatch("fetchUser",t)})),new r["default"]({router:Z,store:tt,render:function(t){return t(ht)}}).$mount("#app")},"5dfc":function(t,e,n){"use strict";var r=n("30d6"),i=n.n(r);i.a},bd16:function(t,e,n){},eebb:function(t,e,n){t.exports=n.p+"img/google-logo.f95f60bd.png"},f06e:function(t,e,n){t.exports=n.p+"img/caution.80fbea2f.png"},fbf5:function(t,e,n){t.exports=n.p+"img/home.4976b71f.png"}});
//# sourceMappingURL=app.cab577fc.js.map