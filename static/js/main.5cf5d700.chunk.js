(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),s=a.n(r),l=(a(14),a(5)),c=a(1),m=a(2),i=a(3),d=a(4);var u=function(e){return o.a.createElement(n.Fragment,null,o.a.createElement("li",{className:"media mt-3"},o.a.createElement("input",{className:"mt-2",type:"checkbox",checked:e.todo.status,onChange:function(){return e.handleChangeProps(e.todo.id)}}),o.a.createElement("span",{className:"ml-3"},e.todo.title),o.a.createElement("div",{className:"media-body"},o.a.createElement("button",{className:"btn btn-outline-danger ml-5 btn-sm float-right",onClick:function(){return e.removeItemProps(e.todo.id)}},o.a.createElement("b",null,"X Remove")))),o.a.createElement("hr",{className:"my-2"}))},p=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",{className:"list-unstyled"},this.props.todos.map((function(t){return o.a.createElement(u,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,removeItemProps:e.props.removeItemProps})})))}}]),a}(n.Component),h=function(){return o.a.createElement("header",{className:"jumbotron"},o.a.createElement("h1",null,"Todo App in React"),o.a.createElement("p",{className:"lead"},"Add your task from below field and hit enter or just click on Add Task"),o.a.createElement("hr",{className:"my-4"}))},f=a(8),b=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.addTodo=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodoProps(e.state.title),e.setState({title:""}),console.log("Hello")},e}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"form-inline",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"form-control",type:"text",placeholder:"add your todo task...",value:this.state.title,name:"title",onChange:this.addTodo}),o.a.createElement("button",{className:"btn btn-primary ml-2",type:"submit"},o.a.createElement("b",null,"+ Add Task"))))}}]),a}(n.Component),v=(a(15),function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.status=!e.status),e}))})},e.removeItem=function(t){e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodoItem=function(t){var a={id:Date.now(),title:t,status:""};e.setState({todos:[].concat(Object(l.a)(e.state.todos),[a])}),console.log(t)},e.state={todos:[{id:Date.now(),title:"learn React",status:""}]},e}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(b,{addTodoProps:this.addTodoItem}),o.a.createElement(p,{todos:this.state.todos,handleChangeProps:this.handleChange,removeItemProps:this.removeItem}))}}]),a}(n.Component));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.5cf5d700.chunk.js.map