(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38b43ffd"],{"1c0d":function(t,e,a){t.exports=a.p+"img/lion.74b3639d.png"},"28e1":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Felicitaciones lo conseguiste")]),a("v-card-text",[a("v-img",{staticClass:"grey darken-4",attrs:{src:t.congratz,width:"250",height:"250"}})],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.finish()}}},[t._v("Volver a jugar")])],1)],1)],1)],1)],1)},i=[],r={props:{show:{type:Boolean,required:!0}},data:function(){return{congratz:a("dbec")}},methods:{finish:function(){this.$emit("playAgain")}}},s=r,o=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),f=a("b0af"),h=a("99d9"),m=a("a523"),p=a("169a"),d=a("adda"),g=a("0fd9"),v=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=v.exports;l()(v,{VBtn:u["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VContainer:m["a"],VDialog:p["a"],VImg:d["a"],VRow:g["a"]})},"718d":function(t,e,a){t.exports=a.p+"img/bear.b67323b5.png"},"7f7f":function(t,e,a){var n=a("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,s="name";s in i||a("9e1e")&&n(i,s,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"99aa":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-alert",{attrs:{outlined:"",color:"primary",icon:"contact_support"}},[a("div",{staticClass:"title"},[a("p",[t._v("Recuerda los animales iguales.")])])]),a("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.animals,function(e,n){return a("v-col",{key:n,attrs:{sm:"12",md:"2",justify:"space-between"}},[e.value?a("v-card",{staticStyle:{"margin-bottom":"5%"},attrs:{width:"150"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:e.photo,width:"150",height:"150"}}),a("v-card-title",{staticClass:"title"},[t._v(t._s(e.name))])],1):a("v-card",{staticStyle:{"margin-bottom":"5%"},attrs:{width:"150",height:"200",color:"grey"},on:{click:function(a){return t.pickAnimal(e)}}})],1)}),1),a("modal",{attrs:{show:t.finished},on:{playAgain:t.playAgain}})],1)},i=[],r=(a("7f7f"),a("96cf"),a("3b8d")),s=(a("c5f6"),a("2f62"),a("28e1")),o={components:{modal:s["a"]},props:{gameId:{type:Number},studentId:{type:String}},data:function(){return{animals:[],animal:null,trys:{success:0,fails:0}}},computed:{finished:function(){for(var t=0;t<this.animals.length;t++)if(!this.animals[t].value)return!1;return!0}},methods:{shuffle:function(t){var e,a,n=t.length;while(0!==n)a=Math.floor(Math.random()*n),n-=1,e=t[n],t[n]=t[a],t[a]=e;return t},playAgain:function(t){this.trys={success:0,fails:0},this.reset()},reset:function(){this.animals=[{name:"León",photo:a("1c0d"),value:!1},{name:"Oso",photo:a("718d"),value:!1},{name:"Abeja",photo:a("eb39"),value:!1},{name:"Perro",photo:a("b673"),value:!1},{name:"Tiburón",photo:a("e241"),value:!1},{name:"Paloma",photo:a("a3fe"),value:!1},{name:"León",photo:a("1c0d"),value:!1},{name:"Oso",photo:a("718d"),value:!1},{name:"Abeja",photo:a("eb39"),value:!1},{name:"Perro",photo:a("b673"),value:!1},{name:"Tiburón",photo:a("e241"),value:!1},{name:"Paloma",photo:a("a3fe"),value:!1}],this.animals=this.shuffle(this.animals),this.animal=null},pickAnimal:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("Animal picked ".concat(e.name)),e.value=!0,this.animal?this.compareAnimals(e):this.animal=e;case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),compareAnimals:function(t){console.log("animal: ".concat(this.animal.name," animalTopick: ").concat(t.name)),this.animal.name===t.name?(this.animal=null,this.trys.success+=1):(this.animal.value=!1,this.animal=t,this.trys.fails+=1),this.checkResult()},checkResult:function(){this.finished&&this.$emit("saveResult",{success:this.trys.success,fails:this.trys.fails,game:{gameId:this.gameId},student:{studentId:this.studentId}})}},mounted:function(){this.reset()}},c=o,l=a("2877"),u=a("6544"),f=a.n(u),h=a("0798"),m=a("b0af"),p=a("99d9"),d=a("62ad"),g=a("a523"),v=a("adda"),b=a("0fd9"),y=Object(l["a"])(c,n,i,!1,null,null,null);e["default"]=y.exports;f()(y,{VAlert:h["a"],VCard:m["a"],VCardTitle:p["c"],VCol:d["a"],VContainer:g["a"],VImg:v["a"],VRow:b["a"]})},a3fe:function(t,e,a){t.exports=a.p+"img/bird.d7bdf25e.png"},aa77:function(t,e,a){var n=a("5ca1"),i=a("be13"),r=a("79e5"),s=a("fdef"),o="["+s+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(t,e,a){var i={},o=r(function(){return!!s[t]()||c[t]()!=c}),l=i[t]=o?e(h):s[t];a&&(i[a]=l),n(n.P+n.F*o,"String",i)},h=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},b673:function(t,e,a){t.exports=a.p+"img/dog.5dbc9bb4.jpg"},c5f6:function(t,e,a){"use strict";var n=a("7726"),i=a("69a8"),r=a("2d95"),s=a("5dbc"),o=a("6a99"),c=a("79e5"),l=a("9093").f,u=a("11e9").f,f=a("86cc").f,h=a("aa77").trim,m="Number",p=n[m],d=p,g=p.prototype,v=r(a("2aeb")(g))==m,b="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():h(e,3);var a,n,i,r=e.charCodeAt(0);if(43===r||45===r){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var s,c=e.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>i)return NaN;return parseInt(c,n)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof p&&(v?c(function(){g.valueOf.call(a)}):r(a)!=m)?s(new d(y(e)),a,p):y(e)};for(var w,I=a("9e1e")?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;I.length>A;A++)i(d,w=I[A])&&!i(p,w)&&f(p,w,u(d,w));p.prototype=g,g.constructor=p,a("2aba")(n,m,p)}},dbec:function(t,e,a){t.exports=a.p+"img/congratz.19b920b7.jpg"},e241:function(t,e,a){t.exports=a.p+"img/shark.339670bc.jpg"},eb39:function(t,e,a){t.exports=a.p+"img/bee.a09de8cf.png"},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-38b43ffd.041dc024.js.map