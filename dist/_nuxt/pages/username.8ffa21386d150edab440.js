webpackJsonp([1],{"+YD6":function(t,e,l){"use strict";var a={data:function(){return{graphCoolIcon:'\n        <svg stroke="none" fill="rgba(39,174,96,1)" style="width: 40px; height: 46px;" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="66 46 18 21"><path d="M82.18 53.28c-.92-.52-2.07.16-2.26.27l-3.96 2.26a1.53 1.53 0 0 0-1.98.05 1.57 1.57 0 0 0-.31 1.97c.38.65 1.17.93 1.87.66.7-.26 1.11-.99.98-1.73l3.95-2.26.02-.01c.26-.16.86-.41 1.14-.25.2.12.32.5.33 1.07v4.99c0 .47-.25.9-.65 1.13l-5.68 3.3c-.4.23-.89.23-1.3 0l-5.67-3.3c-.4-.24-.65-.66-.65-1.13v-6.61c0-.47.25-.9.65-1.13l5.14-2.99c.49.57 1.31.7 1.95.32.64-.38.92-1.17.67-1.87-.25-.71-.97-1.12-1.7-1-.73.12-1.28.76-1.29 1.51l-5.3 3.08c-.74.43-1.2 1.22-1.2 2.08v6.6c0 .86.46 1.65 1.2 2.08l5.68 3.3c.74.43 1.65.43 2.39 0l5.68-3.3c.74-.43 1.19-1.22 1.2-2.08v-4.8c.01-1.12-.29-1.86-.9-2.21z"></path></svg>\n      '}}},s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("a",{staticClass:"xl-p16 xl-br8 xl-ba-black-500 xl-bw2 xl-bo-black-500 xl-cp xl-db",attrs:{href:"https://www.graph.cool/?utm_medium=partner&utm_source=dnomak.com",target:"_blank"}},[l("div",{staticClass:"wrap xl-auto xl-center xl-middle xl-gutter-16"},[l("div",{staticClass:"col"},[l("div",{staticClass:"xl-co-black-100 xl-fs18 xl-lh24 xl-fw600"},[t._v(t._s(t.$t("globals.dataSponsor")))])]),l("div",{staticClass:"col xl-lh0"},[l("div",{domProps:{innerHTML:t._s(t.graphCoolIcon)}})]),t._m(0)])]),l("div",{staticClass:"xl-tac"},[l("a",{staticClass:"xl-ffscp xl-fs14 xl-tac xl-co-gray-500 xl-my24 xl-dib xl-lh24",attrs:{href:"https://github.com/dnomak/dnomak.com",target:"_blank"}},[t._v(t._s(t.$t("globals.contribute")))])])])},i=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col"},[l("div",{staticClass:"xl-fw600 xl-ls1 xl-fs20 xl-lh24",staticStyle:{color:"#27ae60"}},[t._v("GRAPHCOOL")])])}],n={render:s,staticRenderFns:i},r=n,c=l("VU/8"),o=c(a,r,null,null,null);e.a=o.exports},"3EpW":function(t,e,l){"use strict";function a(t){l("Mgto")}Object.defineProperty(e,"__esModule",{value:!0});var s=l("Xxa5"),i=l.n(s),n=l("exGp"),r=l.n(n),c=l("KVWm"),o=l("VlwC"),x=l("+YD6"),d={layout:"main",asyncData:function(){function t(t){return e.apply(this,arguments)}var e=r()(i.a.mark(function t(e){var l,a=e.store,s=e.params,n=(e.error,e.payload);return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(l=n)){t.next=5;break}return t.abrupt("return",{human:l,times:l.times,accounts:l.accounts});case 5:return t.next=7,a.dispatch("humans/getHuman",s.username);case 7:return t.next=9,a.dispatch("accounts/getAllAccounts",s.username);case 9:return t.next=11,a.dispatch("times/getAllTimes",s.username);case 11:return t.abrupt("return",{human:a.getters["humans/human"],times:a.getters["times/times"],accounts:a.getters["accounts/accounts"]});case 12:case"end":return t.stop()}},t,this)}));return t}(),head:function(){return{title:this.human.name}},data:function(){return{human:null,accounts:null,times:null,questionTime:0,player:{j:{currentTime:0}},playerSecond:null,videoLoading:!1,graphCoolIcon:'\n        <svg stroke="none" fill="rgba(39,174,96,1)" style="width: 40px; height: 46px;" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="66 46 18 21"><path d="M82.18 53.28c-.92-.52-2.07.16-2.26.27l-3.96 2.26a1.53 1.53 0 0 0-1.98.05 1.57 1.57 0 0 0-.31 1.97c.38.65 1.17.93 1.87.66.7-.26 1.11-.99.98-1.73l3.95-2.26.02-.01c.26-.16.86-.41 1.14-.25.2.12.32.5.33 1.07v4.99c0 .47-.25.9-.65 1.13l-5.68 3.3c-.4.23-.89.23-1.3 0l-5.67-3.3c-.4-.24-.65-.66-.65-1.13v-6.61c0-.47.25-.9.65-1.13l5.14-2.99c.49.57 1.31.7 1.95.32.64-.38.92-1.17.67-1.87-.25-.71-.97-1.12-1.7-1-.73.12-1.28.76-1.29 1.51l-5.3 3.08c-.74.43-1.2 1.22-1.2 2.08v6.6c0 .86.46 1.65 1.2 2.08l5.68 3.3c.74.43 1.65.43 2.39 0l5.68-3.3c.74-.43 1.19-1.22 1.2-2.08v-4.8c.01-1.12-.29-1.86-.9-2.21z"></path></svg>\n      '}},created:function(){var t=this;setInterval(function(){var e=parseInt(t.player.j.currentTime,10);t.times.forEach(function(l){e===l.second&&(t.questionTime=l.second)})},1e3)},methods:{ready:function(t){this.player=t},changeQuestionTime:function(t){var e=this;this.videoLoading=!0,setTimeout(function(){e.questionTime=parseInt(t,10),e.videoLoading=!1},1)}},components:{SidebarPatreon:c.a,SidebarMailChimp:o.a,SidebarGraphcool:x.a}},u=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"wrap xl-gutter-24 md-1"},[l("div",{staticClass:"col xl-2-3"},[l("div",{staticClass:"xl-mb16 xl-tal xl-co-black-500 xl-br8 xl-ba-white xl-bw2 xl-bo-gray-200 xl-p24 lg-p16"},[l("div",{staticClass:"wrap xl-auto xl-gutter-16 xl-middle xl-pr"},[t.human.username?l("div",{staticClass:"col sm-hidden"},[l("div",{staticClass:"avatar--human xl-br8",style:{"background-image":"url(/img/avatar/"+t.human.username+".jpg)"}})]):t._e(),l("div",{staticClass:"col"},[t._m(0),l("div",{staticClass:"xl-mb4"},[l("div",{staticClass:"wrap xl-auto xl-middle xl-gutter-8"},[l("div",{staticClass:"col"},[l("div",{staticClass:"xl-dib xl-fs28 xl-fw600 xl-lh40"},[t._v(t._s(t.human.name))])]),t._l(t.human.tags,function(e){return l("div",{staticClass:"col"},[l("div",{staticClass:"xl-dib xl-ba-black-500 xl-co-white xl-py4 xl-px8 xl-br4 xl-ffscp xl-fs14 xl-my8"},[t._v(t._s(e.name))])])})],2)]),t.human.title?l("div",{staticClass:"xl-lh24"},[t._v(t._s(t.human.title))]):t._e()])]),l("div",{staticClass:"xl-oh xl-br8 xl-lh0 xl-mt24"},[t.videoLoading?l("div",{staticClass:"embed-responsive embed-responsive-16by9"},[l("div",{staticClass:"embed-responsive-item"})]):t._e(),t.videoLoading?t._e():l("youtube",{staticClass:"xl-br8 embed-responsive embed-responsive-16by9",attrs:{"video-id":t.human.videoId,"player-vars":{autoplay:1,start:t.questionTime,rel:0}},on:{ready:t.ready}}),t.accounts.length?l("div",{staticClass:"wrap xl-auto xl-left xl-gutter-8 xl-middle xl-pt24 xl-ffscp xl-lh20"},[l("div",{staticClass:"col xl-co-gray-500 xl-fs14"},[t._v(t._s(t.$t("globals.socialMedia"))+":")]),t._l(t.accounts,function(e){return l("div",{staticClass:"col"},[l("a",{staticClass:"xl-dib xl-co-black-500 ho-co-black-500 xl-fs14 xl-tdu",attrs:{href:""+e.website.url+e.username,target:"_blank"}},[t._v(t._s(e.website.name))])])})],2):t._e()],1)])]),l("div",{staticClass:"col xl-1-3"},[l("SidebarPatreon"),t.times.length?l("div",{staticClass:"xl-mb16"},[l("div",{staticClass:"xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18"},[t._v(t._s(t.$t("globals.questions")))]),l("div",{staticClass:"xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh"},[l("div",{staticClass:"xl-ba-gray-100"},t._l(t.times,function(e){return l("span",[l("a",{staticClass:"xl-db xl-py8 xl-px16 ho-ba-gray-100 ho-co-black-500 ho-bo-gray-200 xl-ba-white xl-co-black-500 xl-bwt1 xl-bo-gray-200 xl-cp",class:{active:e.second===t.questionTime},on:{click:function(l){l.stopPropagation(),l.preventDefault(),t.changeQuestionTime(e.second)}}},["tr"===t.$t("lang")?l("span",{staticClass:"xl-1-1 xl-db xl-wsnw xl-oh xl-toe"},[t._v(t._s(e.question.name))]):t._e(),"en"===t.$t("lang")?l("span",{staticClass:"xl-1-1 xl-db xl-wsnw xl-oh xl-toe"},[t._v(t._s(e.question.nameEnglish))]):t._e()])])}))])]):t._e(),l("SidebarMailChimp"),l("SidebarGraphcool")],1)])},b=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"youtube"},[l("div",{staticClass:"g-ytsubscribe",attrs:{"data-channelid":"UCbu25feEIe6fY9fZx8BCMSA","data-layout":"default","data-count":"default"}})])}],m={render:u,staticRenderFns:b},p=m,h=l("VU/8"),v=a,f=h(d,p,v,null,null);e.default=f.exports},KVWm:function(t,e,l){"use strict";var a={data:function(){return{patreonIcon:'\n        <svg viewBox="0 0 569 546" style="width: 30px; height: 30px;" xmlns="http://www.w3.org/2000/svg"><circle fill="#052D49" cx="362.589996" cy="204.589996" r="204.589996"></circle><rect fill="#FFFFFF" x="0" y="0" width="100" height="545.799988"></rect></svg>\n      '}}},s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a",{staticClass:"xl-pr xl-lh56 xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-br8 xl-mb16 xl-tac",staticStyle:{"background-color":"#F96854"},attrs:{href:"https://www.patreon.com/bePatron?u=5286443",target:"_blank"}},[l("span",{staticClass:"xl-vam xl-dib xl-lh0",domProps:{innerHTML:t._s(t.patreonIcon)}}),l("div",{staticClass:"xl-di xl-vam xl-pl8"},[t._v("Become a Patron!")])])},i=[],n={render:s,staticRenderFns:i},r=n,c=l("VU/8"),o=c(a,r,null,null,null);e.a=o.exports},Mgto:function(t,e,l){var a=l("xpR8");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);l("rjj0")("421b6502",a,!0)},VlwC:function(t,e,l){"use strict";var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("form",{staticClass:"wrap xl-mb16",attrs:{action:"//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&id="+t.$t("mailchimp.id"),method:"post",name:"mc-embedded-subscribe-form",target:"_blank"}},[l("div",{staticClass:"col xl-7-12"},[l("input",{staticClass:"xl-1-1 xl-db xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-brr0 xl-pl16 pl-co-gray-300 xl-fs16",attrs:{type:"email",name:"email",placeholder:t.$t("mailchimp.emailAddress")}}),l("div",{staticStyle:{position:"absolute",left:"-5000px"}},[l("input",{attrs:{type:"text",name:t.$t("mailchimp.name"),tabindex:"-1"}})])]),l("div",{staticClass:"col xl-5-12"},[l("input",{staticClass:"xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-fw600 xl-brr8 xl-fs18 xl-brl0",attrs:{type:"submit",name:"subscribe"},domProps:{value:t.$t("mailchimp.subscribe")}})])])},s=[],i={render:a,staticRenderFns:s},n=i,r=l("VU/8"),c=r(null,n,null,null,null);e.a=c.exports},xpR8:function(t,e,l){e=t.exports=l("FZ+f")(!1),e.push([t.i,".avatar--human{width:100px;height:100px;background-repeat:no-repeat;background-position:50%;background-size:cover}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0;background:#000}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.active,.active:hover{background-color:#1094f6;color:#fff}.graphcool-color{color:#27ae60}.youtube{position:absolute;right:8px;bottom:0}",""])}});
//# sourceMappingURL=username.8ffa21386d150edab440.js.map