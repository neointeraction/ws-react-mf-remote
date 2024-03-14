"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[829],{5829:(e,a,t)=>{t.r(a),t(4914);var n=t(6672),r=t.n(n),s=(t(7752),t(873)),i=t(5072),o=t.n(i),l=t(7825),c=t.n(l),d=t(7659),m=t.n(d),h=t(5056),p=t.n(h),v=t(540),u=t.n(v),x=t(1113),j=t.n(x),g=t(8972),b={};b.styleTagTransform=j(),b.setAttributes=p(),b.insert=m().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=u(),o()(g.A,b),g.A&&g.A.locals&&g.A.locals;var f=t(7951),T=t(7683),y={};y.styleTagTransform=j(),y.setAttributes=p(),y.insert=m().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=u(),o()(T.A,y);const A=T.A&&T.A.locals?T.A.locals:void 0;var w=t(4848),k=[{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",name:"Robert Wolfkisser",job:"Engineer",email:"rob_wolf@gmail.com",role:"Collaborator",lastActive:"2 days ago",active:!0},{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",name:"Jill Jailbreaker",job:"Engineer",email:"jj@breaker.com",role:"Collaborator",lastActive:"6 days ago",active:!0},{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",name:"Henry Silkeater",job:"Designer",email:"henry@silkeater.io",role:"Contractor",lastActive:"2 days ago",active:!1},{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",name:"Bill Horsefighter",job:"Designer",email:"bhorsefighter@gmail.com",role:"Contractor",lastActive:"5 days ago",active:!0},{avatar:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",name:"Jeremy Footviewer",job:"Manager",email:"jeremy@foot.dev",role:"Manager",lastActive:"3 days ago",active:!1}],S=["Manager","Collaborator","Contractor"];const C=function(){var e=k.map((function(e){return(0,w.jsxs)(s.Table.Tr,{children:[(0,w.jsx)(s.Table.Td,{children:(0,w.jsxs)(s.Group,{gap:"sm",children:[(0,w.jsx)(s.Avatar,{size:40,src:e.avatar,radius:40}),(0,w.jsxs)("div",{children:[(0,w.jsx)(s.Text,{fz:"sm",fw:500,children:e.name}),(0,w.jsx)(s.Text,{fz:"xs",c:"dimmed",children:e.email})]})]})}),(0,w.jsx)(s.Table.Td,{children:(0,w.jsx)(s.Select,{data:S,defaultValue:e.role,variant:"unstyled",allowDeselect:!1})}),(0,w.jsx)(s.Table.Td,{children:e.lastActive}),(0,w.jsx)(s.Table.Td,{children:e.active?(0,w.jsx)(s.Badge,{fullWidth:!0,variant:"light",children:"Active"}):(0,w.jsx)(s.Badge,{color:"gray",fullWidth:!0,variant:"light",children:"Disabled"})})]},e.name)}));return(0,w.jsx)(s.Table.ScrollContainer,{minWidth:800,children:(0,w.jsxs)(s.Table,{verticalSpacing:"sm",children:[(0,w.jsx)(s.Table.Thead,{children:(0,w.jsxs)(s.Table.Tr,{children:[(0,w.jsx)(s.Table.Th,{children:"Employee"}),(0,w.jsx)(s.Table.Th,{children:"Role"}),(0,w.jsx)(s.Table.Th,{children:"Last active"}),(0,w.jsx)(s.Table.Th,{children:"Status"})]})}),(0,w.jsx)(s.Table.Tbody,{children:e})]})})};var H=t(701),L=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],z=[{month:"January",Smartphones:1200,Laptops:900,Tablets:200},{month:"February",Smartphones:1900,Laptops:1200,Tablets:400},{month:"March",Smartphones:400,Laptops:1e3,Tablets:200},{month:"April",Smartphones:1e3,Laptops:200,Tablets:800},{month:"May",Smartphones:800,Laptops:1400,Tablets:1200},{month:"June",Smartphones:750,Laptops:600,Tablets:1e3}];const N=function(){return(0,w.jsx)("div",{children:(0,w.jsxs)(s.SimpleGrid,{cols:2,children:[(0,w.jsx)("div",{children:(0,w.jsx)(s.Paper,{withBorder:!0,p:"md",radius:"md",children:(0,w.jsx)(H.AreaChart,{h:300,data:L,dataKey:"date",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}],curveType:"linear"})})}),(0,w.jsx)("div",{children:(0,w.jsx)(s.Paper,{withBorder:!0,p:"md",radius:"md",children:(0,w.jsx)(H.BarChart,{h:300,data:z,dataKey:"month",series:[{name:"Smartphones",color:"violet.6"},{name:"Laptops",color:"blue.6"},{name:"Tablets",color:"teal.6"}],tickLine:"y"})})})]})})};var I={user:f.IconUserPlus,discount:f.IconDiscount2,receipt:f.IconReceipt2,coin:f.IconCoin},J=[{title:"Revenue",icon:"receipt",value:"13,456",diff:34},{title:"Profit",icon:"coin",value:"4,145",diff:-13},{title:"Coupons usage",icon:"discount",value:"745",diff:18},{title:"New customers",icon:"user",value:"188",diff:-30}];const M=function(){var e=J.map((function(e){var a=I[e.icon],t=e.diff>0?f.IconArrowUpRight:f.IconArrowDownRight;return(0,w.jsxs)(s.Paper,{withBorder:!0,p:"md",radius:"md",children:[(0,w.jsxs)(s.Group,{justify:"space-between",children:[(0,w.jsx)(s.Text,{size:"xs",c:"dimmed",className:A.title,children:e.title}),(0,w.jsx)(a,{className:A.icon,size:"1.4rem",stroke:1.5})]}),(0,w.jsxs)(s.Group,{align:"flex-end",gap:"xs",mt:25,children:[(0,w.jsx)(s.Text,{className:A.value,children:e.value}),(0,w.jsxs)(s.Text,{c:e.diff>0?"teal":"red",fz:"sm",fw:500,className:A.diff,children:[(0,w.jsxs)("span",{children:[e.diff,"%"]}),(0,w.jsx)(t,{size:"1rem",stroke:1.5})]})]}),(0,w.jsx)(s.Text,{fz:"xs",c:"dimmed",mt:7,children:"Compared to previous month"})]},e.title)}));return(0,w.jsx)("div",{className:A.root,children:(0,w.jsxs)(s.Stack,{gap:"lg",children:[(0,w.jsx)("div",{children:(0,w.jsx)(s.SimpleGrid,{cols:{base:1,xs:2,md:4},children:e})}),(0,w.jsx)("div",{children:(0,w.jsx)(N,{})}),(0,w.jsx)("div",{children:(0,w.jsx)(C,{})})]})})};var B=(0,s.createTheme)({});const D=function(){return(0,w.jsx)(s.MantineProvider,{theme:B,defaultColorScheme:"dark",children:(0,w.jsx)("div",{children:(0,w.jsx)(M,{})})})};r().render((0,w.jsx)(D,{}),document.getElementById("app"))},8972:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(1601),r=t.n(n),s=t(6314),i=t.n(s)()(r());i.push([e.id,"body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n  font-size: 3rem;\n  margin: auto;\n  max-width: 800px;\n  margin-top: 20px;\n}\n",""]);const o=i},7683:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(1601),r=t.n(n),s=t(6314),i=t.n(s)()(r());i.push([e.id,".vjbDH8bTWecgk7HuTkbn {\n  padding: calc(var(--mantine-spacing-xl) * 1.5);\n}\n\n.wy80xj6r34p55NVqNvIV {\n  font-size: rem(24px);\n  font-weight: 700;\n  line-height: 1;\n}\n\n.EoDykQfZHWW0ALzKH27o {\n  line-height: 1;\n  display: flex;\n  align-items: center;\n}\n\n.yer6HStQbRul2NJmmpUH {\n  color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-3));\n}\n\n.gBw3JGO7L219fJkj3iw7 {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n",""]),i.locals={root:"vjbDH8bTWecgk7HuTkbn",value:"wy80xj6r34p55NVqNvIV",diff:"EoDykQfZHWW0ALzKH27o",icon:"yer6HStQbRul2NJmmpUH",title:"gBw3JGO7L219fJkj3iw7"};const o=i}}]);