(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{28:function(t,e,c){},29:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(14),i=c.n(s),o=(c(28),c(29),c(9)),r=c(3),a=c(11),l=c(8),d="ADD_TODOS",j="DELETE_TODOS",b="UPDATE_TODOS",u=c(1),O=function(){var t=Object(l.c)((function(t){return t})),e=Object(l.b)(),c=Object(n.useState)(""),s=Object(a.a)(c,2),i=s[0],d=s[1],j=Object(r.f)().id,O=t.find((function(t){return t.id===parseInt(j)}));return Object(n.useEffect)((function(){O&&d(O.todos)}),[O]),Object(u.jsx)("div",{children:O?Object(u.jsx)("ul",{style:{listStyle:"none",textAlign:"center"},children:t.filter((function(t){return t.id===parseInt(j)})).map((function(t,c){return Object(u.jsx)("div",{children:Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"row justify-content-md-center mt-5 ",children:[Object(u.jsx)("div",{className:"col-md-auto mt-1",children:t.todos}),Object(u.jsx)("div",{className:"col-md-auto",children:Object(u.jsx)("input",{type:"text",name:"editname",value:i,onChange:function(t){return d(t.target.value)},className:"form-control mb-2",required:!0})}),Object(u.jsxs)("div",{className:"col col-lg-4 btn-group",children:[Object(u.jsx)("div",{className:"col col-lg-4",children:""===i?Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("button",{type:"button",className:"btn btn-info",children:"Update"})}):Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){e(function(t,e){return{type:b,payload:t,todos:e}}({id:t.id,todos:i}))},children:"Update"})})}),Object(u.jsx)("div",{className:"col col-lg-2",children:Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("button",{type:"button",className:"btn btn-dark",children:"Cancel"})})})]})]})})},c)}))}):Object(u.jsx)("p",{children:"Not valid id"})})},m=function(){var t=Object(l.c)((function(t){return t})),e=Object(n.useState)(!1),c=Object(a.a)(e,2),s=c[0],i=c[1],r=Object(l.b)();return Object(u.jsx)("div",{children:s?Object(u.jsx)(O,{}):t.map((function(t,e){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"row justify-content-md-center mt-2",children:[Object(u.jsx)("div",{className:"col ",children:Object(u.jsx)("div",{className:"list-group list-group-horizontal",children:Object(u.jsx)("p",{className:"list-group-item mb-2 ",children:t.todos})})}),Object(u.jsxs)("div",{className:"col col-lg-3 btn-group ",children:[Object(u.jsx)("div",{className:"col col-lg-3",children:Object(u.jsx)(o.b,{to:"/todoedit/".concat(t.id),children:Object(u.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){i(!0)},children:"Edit"})})}),Object(u.jsx)("div",{className:"col col-lg-5",children:Object(u.jsx)("button",{type:"button",onClick:function(){return r(function(t){return{type:j,payload:t}}(t.id))},className:"btn btn-danger",children:"Delete"})})]})]})},e)}))})},h=function(){var t=Object(l.c)((function(t){return t})),e=Object(l.b)(),c=Object(n.useState)([]),s=Object(a.a)(c,2),i=s[0],o=s[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("form",{onSubmit:function(c){var n;c.preventDefault(),e((n={id:t.length>0?t[t.length-1].id+1:0,todos:i},{type:d,payload:n})),o("")},children:Object(u.jsxs)("div",{className:"row justify-content-md-center mt-5 ",children:[Object(u.jsx)("div",{className:"col-md-auto mt-2",children:Object(u.jsxs)("h6",{children:["Total todos : ",t.length]})}),Object(u.jsx)("div",{className:"col-md-auto",children:Object(u.jsx)("input",{type:"text",name:"input",placeholder:"Enter todos...",value:i,onChange:function(t){return o(t.target.value)},className:"form-control mb-2",required:!0})}),Object(u.jsx)("div",{className:"col-md-auto",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Add"})})]})}),0===t.length?Object(u.jsx)("h4",{className:"mb-5 mt-5 text-center",children:"Please add first todo task"}):Object(u.jsx)(m,{})]})};var x=function(){return Object(u.jsx)("div",{className:"container justify-content-md-center p-2 mb-2 bg-light text-dark",children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/",exact:!0,component:function(){return Object(u.jsx)(h,{})}}),Object(u.jsx)(r.a,{path:"/todoedit/:id",end:!0,component:function(){return Object(u.jsx)(O,{})}})]})})})},p=c(23),f=c(22),v=[],N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return t=[].concat(Object(f.a)(t),[e.payload]);case j:var c=t.filter((function(t){return t.id===e.payload?null:t}));return t=c;case b:var n=t.filter((function(t){return t.id===e.payload.id?Object.assign(t,{todos:e.payload.todos}):t}));return t=n;default:return t}},g=Object(p.a)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c(37);i.a.render(Object(u.jsx)(l.a,{store:g,children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.256b1e91.chunk.js.map