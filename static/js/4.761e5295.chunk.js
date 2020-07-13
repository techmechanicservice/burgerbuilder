(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{101:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(102);t.a=function(e){var t=e.children,n=e.acknowledgeAlert;return r.a.createElement("div",{className:"error-prompt"},r.a.createElement("p",{className:"error-prompt__toolkit"},t),r.a.createElement("button",{type:"button",className:"button--success error-prompt__button",onClick:n},"OK"))}},102:function(e,t,n){},103:function(e,t,n){"use strict";n(93);var a=n(0),r=n.n(a),c=r.a.forwardRef((function(e,t){var n=e.identity,a=e.type,c=e.formik,i=e.children;return r.a.createElement("div",{className:"form-input"},r.a.createElement("label",{className:"form-input__label",htmlFor:n},i," ",function(e){var t=c.touched[e],n=c.errors[e];return t&&n&&r.a.createElement("span",{className:"form-input__toolkit"},n)||null}(n)),r.a.createElement("input",Object.assign({ref:t,type:a,className:"form-input__field",name:n},c.getFieldProps(n))))}));t.a=c},154:function(e,t,n){"use strict";n.r(t);var a=n(16),r=(n(24),n(94),n(93),n(0)),c=n.n(r),i=n(5),o=n(13),u=n(12),m=n(103),l=n(29),s=n(30),b=n(125),f=n(122),d=n(101);t.default=function(e){var t=Object(i.c)((function(e){return e.login.userData})),n=t.contactNumber,p=t.country,y=t.name,h=t.userId,E=t.zipCode,g=t.id,N=Object(i.c)((function(e){return e.updateProfile.loading})),v=Object(i.c)((function(e){return e.updateProfile.errorMessage})),k=Object(i.c)((function(e){return e.login.idToken})),_=Object(i.b)(),O=Object(s.a)(!1),j=Object(a.a)(O,2),C=j[0],q=j[1],x=e.history;Object(r.useEffect)((function(){return _(o.k()),function(){_(o.b())}}),[]);var S=function(){q(!1)},w=Object(b.a)({initialValues:{name:y,country:p,zipCode:E,contactNumber:n},validationSchema:f.a({name:f.b().required("is required").max(20,"must not be longer than 20 characters"),country:f.b().required("is required").max(20,"must not be longer than 20 characters"),zipCode:f.b().required("is required").matches(/^[0-9]+$/,"must be a number").min(4,"must be 4 characters at least").max(4,"should not be more than 4 digits"),contactNumber:f.b().required("is required").matches(/^[0-9]+$/,"must be a number").max(20,"must not be longer than 20 digits")}),onSubmit:function(e){_(o.l(e,g,h,k,q,x))}});Object(r.useEffect)((function(){setTimeout((function(){}),500)}));var z=Object.keys(w.errors).length>0,J=JSON.stringify(w.initialValues)!==JSON.stringify(w.values),A=J?"Save":"No changes";return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form"},N?c.a.createElement("div",null,c.a.createElement("p",{style:{color:"wheat",marginBottom:"1rem"}},"Saving changes..."),c.a.createElement(u.a,null)):c.a.createElement("form",{className:"form__form",onSubmit:w.handleSubmit},c.a.createElement(m.a,{formik:w,identity:"name",type:"text"},"Name"),c.a.createElement(m.a,{formik:w,identity:"country",type:"text"},"Country"),c.a.createElement(m.a,{formik:w,identity:"zipCode",type:"text"},"Zip Code"),c.a.createElement(m.a,{formik:w,identity:"contactNumber",type:"text"},"Contact Number"),c.a.createElement("button",{type:"button",className:"button--more form__cancel",onClick:function(){x.replace("/profile")}},"Cancel"),c.a.createElement("button",{disabled:!J||z,type:"submit",className:"button--success form__submit"},A))),C?c.a.createElement(l.a,{closeAlert:S},c.a.createElement(d.a,{acknowledgeAlert:S},v)):null)}},93:function(e,t,n){},94:function(e,t,n){}}]);
//# sourceMappingURL=4.761e5295.chunk.js.map