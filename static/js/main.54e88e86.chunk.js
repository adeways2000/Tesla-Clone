(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{36:function(n,e,t){},37:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var r,i,c,o,a,s,l,d=t(0),j=t.n(d),x=t(13),b=t.n(x),h=(t(36),t.p,t(17)),g=Object(h.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),p=function(n){return n.car.cars},O=g.reducer,u=(t(37),t(5)),f=t(7),m=t(6),v=t(29),w=t.n(v),y=t(30),k=t.n(y),T=t(16),B=t(1);var I,M,S,C,E,D,N,z=function(){var n=Object(d.useState)(!1),e=Object(f.a)(n,2),t=e[0],r=e[1],i=Object(T.b)(p);return Object(B.jsxs)(A,{children:[Object(B.jsx)("a",{children:Object(B.jsx)("img",{src:"/images/logo.svg"})}),Object(B.jsx)(L,{children:i&&i.map((function(n,e){return Object(B.jsx)("a",{href:"#",children:n},e)}))}),Object(B.jsxs)(R,{children:[Object(B.jsx)("a",{href:"#",children:"Shop"}),Object(B.jsx)("a",{href:"#",children:"Tesla Account"}),Object(B.jsx)(X,{onClick:function(){return r(!0)}})]}),Object(B.jsxs)(P,{show:t,children:[Object(B.jsx)(W,{children:Object(B.jsx)(J,{onClick:function(){return r(!1)}})}),i&&i.map((function(n,e){return Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:n})},e)})),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Existing Inventory "})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Used Inventory "})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Trade-in "})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Cybertruck "})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Roadaster"})})]})]})},A=m.a.div(r||(r=Object(u.a)(["\n    min-height: 60px;\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n\n"]))),L=m.a.div(i||(i=Object(u.a)(["\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    \n    p {\n        font-weight: 600;\n        text transform: uppercase;\n        padding: 0 10px;\n        flex-wrap: nowrap;\n\n    }\n\n    a   {\n        font-weight: 600;\n        text transform: uppercase;\n        padding: 0 10px;\n        flex-wrap: nowrap;\n\n    }\n    @media (max-width:768;) {\n        display:none;\n    }\n\n"]))),R=m.a.div(c||(c=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    a {\n        font-weight: 600;\n        text transform: uppercase;\n        margin-right: 10px;\n    }\n\n"]))),X=Object(m.a)(w.a)(o||(o=Object(u.a)(["\n    cursor:pointer;\n\n"]))),P=m.a.div(a||(a=Object(u.a)(["\n    position: fixed; \n    top: 0;\n    bottom: 0;\n    right: 0;\n    background: white;\n    width: 300px;\n    z-index: 16;\n    list-style: none;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    text-align: start;\n    transform: ",";\n    transition: transform 0.2s; \n    li {\n        padding: 15px 0;\n        border-bottom: 1px solid rgba (0, 0, 0, .2);\n\n        a {\n            font-weight: 600;\n        }\n\n    }\n\n"])),(function(n){return n.show?"translateX(0)":"translateX(100%)"})),J=Object(m.a)(k.a)(s||(s=Object(u.a)(["\n    cursor: pointer;\n\n\n"]))),W=m.a.div(l||(l=Object(u.a)(["\n    display: flex;\n    justify-content: flex-end;\n"]))),Y=t(22),U=t.n(Y);var $,q=function(n){var e=n.title,t=n.description,r=n.leftBtnText,i=n.rightBtnText,c=n.backgroundImg;return Object(B.jsxs)(F,{bgImage:c,children:[Object(B.jsx)(U.a,{bottom:!0,children:Object(B.jsxs)(G,{children:[Object(B.jsxs)("h1",{children:[e," "]}),Object(B.jsx)("p",{children:t})]})}),Object(B.jsx)(U.a,{bottom:!0,children:Object(B.jsxs)(Z,{children:[Object(B.jsxs)(H,{children:[Object(B.jsx)(K,{children:r}),i&&Object(B.jsx)(Q,{children:i})]}),Object(B.jsx)(V,{src:"/images/down-arrow.svg"})]})})]})},F=m.a.div(I||(I=Object(u.a)(["\n   \n    width:100vw;\n    height:100vh;\n    background-size:cover;\n    background-position: center;\n    background-repeat:no-repeat;\n    background-image: url('/images/model-s.jpg');\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: "," \n"])),(function(n){return'url("/images/'.concat(n.bgImage,'")')})),G=m.a.div(M||(M=Object(u.a)(["\n    padding-top: 15vh;\n    text-align: center;\n\n\n"]))),H=m.a.div(S||(S=Object(u.a)(["\n    display: flex;\n    margin-bottom: 30px;\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n\n\n"]))),K=m.a.div(C||(C=Object(u.a)(["\n    background-color: rgba(23, 26, 32, 0.8);\n    height: 40px;\n    width: 256px;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 100px;\n    opacity: 0.85;\n    text-transform: uppercase;\n    font-size: 12px;\n    cursor: pointer;\n    margin: 8px;\n\n"]))),Q=Object(m.a)(K)(E||(E=Object(u.a)(["\n    background-color: white;\n    opacity: 0.65;\n    color: black;\n"]))),V=m.a.img(D||(D=Object(u.a)(["\n    height: 40px;\n    overflow-x:hidden;\n    animation: animateDown infinite 1.5s;\n\n"]))),Z=m.a.div(N||(N=Object(u.a)(["\n    \n\n"])));var _=function(){return Object(B.jsxs)(nn,{children:[Object(B.jsx)(q,{title:"Model S",description:"Order Online for Touchless Delivery",backgroundImg:"model-s.jpg",leftBtnText:"Custom order",rightBtnText:"Existing Inventory"}),Object(B.jsx)(q,{title:"Model Y",description:"Order Online for Touchless Delivery",backgroundImg:"model-y.jpg",leftBtnText:"Custom order",rightBtnText:"Existing Inventory"}),Object(B.jsx)(q,{title:"Model 3",description:"Order Online for Touchless Delivery",backgroundImg:"model-3.jpg",leftBtnText:"Custom order",rightBtnText:"Existing Inventory"}),Object(B.jsx)(q,{title:"Model X",description:"Order Online for Touchless Delivery",backgroundImg:"model-x.jpg",leftBtnText:"Custom order",rightBtnText:"Existing Inventory"}),Object(B.jsx)(q,{title:"Low Cost Solar-Panels in America",description:"Money-back guarantee",backgroundImg:"solar-panel.jpg",leftBtnText:"Order Now",rightBtnText:"Learn More"}),Object(B.jsx)(q,{title:"Solar for new Roofs",description:"Solar Roof Costs Less Than a New Roof Plus Solar Panels",backgroundImg:"solar-roof.jpg",leftBtnText:"Order Now",rightBtnText:"Learn More"}),Object(B.jsx)(q,{title:"Accessories",backgroundImg:"accessories.jpg",leftBtnText:"Shop Now"})]})},nn=m.a.div($||($=Object(u.a)(["\n    height:100vh;\n    \n"])));var en=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(z,{}),Object(B.jsx)(_,{})]})},tn=Object(h.a)({reducer:{car:O}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(Object(B.jsx)(j.a.StrictMode,{children:Object(B.jsx)(T.a,{store:tn,children:Object(B.jsx)(en,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.54e88e86.chunk.js.map