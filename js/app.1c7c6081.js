(function(){"use strict";var t={7579:function(t,e,n){var a=n(9242),o=n(3396);const s={class:"container"};function r(t,e,n,a,r,i){const d=(0,o.up)("Header"),l=(0,o.up)("router-view"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(d,{onToggleAddTask:i.toggleAddTask,title:"Task Tracker",showAddTask:r.showAddTask},null,8,["onToggleAddTask","showAddTask"]),(0,o.Wm)(l,{showAddTask:r.showAddTask},null,8,["showAddTask"]),(0,o.Wm)(c)])}var i=n(7139);function d(t,e,n,s,r,d){const l=(0,o.up)("Button");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("h1",null,(0,i.zw)(n.title),1),(0,o.wy)((0,o.Wm)(l,{onBtnClick:e[0]||(e[0]=e=>t.$emit("toggle-add-task")),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"]),[[a.F8,d.homePage]])])}function l(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("button",{onClick:e[0]||(e[0]=e=>t.$emit("btn-click")),style:(0,i.j5)({background:n.color}),class:"btn"},(0,i.zw)(n.text),5)}var c={name:"Button",props:{text:String,color:String}},u=n(89);const k=(0,u.Z)(c,[["render",l]]);var m=k,f={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:m},computed:{homePage(){return"/"===this.$route.path}}};const h=(0,u.Z)(f,[["render",d],["__scopeId","data-v-1d37a405"]]);var p=h;const T=t=>((0,o.dD)("data-v-024f7a3e"),t=t(),(0,o.Cn)(),t),g=T((()=>(0,o._)("p",null,"Copyright © 2023",-1))),w=T((()=>(0,o._)("a",{href:"/about"},"About",-1))),v=[g,w];function y(t,e){return(0,o.wg)(),(0,o.iD)("footer",null,v)}const b={},A=(0,u.Z)(b,[["render",y],["__scopeId","data-v-024f7a3e"]]);var _=A,D={name:"App",components:{Header:p,Footer:_},data(){return{showAddTask:!1}},methods:{toggleAddTask(){this.showAddTask=!this.showAddTask}}};const x=(0,u.Z)(D,[["render",r]]);var O=x,j=n(678);function C(t,e,n,s,r,i){const d=(0,o.up)("AddTask"),l=(0,o.up)("Tasks");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.wy)((0,o.Wm)(d,{onAddTask:i.addTask},null,8,["onAddTask"]),[[a.F8,n.showAddTask]]),(0,o.Wm)(l,{onToggleReminder:i.toggleReminder,onDeleteTask:i.deleteTask,tasks:r.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])],64)}function S(t,e,n,a,s,r){const i=(0,o.up)("Task");return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.tasks,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o.Wm)(i,{onToggleReminder:n=>t.$emit("toggle-reminder",e.id),onDeleteTask:n=>t.$emit("delete-task",e.id),task:e},null,8,["onToggleReminder","onDeleteTask","task"])])))),128)}function $(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",{onDblclick:e[1]||(e[1]=e=>t.$emit("toggle-reminder",n.task.id)),class:(0,i.C_)([n.task.reminder?"reminder":"","task"])},[(0,o._)("h3",null,[(0,o.Uk)((0,i.zw)(n.task.text)+" ",1),(0,o._)("i",{onClick:e[0]||(e[0]=e=>t.$emit("delete-task",n.task.id)),class:"fas fa-times"})]),(0,o._)("p",null,(0,i.zw)(n.task.day),1)],34)}var Z={name:"Task",props:{task:Object}};const H=(0,u.Z)(Z,[["render",$]]);var P=H,W={name:"Tasks",props:{tasks:Array},components:{Task:P},emits:["delete-task","toggle-reminder"]};const B=(0,u.Z)(W,[["render",S]]);var R=B;const U=t=>((0,o.dD)("data-v-2c2f873f"),t=t(),(0,o.Cn)(),t),E={class:"form-control"},F=U((()=>(0,o._)("label",null,"Task",-1))),z={class:"form-control"},V=U((()=>(0,o._)("label",null,"Day & Time",-1))),I={class:"form-control form-control-check"},Y=U((()=>(0,o._)("label",null,"Set Reminder",-1))),J=U((()=>(0,o._)("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)));function N(t,e,n,s,r,i){return(0,o.wg)(),(0,o.iD)("form",{onSubmit:e[3]||(e[3]=(...t)=>i.onSubmit&&i.onSubmit(...t)),class:"add-form"},[(0,o._)("div",E,[F,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.text=t),name:"text",placeholder:"Add Task"},null,512),[[a.nr,r.text]])]),(0,o._)("div",z,[V,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>r.day=t),name:"day",placeholder:"Add Day & Time"},null,512),[[a.nr,r.day]])]),(0,o._)("div",I,[Y,(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=t=>r.reminder=t),name:"reminder"},null,512),[[a.e8,r.reminder]])]),J],32)}var G={name:"AddTask",data(){return{text:"",day:"",reminder:!1}},methods:{onSubmit(t){if(t.preventDefault(),!this.text)return void alert("Please add a task");const e={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",e),this.text="",this.day="",this.reminder=!1}}};const K=(0,u.Z)(G,[["render",N],["__scopeId","data-v-2c2f873f"]]);var L=K,M={name:"Home",props:{showAddTask:Boolean},components:{Tasks:R,AddTask:L},data(){return{tasks:[]}},methods:{async addTask(t){const e=await fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}),n=await e.json();this.tasks=[...this.tasks,n]},async deleteTask(t){if(confirm("Are you sure?")){const e=await fetch(`api/tasks/${t}`,{method:"DELETE"});200===e.status?this.tasks=this.tasks.filter((e=>e.id!==t)):alert("Error deleting task")}},async toggleReminder(t){const e=await this.fetchTask(t),n={...e,reminder:!e.reminder},a=await fetch(`api/tasks/${t}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}),o=await a.json();this.tasks=this.tasks.map((e=>e.id===t?{...e,reminder:o.reminder}:e))},async fetchTasks(){const t=await fetch("api/tasks"),e=await t.json();return e},async fetchTask(t){const e=await fetch(`api/tasks/${t}`),n=await e.json();return n}},async created(){this.tasks=await this.fetchTasks()}};const q=(0,u.Z)(M,[["render",C]]);var Q=q;const X=(0,o._)("h3",null,"Version 1.0.0",-1);function tt(t,e,n,a,s,r){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[X,(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Go Back")])),_:1})],64)}var et={name:"About",inheritAttrs:!1};const nt=(0,u.Z)(et,[["render",tt]]);var at=nt;const ot=[{path:"/",name:"Home",component:Q},{path:"/about",name:"About",component:at}],st=(0,j.p7)({history:(0,j.PO)("/TaskTracker/"),routes:ot});var rt=st;(0,a.ri)(O).use(rt).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,s){if(!a){var r=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],s=t[c][2];for(var i=!0,d=0;d<a.length;d++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[d])}))?a.splice(d--,1):(i=!1,s<r&&(r=s));if(i){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[a,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,r=a[0],i=a[1],d=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(d)var c=d(n)}for(e&&e(a);l<r.length;l++)s=r[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},a=self["webpackChunktasktracker"]=self["webpackChunktasktracker"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7579)}));a=n.O(a)})();
//# sourceMappingURL=app.1c7c6081.js.map