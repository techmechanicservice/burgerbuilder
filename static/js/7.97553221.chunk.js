(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{106:function(e,t,a){"use strict";a(98);var n=a(0),r=a.n(n),i=r.a.forwardRef((function(e,t){var a=e.identity,n=e.type,i=e.formik,l=e.children;return r.a.createElement("div",{className:"form-input"},r.a.createElement("label",{className:"form-input__label",htmlFor:a},l," ",function(e){var t=i.touched[e],a=i.errors[e];return t&&a&&r.a.createElement("span",{className:"form-input__toolkit"},a)||null}(a)),r.a.createElement("input",Object.assign({ref:t,type:n,className:"form-input__field",name:a},i.getFieldProps(a))))}));t.a=i},162:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(0),i=a.n(r),l=a(15),c=a(5),s=a(12),o=(a(98),a(26),a(99),a(13)),m=a(106),u=a(20),f=a(21),b=a(31),d=a(128),p=a(125);t.default=function(e){var t=Object(f.a)(!1),a=Object(n.a)(t,2),g=a[0],E=a[1],h=Object(c.b)(),_=Object(c.c)((function(e){return e.login.loading})),y=Object(c.c)((function(e){return e.login.conflictMessage})),j=Object(c.c)((function(e){return e.login.errorMessage})),v=Object(r.useRef)();Object(r.useEffect)((function(){v.current.focus()}),[]);var O=function(){E(!1)},w=Object(d.a)({initialValues:{email:"",password:""},validationSchema:p.a({email:p.b().email("is invalid").required("is required").max(64,"must not be longer than 20 characters"),password:p.b().required("is required").min(6,"must be 6 characters atleast")}),onSubmit:function(e){h(s.f(e,E))}}),k=y&&i.a.createElement("p",{className:"form__error"},y.replace(/_/g," ")+" :(")||null,N=!Object.keys(w.errors).length<=0;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"form"},k,_?i.a.createElement("div",null,i.a.createElement("p",{style:{color:"wheat",marginBottom:"1rem"}},"Signing in..."),i.a.createElement(o.a,null)):i.a.createElement("form",{className:"form__form",onSubmit:w.handleSubmit},i.a.createElement(m.a,{editing:!0,formik:w,identity:"email",type:"email",ref:v},"Email"),i.a.createElement(m.a,{editing:!0,formik:w,identity:"password",type:"password"},"Password"),i.a.createElement("button",{disabled:N,type:"submit",className:"button--success form__submit"},"Submit")),_?null:i.a.createElement(l.b,{className:"link--to",to:"/signup"},"Create account")),g?i.a.createElement(u.a,{closeAlert:O},i.a.createElement(b.a,{acknowledgeAlert:O},j)):null)}},98:function(e,t,a){},99:function(e,t,a){}}]);
//# sourceMappingURL=7.97553221.chunk.js.map