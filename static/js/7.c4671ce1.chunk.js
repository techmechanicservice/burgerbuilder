(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{101:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(102);t.a=function(e){var t=e.children,a=e.acknowledgeAlert;return r.a.createElement("div",{className:"error-prompt"},r.a.createElement("p",{className:"error-prompt__toolkit"},t),r.a.createElement("button",{type:"button",className:"button--success error-prompt__button",onClick:a},"OK"))}},102:function(e,t,a){},142:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(16),r=(a(142),a(24),a(0)),c=a.n(r),l=a(41),o=a(5),u=a(29),m=a(30),s=a(101),i=a(13),d=a(12);t.default=function(e){var t=Object(o.b)(),a=Object(m.a)(!1),r=Object(n.a)(a,2),p=r[0],b=r[1],E=[],g=Object(o.c)((function(e){return e.buildBurger.ingredients})),y=Object(o.c)((function(e){return e.buildBurger.totalPrice.toFixed(2)})),_=Object(o.c)((function(e){return e.login.userData})),f=Object(o.c)((function(e){return e.login.idToken})),h=Object(o.c)((function(e){return e.login.userId})),O=Object(o.c)((function(e){return e.placeOrder.checkOutMessage})),k=Object(o.c)((function(e){return e.placeOrder.loading})),N={ingredients:g,totalPrice:y,userId:h};console.log(N);var j=function(){/[Tt]hank.*/.test(O)?(e.history.replace("/"),b(!1)):b(!1)};for(var v in g)g[v]>0&&E.push(c.a.createElement("li",{className:"order-summary__item order-summary__item--".concat(v),key:v},c.a.createElement("span",null,v," : "),g[v]));return c.a.createElement(c.a.Fragment,null,k?c.a.createElement("div",null,c.a.createElement("p",{style:{color:"wheat",marginBottom:"1rem"}},"Placing your order..."),c.a.createElement(d.a,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{ingredients:g}),c.a.createElement("section",{className:"order-summary"},c.a.createElement("h3",{className:"order-summary__heading"},"Order Summary"),c.a.createElement("ul",{className:"order-summary__items"},c.a.createElement("span",null,E.length>1?"Ingredients":"Ingredient"),E),c.a.createElement("p",{className:"order-summary__price"},c.a.createElement("span",null,"Total Price : "),"$",y),c.a.createElement("address",{className:"order-summary__address"},c.a.createElement("span",null,"Ship to : "),"".concat(_.zipCode," ").concat(_.country),c.a.createElement("br",null),c.a.createElement("span",null,"Receiver : "),_.name,c.a.createElement("br",null),c.a.createElement("span",null,"Contact : "),_.contactNumber),c.a.createElement("nav",null,c.a.createElement("button",{type:"button",className:"button--more order-summary__button",onClick:function(){e.history.replace("/")}},"Back"),c.a.createElement("button",{type:"button",className:"button--success order-summary__button",onClick:function(){t(i.g(N,f,b))}},"Purchase")))),p?c.a.createElement(u.a,{closeAlert:j},c.a.createElement(s.a,{acknowledgeAlert:j},O)):null)}}}]);
//# sourceMappingURL=7.c4671ce1.chunk.js.map