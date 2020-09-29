(this["webpackJsonpneeds-and-deeds"]=this["webpackJsonpneeds-and-deeds"]||[]).push([[0],{28:function(e,a,t){},40:function(e,a,t){e.exports=t(68)},45:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(38),c=t.n(r),o=(t(45),t(25),t(26),t(28),t(15)),m=t(5),s=t(14),i=t.n(s),u=t(19),E=t(17),p=t(13),d=t.n(p),h=t(69),f=t(3),N=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.person.personName),l.a.createElement("td",null,e.person.personAddress),l.a.createElement("td",null,e.person.personNeed),l.a.createElement("td",null,e.person.personDescription),l.a.createElement("td",null,e.person.personDate),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/delete/"+e.person._id},l.a.createElement(f.d,null))))},b=function(){var e=Object(n.useState)({lists:[]}),a=Object(E.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("http://localhost:4000/all_person/");case 2:a=e.sent,r({lists:a.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",{className:"list"},l.a.createElement("div",{className:"list-img"}),l.a.createElement("div",{className:"list-blurb"},l.a.createElement("h2",null,"Needs & Deeds"),l.a.createElement("p",null,"This is the current list of needs in the community. Someone has submitted a request for help."),l.a.createElement("p",null,"Every ",l.a.createElement("b",null,l.a.createElement("i",null,"need")),"  is is waiting to be claimed."),l.a.createElement("p",null,"If you would like to perform a ",l.a.createElement("b",null,l.a.createElement("i",null,"deed")),', click the "Claim Need" mail icon to access the contact information.'),l.a.createElement("h3",null,"List of Needs"),l.a.createElement("p",{id:"table-hint"},"Scroll right to view contact info.")),l.a.createElement("div",{id:"table-div"},l.a.createElement(h.a,{striped:!0,style:{}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Need"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Help needed by (date)"),l.a.createElement("th",null,"Claim Need"))),l.a.createElement("tbody",null,t.lists.map((function(e,a){return l.a.createElement(N,{person:e,key:a})}))))))},v=t(16),y=t(11),g=t(70),w=t(71),O=t(72),D=t(73),x=t(74),j=t(75),C=function(e){var a=Object(n.useState)({personName:"",personEmail:"",personAddress:"",personNeed:"",personPhoneNumber:"",personVerification:!1}),t=Object(E.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var a=Object(u.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d()("http://localhost:4000/all_person/".concat(e.match.params.id));case 2:t=a.sent,c(Object(y.a)({},t.data));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e.match.params.id]);var o=function(e){c(Object(y.a)(Object(y.a)({},r),{},Object(v.a)({},e.target.name,e.target.value))),console.log(r)};return l.a.createElement("div",{className:"edit",style:{}},l.a.createElement("div",{className:"edit-img"}),l.a.createElement("h3",null,l.a.createElement(f.f,null)," Edit Name"),l.a.createElement(g.a,{className:"edit-form",onSubmit:function(a){a.preventDefault(),d.a.post("http://localhost:4000/all_person/update/".concat(e.match.params.id),r).then((function(e){return console.log(e.data)})),e.history.push("/")}},l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,null,l.a.createElement(D.a,null,l.a.createElement(f.e,null),"  Name "),l.a.createElement(x.a,{type:"text",name:"personName",className:"form-control",value:r.personName,onChange:o}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,null,l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Email "),l.a.createElement(x.a,{type:"text",name:"personEmail",className:"form-control",value:r.personEmail,onChange:o}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,null,l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Address "),l.a.createElement(x.a,{type:"text",name:"personAddress",className:"form-control",value:r.personAddress,onChange:o}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Need help with "),l.a.createElement(x.a,{type:"text",name:"personNeed",className:"form-control",value:r.personNeed,onChange:o})),l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Number to contact you "),l.a.createElement(x.a,{type:"number",name:"personPhoneNumber",className:"form-control",value:r.personPhoneNumber,onChange:o}))),l.a.createElement(w.a,{check:!0,row:!0},l.a.createElement(O.a,null,l.a.createElement(D.a,{check:!0},l.a.createElement(x.a,{type:"checkbox",name:"personVerification",defaultChecked:!!r.personVerification,value:r.personVerification?Boolean(!0):Boolean(!1),onChange:o,required:!0}),r.personVerification?"Data is verified":"Data isn't verified"))),l.a.createElement(j.a,{color:"primary"},l.a.createElement(f.c,null)," Verified Data")))},k=function(e){var a=Object(n.useState)({personName:"",personEmail:"",personAddress:"",personNeed:"",personPhoneNumber:"",personDate:"",personDescription:""}),t=Object(E.a)(a,2),r=t[0],c=t[1],o=function(e){c(Object(y.a)(Object(y.a)({},r),{},Object(v.a)({},e.target.name,e.target.value)))},m=function(e){return console.log("person:",e.personEmail),/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.personEmail)?"Valid email entered!":"Please enter a valid email"};return l.a.createElement("div",{className:"create",style:{}},l.a.createElement("div",{className:"create-img"}),l.a.createElement("h3",null,l.a.createElement(f.f,null)," Enter Details About Your Need"),l.a.createElement("p",null,"Please fill out form with your details to submit a ",l.a.createElement("b",null,"need.")),l.a.createElement(g.a,{className:"create-form",onSubmit:function(a){a.preventDefault(),d.a.post("http://localhost:4000/all_person/add",r).then((function(a){c({personName:"",personEmail:"",personAddress:"",personNeed:"",personPhoneNumber:"",personDate:"",personDescription:""}),console.log(a.data),e.history.push("/")}))}},l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.e,null)," Name "),l.a.createElement(x.a,{type:"text",name:"personName",className:"form-control",value:r.personName,onChange:o}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Email "),l.a.createElement(x.a,{type:"text",name:"personEmail",className:"form-control",value:r.personEmail,onChange:o}),(r.email,m(r))),l.a.createElement("br",null),l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Number to contact you"),l.a.createElement(x.a,{type:"text",placeholder:"Enter contact phone number",name:"personPhoneNumber",className:"form-control",value:r.personPhoneNumber,onChange:o}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," City/Town "),l.a.createElement(x.a,{type:"text",name:"personAddress",className:"form-control",value:r.personAddress,onChange:o})),l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Help needed by (date) "),l.a.createElement(x.a,{type:"text",placeholder:"MM/DD/YYYY",name:"personDate",className:"form-control",value:r.personDate,onChange:o}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Need help with "),l.a.createElement(x.a,{type:"text",name:"personNeed",className:"category",value:r.personNeed,onChange:o}),l.a.createElement("p",null,"Examples: Yard work, Housework, Schoolwork, Other"))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Description of Need "),l.a.createElement(x.a,{type:"text",name:"personDescription",className:"form-control",value:r.personDescription,onChange:o}))),l.a.createElement(j.a,{color:"primary"},l.a.createElement(f.c,null)," Submit")))},A=function(e){var a=Object(n.useState)({personName:"",personEmail:"",personAddress:"",personNeed:"",personPhoneNumber:"",personDescription:"",personHelperEmail:"",personValidEmail:!1}),t=Object(E.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var a=Object(u.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d()("http://localhost:4000/all_person/".concat(e.match.params.id));case 2:t=a.sent,c(Object(y.a)({},t.data));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e.match.params.id]);return l.a.createElement("div",{className:"delete",style:{}},l.a.createElement("div",{className:"delete-img"}),l.a.createElement("h3",null,"Claim Need"),l.a.createElement("p",null,"If you would like to offer to fulfill this need, please contact this person directly."),l.a.createElement(g.a,{className:"delete-form",onSubmit:function(a){a.preventDefault(),d.a.delete("http://localhost:4000/all_person/delete/".concat(e.match.params.id),r).then((function(a){e.history.push("/"),console.log(a.data)}))}},l.a.createElement("div",{className:"claim"},l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.e,null)," Name"," "),l.a.createElement(x.a,{readOnly:!0,type:"text",name:"personName",className:"form-control",value:r.personName}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Email"," "),l.a.createElement(x.a,{readOnly:!0,type:"text",name:"personEmail",className:"form-control",value:r.personEmail}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," City/Town"," "),l.a.createElement(x.a,{readOnly:!0,type:"text",name:"personAddress",className:"form-control",value:r.personAddress})),l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Help needed by (date)"," "),l.a.createElement(x.a,{readOnly:!0,type:"text",name:"personDate",className:"form-control",value:r.personDate}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Need help with"," "),l.a.createElement(x.a,{readOnly:!0,type:"text",name:"personNeed",className:"form-control",value:r.personNeed})),l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Contact Number"," "),l.a.createElement(x.a,{readOnly:!0,type:"text",name:"personPhoneNumber",className:"form-control",value:r.personPhoneNumber}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Description of Need"," "),l.a.createElement(x.a,{readOnly:!0,type:"text",name:"personDescription",className:"form-control",value:r.personDescription}))),l.a.createElement(w.a,{row:!0},l.a.createElement(O.a,{md:6},l.a.createElement(D.a,null,l.a.createElement(f.b,null)," Enter Your Email"," "),l.a.createElement(x.a,{type:"email",name:"personHelperEmail",value:r.personHelperEmail,onChange:function(e){var a=e.target,t=a.name,n=a.value,l=Object(y.a)(Object(y.a)({},r),{},Object(v.a)({},t,n));c(l),console.log(r),function(e){console.log("email:",e.personHelperEmail);var a=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.personHelperEmail);c(Object(y.a)(Object(y.a)({},e),{},{personValidEmail:a}))}(l)},required:!0}),r.personValidEmail?"Email validated":"Please enter a valid email!"))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("i",null,'*By agreeing to "Claim Deed" you are agreeing to:'),l.a.createElement("ul",null,l.a.createElement("li",null,"-contact this person"),l.a.createElement("li",null,"-offer to ",l.a.createElement("u",null,l.a.createElement("b",null,"voluntarily"))," fulfill the need"))),l.a.createElement(j.a,{color:"danger",disabled:!r.personValidEmail},l.a.createElement(f.a,null)," Claim Deed"))))},S=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(o.b,{to:"/",className:"brand-logo"},"Needs & Deeds"),l.a.createElement("ul",{id:"large-nav",className:"right"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(o.b,{to:"/",className:""},"View Local Needs")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(o.b,{to:"/create",className:"nav-link"}," Submit a Need")))),l.a.createElement("div",{id:"small-div"},l.a.createElement("ul",{id:"small-nav"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(o.b,{to:"/",className:""},"View Local Needs")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(o.b,{to:"/create",className:"nav-link"}," Submit a Need"))))),l.a.createElement(m.a,{path:"/",exact:!0,component:b}),l.a.createElement(m.a,{path:"/edit/:id",component:C}),l.a.createElement(m.a,{path:"/create",component:k}),l.a.createElement(m.a,{path:"/delete/:id",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.0348ab13.chunk.js.map