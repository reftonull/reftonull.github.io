(window.webpackJsonp=window.webpackJsonp||[]).push([[17,6],{336:function(t,e,n){"use strict";n.r(e);var o=n(13),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"inline-block",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("rect",{attrs:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}}),t._v(" "),n("path",{attrs:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}})])}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("cbf75754",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n(351)},361:function(t,e,n){var o=n(49)(!1);o.push([t.i,".article-image{box-shadow:inset 0 -50px 40px #171a28,inset 0 50px 40px #171a28}img{border-radius:.5em}.caption{margin-left:1em;font-size:.875em;margin-bottom:1em;margin-top:-.5em}.img{z-index:-2;position:relative;min-width:200px;min-height:200px}.content-link:hover{transform:translateX(10px);transition:.2s}blockquote>p{margin-bottom:0}aside,blockquote>p{border-left-width:4px;padding:.75rem 1rem;font-weight:500;border-radius:.375rem;--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}aside{margin-bottom:1rem}",""]),t.exports=o},381:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(51),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("projects",o.slug).fetch();case 3:return r=e.sent,e.abrupt("return",{project:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},copyLink:function(){var path="lakshchakraborty.com/projects/"+this.project.slug;navigator.clipboard.writeText(path);this.$toast.show("Link Copied!",{duration:1500,className:"toast",iconPack:"callback",icon:function(t){return t.innerHTML='<svg\n              xmlns="http://www.w3.org/2000/svg"\n                width="24"\n                height="24"\n                viewBox="0 0 24 24"\n                fill="none"\n                stroke="currentColor"\n                stroke-width="2"\n                stroke-linecap="round"\n                stroke-linejoin="round"\n              >\n                <polyline points="9 11 12 14 22 4" />\n                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />\n            </svg>',t}})}}}),c=(n(360),n(13)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{staticClass:"mx-auto my-auto max-w-6xl p-5 relative"},[n("div",{staticClass:"m-auto"},[n("div",{staticClass:"font-sans text-4xl font-semibold leading-none py-2"},[t._v("\n        "+t._s(t.project.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"\n          flex flex-row\n          space-x-2\n          font-semibold\n          text-gray-600 text-md\n          leading-5\n          pb-2\n        "},[t.project.readingTime?n("div",[t._v("\n          "+t._s(Math.ceil(t.project.readingTime.minutes))+" minute read\n        ")]):t._e(),t._v(" "),t.project.readingTime?n("div",[t._v("•")]):t._e(),t._v(" "),n("div",{staticClass:"cursor-pointer",on:{click:function(e){return t.copyLink()}}},[n("IconsCopyIcon")],1)])]),t._v(" "),t.project.img?n("div",{staticClass:"shadow-inner article-image w-auto flex mb-6"},[n("img",{staticClass:"img rounded-xl max-h-96 object-cover flex-1",attrs:{src:t.project.img}})]):t._e(),t._v(" "),n("div",{staticClass:"flex lg:flex-row flex-col-reverse m-auto pt-4 lg:space-x-5"},[n("nuxt-content",{staticClass:"font-sans max-w-prose flex-auto",attrs:{document:t.project}}),t._v(" "),n("nav",{staticClass:"flex-shrink-0 mb-6"},[n("div",{staticClass:"text-sm font-semibold text-gray-600"},[t._v("CONTENTS")]),t._v(" "),n("ul",t._l(t.project.toc,(function(link){return n("li",{key:link.id},[n("NuxtLink",{attrs:{to:"#"+link.id}},[n("div",{staticClass:"text-base my-3 font-medium text-gray-700 content-link"},[t._v("\n                "+t._s(link.text)+"\n              ")])])],1)})),0)])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconsCopyIcon:n(336).default})}}]);