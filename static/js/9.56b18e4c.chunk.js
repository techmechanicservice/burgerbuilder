(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{146:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(14),c=(a(146),a(26),a(0)),l=a.n(c),u=a(43),m=a(5),o=a(20),s=a(21),i=a(31),d=a(12),b=a(13);t.default=function(e){var t=Object(m.b)(),a=Object(s.a)(!1),c=Object(r.a)(a,2),p=c[0],E=c[1],y=[],g=Object(m.c)((function(e){return e.buildBurger.ingredients})),h=Object(m.c)((function(e){return e.buildBurger.totalPrice.toFixed(2)})),O=Object(m.c)((function(e){return e.login.userData})),_=Object(m.c)((function(e){return e.login.idToken})),f=Object(m.c)((function(e){return e.login.userId})),j=Object(m.c)((function(e){return e.placeOrder.checkOutMessage})),k=Object(m.c)((function(e){return e.placeOrder.loading})),N={ingredients:g,totalPrice:h,userId:f},v=function(){/[Tt]hank.*/.test(j)?(e.history.replace("/"),E(!1)):E(!1)};for(var w in g)g[w]>0&&y.push(l.a.createElement("li",{className:"order-summary__item order-summary__item--".concat(w),key:w},l.a.createElement("span",null,w," : "),g[w]));return l.a.createElement(l.a.Fragment,null,k?l.a.createElement("div",null,l.a.createElement("p",{style:{color:"wheat",marginBottom:"1rem"}},"Placing your order..."),l.a.createElement(b.a,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{ingredients:g}),l.a.createElement("section",{className:"order-summary"},l.a.createElement("h3",{className:"order-summary__heading"},"Order Summary"),l.a.createElement("ul",{className:"order-summary__items"},l.a.createElement("span",null,y.length>1?"Ingredients":"Ingredient"),y),l.a.createElement("p",{className:"order-summary__price"},l.a.createElement("span",null,"Total Price : "),"$",h),l.a.createElement("address",{className:"order-summary__address"},l.a.createElement("span",null,"Ship to : "),"".concat(O.zipCode," ").concat(O.country),l.a.createElement("br",null),l.a.createElement("span",null,"Receiver : "),O.name,l.a.createElement("br",null),l.a.createElement("span",null,"Contact : "),O.contactNumber),l.a.createElement("nav",null,l.a.createElement("button",{type:"button",className:"button--more order-summary__button",onClick:function(){e.history.replace("/")}},"Back"),l.a.createElement("button",{type:"button",className:"button--success order-summary__button",onClick:function(){var e=new Date;t(d.h(Object(n.a)(Object(n.a)({},N),{},{purchaseDate:e}),_,E))}},"Purchase")))),p?l.a.createElement(o.a,{closeAlert:v},l.a.createElement(i.a,{acknowledgeAlert:v},j)):null)}}}]);
//# sourceMappingURL=9.56b18e4c.chunk.js.map