(function(t){function e(e){for(var o,r,i=e[0],u=e[1],c=e[2],l=0,d=[];l<i.length;l++)r=i[l],a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={"./src/":0,app:0},a={"./src/":0,app:0},s=[];function i(t){return u.p+"js/"+({about:"about",group:"group"}[t]||t)+"."+{about:"ecb73954",group:"c6a3b084"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1,group:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var o="css/"+({about:"about",group:"group"}[t]||t)+"."+{about:"be554a8a",group:"62c22e09"}[t]+".css",r=u.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var i=a[s],c=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(c===o||c===r))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],c=i.getAttribute("data-href");if(c===o||c===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.request=o,n(a)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[t]=0}));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise(function(e,n){o=a[t]=[e,n]});e.push(o[2]=s);var c,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(t),c=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");s.type=o,s.request=r,n[1](s)}a[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,l.appendChild(d)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2583:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("7faf"),n("2877")),i={},u=Object(s["a"])(i,r,a,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column",staticStyle:{height:"100%"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light",staticStyle:{"background-color":"#e3f2fd"}},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("\n      "+t._s(t.appName)+"\n    ")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor03"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n            Home\n          ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("\n            About\n          ")])],1)])])]),n("div",{staticClass:"container d-flex align-items-center justify-content-center",staticStyle:{height:"100%"}},[n("transition",{attrs:{name:"router",mode:"out-in"}},[n("router-view")],1)],1)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],f={data:function(){return{appName:"TO DO LIST(Vue + Laravel)"}}},m=f,h=Object(s["a"])(m,d,p,!1,null,null,null);h.options.__file="Main.vue";var g=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 h-100"},[n("h2",{staticClass:"mb-4 mt-5 text-center"},[t._v("\n    TODO Lists\n  ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"text-center text-muted"},[n("h4",[t._v("Loading...")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.groups,expression:"groups"}]},[n("group-form",{on:{groupCreated:t.onGroupCreated}}),n("draggable",{attrs:{options:t.draggableOptions},model:{value:t.groups,callback:function(e){t.groups=e},expression:"groups"}},[n("transition-group",{staticClass:"card-columns mb-5",attrs:{tag:"div",name:"fade"}},t._l(t.groups,function(e){return n("div",{key:e.id,class:{"card text-center my-3":!0,"border-success":e.finished},attrs:{"data-id":e.id}},[n("group-title",{staticClass:"draggable-handler",attrs:{group:e},on:{"update:group":function(n){t.onUpdateGroup(n,e)}}}),n("div",{staticClass:"card-body"},[n("ol",{staticStyle:{"text-align":"left"}},t._l(e.todo,function(e){return n("li",{key:e.id,class:{"text-success":e.completed},on:{mouseover:function(n){t.todoSwowEditById=e.id},mouseout:function(e){t.todoSwowEditById=null}}},[t.todoSwowEditById===e.id?n("todo-checkbox",{attrs:{"todo-prop":e},on:{input:t.updateTodoCompleted}}):n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:e.completed,expression:"todo.completed"}]},[t._v("✔")]),t._v("\n                  "+t._s(e.title)+"\n                ")])],1)})),n("button",{staticClass:"btn btn-secondary",on:{click:function(n){t.$router.push("/group/"+e.id)}}},[t._v("\n              Open\n            ")]),n("button",{staticClass:"btn btn-secondary btn-sm ml-2",on:{click:function(n){t.deleteGroup(e)}}},[t._v("\n              🗑️ Delete\n            ")])])],1)}))],1)],1)])},b=[],w=(n("7f7f"),n("7514"),n("f751"),n("96cf"),n("3040")),x=n("1516"),_=n.n(x),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex w-50 mx-auto",staticStyle:{"max-width":"350px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"List name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),n("button",{staticClass:"btn btn-primary btn-dark btn-sm ml-2",attrs:{role:"button"},on:{click:t.addGroup}},[n("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaUlEQVQ4T2NkoBAw4tIfujt0PwMDgwNU/sBq19WO2NTiNCBoR9B/MzMzsJ5Tp04xrPNYh1UtTgP8tvj9Nzc3Bxtw8uRJhk0+m0gzwHO9538LCwuwASdOnGDYHridNAOcVzr/t7S0BBtw/Phxhr3he3EbYLvYdj8zM7MDGxsbAwizsrKCsaKiItiA+/fvM/z+/RuMf/36BcZ///49cDj2sCPYVLM5Zv+DgoJQAvnr168MX758AYvx8PAwcHNzo8ivW7eO4VTKKUawAQbTDP7b2NiQlCKOHDnCcCHrAsQAzX7N/SwsLA4gZ4O8wM7ODvaCkpIS2NB79+6Bnf/z50+w80HsP3/+HLheeB3iBWxAuVP5v52dHVjq0KFDDHfL75IWC7LNsv/t7e3BBhw8eJDhce1j0gyQqJP47+AASckHDhxgeNH0gjQDRKpE/js6QpL//v37Gd60vSHNAMFyQZTM9L7zPWmZidg4BQC6j4QRBvLeBAAAAABJRU5ErkJggg=="}}),t._v("\n    Add\n  ")])])},C=[],A={name:"GroupForm",data:function(){return{form:{name:null}}},methods:{addGroup:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.$post("groups/",this.form);case 3:t.t1=t.sent,t.t0.$emit.call(t.t0,"groupCreated",t.t1),this.form.name=null;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},k=A,O=Object(s["a"])(k,y,C,!1,null,null,null);O.options.__file="GroupForm.vue";var j=O.exports,B=n("d450"),E=n("fbb0"),N={name:"Home",components:{draggable:_.a,GroupForm:j,GroupTitle:B["a"],TodoCheckbox:E["a"]},data:function(){return{groups:null,todoSwowEditById:null,loading:!1,draggableOptions:{draggable:".card",animation:400,handle:".draggable-handler"}}},mounted:function(){this.fetchGroups()},methods:{fetchGroups:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$get("groups");case 3:this.groups=t.sent,this.loading=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onUpdateGroup:function(t,e){Object.assign(e,t)},onGroupCreated:function(t){this.groups.unshift(t)},updateTodoCompleted:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){var n,o,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.id,o=e.groupId,r=e.completed,a=this.groups.find(function(t){return t.id===o}),a.todo.find(function(t){return t.id===n}).completed=r,a.finished=(a.todo_completed_count=a.todo.filter(function(t){return t.completed}).length)===(a.todo_count=a.todo.length),t.next=6,this.$put("todo/"+n,{completed:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deleteGroup:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.id,o=e.name,!confirm('Удалить "'.concat(o,'"?'))){t.next=5;break}return t.next=4,this.$delete("groups/"+n);case 4:this.groups=this.groups.filter(function(t){return t.id!==n});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},T=N,P=Object(s["a"])(T,v,b,!1,null,null,null);P.options.__file="Home.vue";var S=P.exports,G=[{path:"/",component:g,children:[{name:"home",path:"/",component:S},{name:"group",path:"/group/:id",component:function(){return n.e("group").then(n.bind(null,"d684"))},meta:{auth:!0},props:!0},{name:"about",path:"/about",component:function(){return n.e("about").then(n.bind(null,"a1d1"))}}]}];o["a"].use(l["a"]);var R=new l["a"]({mode:"history",base:"/",routes:G}),$=R,L=(n("2583"),n("bc3a")),M=n.n(L),D=n("0987");o["a"].use(D["a"],{axios:M.a,config:{baseURL:"http://localhost:8000/api/"},interceptors:{beforeResponseError:function(t){if(t.response.data.message)return alert(t.response.data.message),Promise.reject(t)}}});n("ab8b");o["a"].config.productionTip=!1,new o["a"]({router:$,render:function(t){return t(c)}}).$mount("#app")},5917:function(t,e,n){},"7faf":function(t,e,n){"use strict";var o=n("5917"),r=n.n(o);r.a},d450:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"card-header text-center":!0,"text-success":t.group.finished}},[n("h4",{class:{"card-title":!0,"text-success":t.group.finished}},[n("div",{staticClass:"mx-auto text-center px-2",staticStyle:{"max-width":"350px !important"},on:{mouseover:t.mouseover,mouseout:function(e){t.editable=!1}}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.editable?n("div",{staticClass:"d-flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),n("div",{staticClass:"btn-group ml-2",attrs:{role:"group"}},[n("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:t.save}},[t._v("\n              Ок\n            ")]),n("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:t.cancel}},[t._v("\n              X\n            ")])])]):n("span",[t.group.finished?n("span",[t._v("✔")]):t._e(),t._v("\n          "+t._s(t.group.name)+"\n        ")])])],1)]),n("span",{staticClass:"text-muted"},[t._v("\n    Completed\n    "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.group.finished,expression:"group.finished"}]},[t._v("\n      all "+t._s(t.group.todo_count)+" tasks\n    ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.group.finished,expression:"!group.finished"}]},[t._v("\n      "+t._s(t.group.todo_completed_count)+" of "+t._s(t.group.todo_count)+" tasks\n    ")])])])},r=[],a=n("c93e"),s=(n("96cf"),n("3040")),i=(n("7f7f"),{name:"GroupTitle",props:{group:{type:Object,required:!0}},data:function(){return{form:{name:this.group.name},editable:!1,afterEditable:!1}},methods:{mouseover:function(){this.afterEditable?this.afterEditable=!1:this.editable=!0},save:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$put("groups/"+this.group.id,this.form);case 2:this.$emit("update:group",Object(a["a"])({},this.group,this.form)),this.cancel();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),cancel:function(){this.editable=!1,this.afterEditable=!0}}}),u=i,c=n("2877"),l=Object(c["a"])(u,o,r,!1,null,null,null);l.options.__file="GroupTitle.vue";e["a"]=l.exports},fbb0:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-control custom-checkbox"},[n("input",{staticClass:"custom-control-input",attrs:{id:"todo"+t.todo.id,name:"todo-"+t.todo.id,type:"checkbox"},domProps:{checked:t.todo.completed},on:{input:function(e){t.$emit("input",{id:t.todo.id,groupId:t.todo.group_id,completed:!t.todo.completed})}}}),n("label",{class:["custom-control-label",t.todo.completed&&"text-success"],attrs:{for:"todo"+t.todo.id}},[t._v("\n    "+t._s(t.todo.title)+"\n  ")])])},r=[],a={name:"TodoCheckbox",props:{todoProp:{type:Object,required:!0}},data:function(){return{todo:this.todoProp}}},s=a,i=n("2877"),u=Object(i["a"])(s,o,r,!1,null,null,null);u.options.__file="TodoCheckbox.vue";e["a"]=u.exports}});
//# sourceMappingURL=.d6e71c20.js.map