(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__2IEj4"}},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(43),o=(n(26),function(e){return r.a.createElement("button",{className:"button ".concat(e.btnType),onClick:e.clicked,type:e.type,disabled:e.disabled},e.children)}),c=(n(134),function(e){return r.a.createElement("div",{className:"checkout-summary"},r.a.createElement("h2",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"30rem",height:"30rem",margin:"auto"}},r.a.createElement(i.a,{ingredients:e.ingredients})),r.a.createElement(o,{btnType:"Danger",clicked:e.checkoutCancelled,type:"button",disabled:!1},"Cancel"),r.a.createElement(o,{btnType:"Success",clicked:e.checkoutContinued,type:"button",disabled:!1},"Continue"))}),u=n(3),l=n(42),s=n(11);function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?p(e):t}var g=n(15),b=(n(135),function(e){var t=null,n=!e.valid&&e.touched?"input__field input__field--invalid":"input__field";switch(e.elementType){case"input":case"email":case"password":t=r.a.createElement("input",Object.assign({className:n},e.elementConfig,{name:e.name,value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n},e.elementConfig,{name:e.name,value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n,name:e.name,value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:n},e.elementConfig,{name:e.name,value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:"input"},t)}),E=n(136),C=n.n(E),k=n(13),O=n(4),j=n(32),w=n(10),_=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(E,e);var t,n,i,c,v=(t=E,function(){var e,n=f(t);if(h()){var a=f(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return y(this,e)});function E(e){var t;function n(e,t,n,a){this.touched=!1,this.elementType=e,this.elementConfig=t,this.validation=n,this.value=a}!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,E);return(t=v.call(this,e)).state={orderForm:{name:new n("input",{type:"text",placeholder:"Your Name"},{required:!0,valid:!1},""),street:new n("input",{type:"text",placeholder:"Street"},{required:!0,valid:!1},""),zipCode:new n("input",{type:"text",placeholder:"ZIP Code"},{required:!0,minLength:5,maxLength:5,valid:!1},""),country:new n("input",{type:"text",placeholder:"Country"},{required:!0,valid:!1},""),email:new n("email",{type:"email",placeholder:"Email"},{required:!0,valid:!1},""),deliveryMethod:new n("select",{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},{required:!0,valid:!0},"fastest")},loading:!1},t.orderHandler=t.orderHandler.bind(p(t)),t.inputChangedHandler=t.inputChangedHandler.bind(p(t)),t.submitScreen=t.submitScreen.bind(p(t)),t}return n=E,(i=[{key:"inputChangedHandler",value:function(e){var t=Object(s.a)({},this.state.orderForm),n=Object(s.a)({},t[e.target.name]);n.value=e.target.value,n.validation.valid=this.validate(n.value,n.validation),n.touched=!0,t[e.target.name]=n,this.setState({orderForm:t})}},{key:"orderHandler",value:function(e){e.preventDefault();var t={};for(var n in this.state.orderForm)t[n]=this.state.orderForm[n].value;var a={ingredients:this.props.ings,price:this.props.price.toFixed(2),orderData:t,userId:this.props.userId};this.props.onOrderBurger(a,this.props.token)}},{key:"validate",value:function(e,t){return[!t.required||""!==e.trim(),!t.minLength||e.length>=t.minLength,!t.maxLength||e.length<=t.maxLength].reduce((function(e,t){return e&&t}))}},{key:"submitScreen",value:function(){var e=Object(s.a)({},this.state.orderForm);return Object(l.a)(Object.keys(e)).map((function(t){return e[t].validation.valid})).reduce((function(e,t){return e&&t}))}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var i=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(b,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,name:t.id,value:t.config.value,changed:e.inputChangedHandler,valid:t.config.validation.valid,touched:t.config.touched})})),r.a.createElement(o,{type:"submit",btnType:"Success",clicked:this.orderHandler,disabled:!this.submitScreen()},"ORDER"));return this.props.loading&&(i=r.a.createElement(g.a,null)),r.a.createElement(a.Fragment,null,this.props.purchased?r.a.createElement(u.a,{to:"/"}):null,r.a.createElement("div",{className:C.a.ContactData},r.a.createElement("h4",null,"Enter your contact data"),i))}}])&&d(n.prototype,i),c&&d(n,c),E}(a.Component),S=Object(O.b)((function(e){return{ings:e.buildBurger.ingredients,price:e.buildBurger.totalPrice,loading:e.placeOrder.loading,purchased:e.placeOrder.purchased,token:e.authenticate.token,userId:e.authenticate.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(w.j(t,n))}}}))(Object(j.a)(_,k.a));t.default=function(e){var t=Object(O.c)(),n=Object(O.d)((function(e){return e.buildBurger.ingredients})),i=r.a.createElement(u.a,{to:"/"});return n&&(i=r.a.createElement(a.Fragment,null,r.a.createElement(c,{ingredients:n,checkoutCancelled:function(){e.history.replace("/")},checkoutContinued:function(){t(w.d()),e.history.replace("/checkout/contact-data")}}),r.a.createElement(u.b,{path:e.match.path+"/contact-data",component:S}))),r.a.createElement("div",null,i)}}}]);
//# sourceMappingURL=4.dea0955a.chunk.js.map