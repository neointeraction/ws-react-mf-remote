/*! For license information please see 803.js.LICENSE.txt */
"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[803],{2307:(e,t,a)=>{a.d(t,{Ay:()=>l}),a(4914);var r=a(701),n=a(873),o=a(4848),s=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],i=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}];const l=function(){return(0,o.jsx)("div",{children:(0,o.jsxs)(n.SimpleGrid,{cols:2,children:[(0,o.jsx)("div",{children:(0,o.jsx)(n.Paper,{withBorder:!0,p:"md",radius:"md",children:(0,o.jsx)(r.AreaChart,{h:300,data:s,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],curveType:"linear"})})}),(0,o.jsx)("div",{children:(0,o.jsx)(n.Paper,{withBorder:!0,p:"md",radius:"md",children:(0,o.jsx)(r.BarChart,{h:300,data:i,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}],tickLine:"y"})})})]})})}},4611:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(873),n=a(4848),o=[{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",name:"Robert Wolfkisser",job:"Engineer",email:"rob_wolf@gmail.com",role:"Collaborator",lastActive:"2 days ago",active:!0},{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",name:"Jill Jailbreaker",job:"Engineer",email:"jj@breaker.com",role:"Collaborator",lastActive:"6 days ago",active:!0},{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",name:"Henry Silkeater",job:"Designer",email:"henry@silkeater.io",role:"Contractor",lastActive:"2 days ago",active:!1},{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",name:"Bill Horsefighter",job:"Designer",email:"bhorsefighter@gmail.com",role:"Contractor",lastActive:"5 days ago",active:!0},{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",name:"Jeremy Footviewer",job:"Manager",email:"jeremy@foot.dev",role:"Manager",lastActive:"3 days ago",active:!1}],s=["Manager","Collaborator","Contractor"];const i=function(){var e=o.map((function(e){return(0,n.jsxs)(r.Table.Tr,{children:[(0,n.jsx)(r.Table.Td,{children:(0,n.jsxs)(r.Group,{gap:"sm",children:[(0,n.jsx)(r.Avatar,{size:40,src:e.avatar,radius:40}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.Text,{fz:"sm",fw:500,children:e.name}),(0,n.jsx)(r.Text,{fz:"xs",c:"dimmed",children:e.email})]})]})}),(0,n.jsx)(r.Table.Td,{children:(0,n.jsx)(r.Select,{data:s,defaultValue:e.role,variant:"unstyled",allowDeselect:!1})}),(0,n.jsx)(r.Table.Td,{children:e.lastActive}),(0,n.jsx)(r.Table.Td,{children:e.active?(0,n.jsx)(r.Badge,{fullWidth:!0,variant:"light",children:"Active"}):(0,n.jsx)(r.Badge,{color:"gray",fullWidth:!0,variant:"light",children:"Disabled"})})]},e.name)}));return(0,n.jsx)(r.Table.ScrollContainer,{minWidth:800,children:(0,n.jsxs)(r.Table,{verticalSpacing:"sm",children:[(0,n.jsx)(r.Table.Thead,{children:(0,n.jsxs)(r.Table.Tr,{children:[(0,n.jsx)(r.Table.Th,{children:"Employee"}),(0,n.jsx)(r.Table.Th,{children:"Role"}),(0,n.jsx)(r.Table.Th,{children:"Last active"}),(0,n.jsx)(r.Table.Th,{children:"Status"})]})}),(0,n.jsx)(r.Table.Tbody,{children:e})]})})}},4803:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=a(873),n=a(7951),o=a(4214),s=a(4611),i=a(2307),l=a(2987),c=a.n(l),d=a(4848),u={user:n.IconUserPlus,discount:n.IconDiscount2,receipt:n.IconReceipt2,coin:n.IconCoin},p=[{title:"Revenue",icon:"receipt",value:"13,456",diff:34},{title:"Profit",icon:"coin",value:"4,145",diff:-13},{title:"Coupons usage",icon:"discount",value:"745",diff:18},{title:"New customers",icon:"user",value:"188",diff:-30}];const m=function(){var e=c()();console.log(e,"useHost");var t=p.map((function(e){var t=u[e.icon],a=e.diff>0?n.IconArrowUpRight:n.IconArrowDownRight;return(0,d.jsxs)(r.Paper,{withBorder:!0,p:"md",radius:"md",children:[(0,d.jsxs)(r.Group,{justify:"space-between",children:[(0,d.jsx)(r.Text,{size:"xs",c:"dimmed",className:o.A.title,children:e.title}),(0,d.jsx)(t,{className:o.A.icon,size:"1.4rem",stroke:1.5})]}),(0,d.jsxs)(r.Group,{align:"flex-end",gap:"xs",mt:25,children:[(0,d.jsx)(r.Text,{className:o.A.value,children:e.value}),(0,d.jsxs)(r.Text,{c:e.diff>0?"teal":"red",fz:"sm",fw:500,className:o.A.diff,children:[(0,d.jsxs)("span",{children:[e.diff,"%"]}),(0,d.jsx)(a,{size:"1rem",stroke:1.5})]})]}),(0,d.jsx)(r.Text,{fz:"xs",c:"dimmed",mt:7,children:"Compared to previous month"})]},e.title)}));return(0,d.jsx)("div",{className:o.A.root,children:(0,d.jsxs)(r.Stack,{gap:"lg",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)(r.Title,{children:["Hello, ",e.userInfo]}),(0,d.jsx)(r.SimpleGrid,{cols:{base:1,xs:2,md:4},children:t})]}),(0,d.jsx)("div",{children:(0,d.jsx)(i.Ay,{})}),(0,d.jsx)("div",{children:(0,d.jsx)(s.A,{})})]})})}},7683:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(1601),n=a.n(r),o=a(6314),s=a.n(o)()(n());s.push([e.id,".vjbDH8bTWecgk7HuTkbn {\n  padding: calc(var(--mantine-spacing-xl) * 1.5);\n}\n\n.wy80xj6r34p55NVqNvIV {\n  font-size: rem(24px);\n  font-weight: 700;\n  line-height: 1;\n}\n\n.EoDykQfZHWW0ALzKH27o {\n  line-height: 1;\n  display: flex;\n  align-items: center;\n}\n\n.yer6HStQbRul2NJmmpUH {\n  color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-3));\n}\n\n.gBw3JGO7L219fJkj3iw7 {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n",""]),s.locals={root:"vjbDH8bTWecgk7HuTkbn",value:"wy80xj6r34p55NVqNvIV",diff:"EoDykQfZHWW0ALzKH27o",icon:"yer6HStQbRul2NJmmpUH",title:"gBw3JGO7L219fJkj3iw7"};const i=s},6314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",r=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),r&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),r&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,r,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},1601:e=>{e.exports=function(e){return e[1]}},1020:(e,t,a)=>{var r=a(4914),n=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var r,l={},c=null,d=null;for(r in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:d,props:l,_owner:s.current}}t.jsx=l,t.jsxs=l},4848:(e,t,a)=>{e.exports=a(1020)},4214:(e,t,a)=>{a.d(t,{A:()=>x});var r=a(5072),n=a.n(r),o=a(7825),s=a.n(o),i=a(7659),l=a.n(i),c=a(5056),d=a.n(c),u=a(540),p=a.n(u),m=a(1113),h=a.n(m),f=a(7683),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p(),n()(f.A,v);const x=f.A&&f.A.locals?f.A.locals:void 0},5072:e=>{var t=[];function a(e){for(var a=-1,r=0;r<t.length;r++)if(t[r].identifier===e){a=r;break}return a}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=a(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=n(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function n(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,n){var o=r(e=e||[],n=n||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=a(o[s]);t[i].references--}for(var l=r(e,n),c=0;c<o.length;c++){var d=a(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},7659:e=>{var t={};e.exports=function(e,a){var r=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5056:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},7825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var r="";a.supports&&(r+="@supports (".concat(a.supports,") {")),a.media&&(r+="@media ".concat(a.media," {"));var n=void 0!==a.layer;n&&(r+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),r+=a.css,n&&(r+="}"),a.media&&(r+="}"),a.supports&&(r+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},1113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);