(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(t,n,e){t.exports=e(90)},90:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),c=e(39),o=e.n(c),i=e(5),l=e(13),s=e(6),u=e(2),m=e(3),p=e(1),d="#282CD7",f="#D7282D",b="#0b2545",g="#9728D7",x="#fff",h="#ef5350",v="#000",j="#feca1b",E="#3761a8",O="#40cd28",w="#f2f6f8",y="#5d5e5f",k="#000000",N="#999999",C="375px",z="425px",S="768px",_="1024px",T="1440px",I="2560px",L={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(C,")"),mobileL:"(min-width: ".concat(z,")"),tablet:"(min-width: ".concat(S,")"),laptop:"(min-width: ".concat(_,")"),laptopL:"(min-width: ".concat(T,")"),desktop:"(min-width: ".concat(I,")"),desktopL:"(min-width: ".concat(I,")")};function M(){var t=Object(m.a)(["\n\tbackground-color: ",";\n\t",";\n"]);return M=function(){return t},t}function P(){var t=Object(m.a)(["\n\tpadding: 1rem 0rem;\n\tbackground-color: ",";\n\t",";\n\n\t.wrapper {\n\t\tdisplay: flex;\n\t}\n\n\ta {\n\t\tcolor: ",";\n\t}\n\n\t.brand {\n\t\tfont-size: ",";\n\t\tfont-weight: bold;\n\t\ttext-shadow: "," 2px 3px 0px;\n\t\tborder-radius: 4px;\n\t\tpadding: 0 10px 0 0;\n\t\theight: 30px;\n\t\tline-height: 30px;\n\t\twidth: 33%;\n\t}\n\n\t.search-wrapper {\n\t\twidth: 67%;\n\t\tposition: relative;\n\t}\n\n\t.desktop {\n\t\tdisplay: none;\n\n\t\t@media "," {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t.mobile {\n\t\tdisplay: block;\n\n\t\t.wrapper {\n\t\t\tjustify-content: space-between;\n\t\t}\n\n\t\t.search-wrapper {\n\t\t\twidth: 100%;\n\t\t\tpadding: 0 16px;\n\t\t\tmargin-top: 8px;\n\t\t}\n\n\t\t@media "," {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"]);return P=function(){return t},t}var D=u.c.header(P(),function(t){return t.theme.colors.primary},Object(p.d)("background-color 0.2s ease-out"),j,Object(p.b)("22px"),E,L.tablet,L.tablet),B=u.c.div(M(),function(t){return Object(p.c)(t.theme.colors.primary,.4)},Object(p.d)("background-color 0.2s ease-out")),F=e(18),$=e(15),U=e.n($),q=e(19);function H(t,n){var e=Object(a.useState)(function(){if("undefined"!==typeof window){var e=window.localStorage.getItem(t);if(null!==e)return JSON.parse(e)}return n}),r=Object(i.a)(e,2),c=r[0],o=r[1];return Object(a.useEffect)(function(){window.localStorage.setItem(t,JSON.stringify(c))},[c]),[c,o]}var J=e(24),R=e.n(J),Y="https://pokeapi.co/api/v2/";var A=function(t){return R.a.get("".concat(Y).concat(t))};function K(t){return R.a.get(t)}var W=Object(a.createContext)(),Q=function(t){var n=t.theme,e=(t.setTheme,t.children),c=Object(a.useState)(!1),o=Object(i.a)(c,2),l=o[0],s=o[1],u=H("data",[]),m=Object(i.a)(u,2),p=m[0],d=m[1],f=H("selected",null),b=Object(i.a)(f,2),g=b[0],x=b[1],h=H("message",""),v=Object(i.a)(h,2),j=v[0],E=v[1],O=H("cart",[]),w=Object(i.a)(O,2),y=w[0],k=w[1],N=Object(a.useState)(!1),C=Object(i.a)(N,2),z=C[0],S=C[1],_=H("total",0),T=Object(i.a)(_,2),I=T[0],L=T[1],M=Object(a.useState)(!1),P=Object(i.a)(M,2),D=P[0],B=P[1],$=Object(a.useState)(!1),J=Object(i.a)($,2),R=J[0],Y=J[1],K=n.name,Q={isLoading:l,shopData:p,selected:g,message:j,cart:y,displayToast:z,total:I,checkout:D,resetCart:R},V={setIsLoading:s,setShopData:d,setSelectedPokemon:x,setMessage:E,setAddToCart:k,setDisplayToast:S,setTotal:L,setCheckout:B,setResetCart:Y},G=Object(a.useCallback)(function(){var t=Object(q.a)(U.a.mark(function t(n){var e;return U.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.prev=1,t.next=4,A("type/".concat(n));case 4:e=t.sent,d(e.data.pokemon),E("".concat(n," Pokem\xf3n shop")),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),E("Error on get Pokem\xf3n."),d([]),console.error(t.t0);case 14:s(!1);case 15:case"end":return t.stop()}},t,null,[[1,9]])}));return function(n){return t.apply(this,arguments)}}(),[]),X=Object(a.useCallback)(function(){return y.reduce(function(t,n){return t+n.base_experience},0)},[y]);return Object(a.useEffect)(function(){p&&p.length>0&&E("".concat(K," Pokem\xf3n shop"))},[p,K]),Object(a.useEffect)(function(){G(K)},[K]),Object(a.useEffect)(function(){var t=X();L(t)},[y]),Object(a.useEffect)(function(){D&&(k([]),L(0),Y(!0),Y(!1),x(null))},[D]),r.a.createElement(W.Provider,{value:Object(F.a)({},Q,{actions:V})},e)},V=e(9),G=e(7);function X(){var t=Object(m.a)(["\n\tfont-size: ",";\n\tcolor: ",";\n\n\tinput {\n\t\tbackground: ",";\n\t\tborder: none;\n\t\tpadding: 0.4rem;\n\t\twidth: 100%;\n\t\tfont-size: ",";\n\t\tfont-weight: normal;\n\t\tborder-radius: 8px;\n\n\t\t&:focus,\n\t\t&:active {\n\t\t\tborder-color: ",";\n\t\t}\n\t}\n\n\t.icon__wrapper {\n\t\tposition: relative;\n\t\tcolor: ",";\n\t\tfloat: right;\n\t\tmargin: -27px 16px 0 0;\n\t\tcolor: ",";\n\t\t",";\n\n\t\t&:hover {\n\t\t\tcolor: ",";\n\t\t}\n\n\t\tsvg {\n\t\t\twidth: 0.9rem;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n"]);return X=function(){return t},t}var Z=u.c.div(X(),Object(p.b)("12px"),N,x,Object(p.b)("14px"),x,N,N,Object(p.d)("color 0.2s ease-out"),k);var tt=function(t){var n=t.name,e=t.placeholder,c=t.onSearch,o=Object(a.useRef)(),i=Object(a.useCallback)(function(t){"Enter"===t.key&&(console.log(t),c(t.target.value))},[]);return r.a.createElement(Z,null,r.a.createElement("input",{ref:o,type:"text",className:"form-control",name:n,placeholder:e,autoComplete:"off",onKeyDown:function(t){return i(t)}}),r.a.createElement("span",{className:"icon__wrapper",onClick:function(){return c(o.current.value)}},r.a.createElement(V.a,{className:"end-xs",icon:G.g,size:"2x"})))};function nt(){var t=Object(m.a)(["\n\t",";\n\tpadding: 30px 0;\n\tmargin-bottom: 60px;\n\n\t.loading-content__wrapper {\n\t\tp {\n\t\t\tmargin-bottom: 16px;\n\t\t}\n\t}\n"]);return nt=function(){return t},t}var et=u.c.div(nt(),"\n  display: flex;\n\tjustify-content: center;\n\ttext-align: center;\n\talign-items: center;\n  "),at=function(t){var n=t.isLoading,e=t.loadingText,a=t.children;return n?r.a.createElement(et,null,r.a.createElement("div",{className:"loading-content__wrapper"},r.a.createElement("p",null,e),r.a.createElement(V.a,{icon:G.i,size:"3x",spin:!0}))):a};function rt(){var t=Object(m.a)(["\n\tanimation-duration: 1s;\n\tanimation-fill-mode: forwards;\n\tanimation-iteration-count: infinite;\n\tanimation-name: placeHolderShimmer;\n\tanimation-timing-function: linear;\n\tbackground: #f6f7f8;\n\tbackground: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n\tbackground-size: 1000px 104px;\n\theight: 200px;\n\tposition: relative;\n\toverflow: hidden;\n"]);return rt=function(){return t},t}function ct(){var t=Object(m.a)(["\n\t","\n\tposition: relative;\n\theight: 100%;\n\n\timg {\n\t\tmargin: 0;\n\t\theight: 100%;\n\t\twidth: 100%;\n\n\t\tobject-fit: contain;\n\n\t\t&.hide {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t&.show {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n"]);return ct=function(){return t},t}var ot=u.c.figure(ct(),"\n  @keyframes placeHolderShimmer{\n    0%{\n      background-position: -468px 0\n    }\n    100%{\n      background-position: 468px 0\n    }\n  }\n"),it=u.c.div(rt());var lt=function(t){var n=t.src,e=t.alt,c=t.width,o=void 0===c?475:c,l=t.height,s=void 0===l?475:l,u=Object(a.useState)(!1),m=Object(i.a)(u,2),p=m[0],d=m[1];return r.a.createElement(ot,null,r.a.createElement("img",{src:n,alt:e,width:o,height:s,onLoad:function(){return d(!0)},className:p?"show":"hide"}),!p&&r.a.createElement(it,null))};function st(t){return t&&t.sprites&&(t.sprites.other["official-artwork"].front_default||t.sprites.front_default)}function ut(){var t=Object(m.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n\n\tp {\n\t\tfont-size: ",";\n\t\ttext-transform: capitalize;\n\t}\n\n\tfigure {\n\t\tmax-width: 80px;\n\t}\n"]);return ut=function(){return t},t}function mt(){var t=Object(m.a)(["\n\t",";\n\n\tposition: absolute;\n\n\twidth: calc(100% - 32px);\n\tdisplay: flex;\n\tmargin-top: -7px;\n\tpadding: 8px 16px;\n\n\tbackground-color: ",";\n\n\tanimation: fadeIn 0.3s;\n\n\t@media "," {\n\t\twidth: 100%;\n\t}\n"]);return mt=function(){return t},t}var pt=u.c.section(mt(),"\n\t@keyframes fadeIn {\n\t\tfrom {\n\t\t\topacity: 0;\n\t\t}\n\t\tto {\n\t\t\topacity: 1;\n\t\t}\n\t}\n",x,L.tablet),dt=u.c.div(ut(),Object(p.b)("14px"));var ft=function(){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),e=n[0],c=n[1],o=Object(a.useState)(null),l=Object(i.a)(o,2),u=l[0],m=l[1],p=Object(a.useState)(null),d=Object(i.a)(p,2),f=d[0],b=d[1],g=Object(a.useState)(!1),x=Object(i.a)(g,2),h=x[0],v=x[1],j=Object(a.useContext)(W).actions.setSelectedPokemon,E=Object(s.e)(),O=Object(a.useCallback)(function(){var t=Object(q.a)(U.a.mark(function t(n){var e;return U.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),t.prev=1,t.next=4,A("pokemon/".concat(n));case 4:e=t.sent,b(e.data),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),b(void 0),console.error(t.t0);case 12:c(!1);case 13:case"end":return t.stop()}},t,null,[[1,8]])}));return function(n){return t.apply(this,arguments)}}(),[]),w=Object(a.useCallback)(function(t){m(t),O(t.toLowerCase())},[]),y=Object(a.useMemo)(function(){return st(f)},[f]),k=Object(a.useCallback)(function(t){j(t),E.push("/profile/".concat(t.name))},[]);return Object(a.useEffect)(function(){u&&v(!0)},[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(tt,{name:"search-input",placeholder:"Search for your favorite pokemon",onSearch:function(t){return w(t)}}),h&&r.a.createElement(pt,{style:{justifyContent:e?"center":"flex-start"},onClick:function(){v(!1),m("")}},r.a.createElement(at,{isLoading:e,loadingText:"Searching for ".concat(u)},f&&r.a.createElement(dt,{onClick:function(){return k(Object(F.a)({},f,{image:y}))}},r.a.createElement(lt,{src:y,alt:f.name}),r.a.createElement("p",null,f.name)),void 0===f&&r.a.createElement("p",null,u," not found."))))},bt=e(43);function gt(){var t=Object(m.a)(["\n\tborder: none;\n\tbackground-color: ",";\n\tcolor: ",";\n\tpadding: 1.125rem 0;\n\twidth: 100%;\n\tfont-size: ",";\n\tmargin-top: 16px;\n\tcursor: pointer;\n\t",";\n\tbox-shadow: "," 0px 2px 6px;\n\n\tsvg {\n\t\tmargin-right: 8px;\n\t}\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n"]);return gt=function(){return t},t}var xt=u.c.button(gt(),O,x,Object(p.b)("20px"),Object(p.d)("background-color 0.2s ease-out"),Object(p.c)(v,.2),Object(p.a)(.2,O));var ht=function(t){var n=t.icon,e=t.text,a=t.action;return r.a.createElement(xt,{onClick:a},r.a.createElement(V.a,{icon:n})," ",e)};function vt(){var t=Object(m.a)(["\n\tbackground-color: ",";\n\twidth: calc(100% + 20px);\n\tmargin: 0px -12px;\n\tpadding: 12px 21px 12px 16px;\n\n\t> div {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n"]);return vt=function(){return t},t}function jt(){var t=Object(m.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin-bottom: 6px;\n\tgap: 1rem;\n\tfont-size: 90%;\n\tmargin: 0 20px 8px 0;\n\tpadding: 0 0 8px;\n\tborder-bottom: 1px solid ",";\n\n\t&:last-of-type {\n\t\tborder: none;\n\t}\n\n\tfigure {\n\t\tmargin: 0;\n\t\tmax-width: 70px;\n\t}\n\n\t.text {\n\t\twidth: 100%;\n\n\t\t.space-between {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\n\t\t.title {\n\t\t\tcolor: ",";\n\t\t}\n\n\t\t.quantity,\n\t\t.price {\n\t\t\tcolor: ",";\n\t\t}\n\n\t\t.price {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 120%;\n\t\t}\n\t}\n"]);return jt=function(){return t},t}var Et=u.c.div(jt(),Object(p.c)(N,.3),k,N),Ot=u.c.section(vt(),w);var wt=function(t){t.size;var n=t.list,e=t.title,c=t.price,o=t.image,i=t.total,l=Object(a.useContext)(W).actions.setCheckout,s=Object(a.useMemo)(function(){return n.map(function(t){return r.a.createElement(Et,{key:t.item[e]},r.a.createElement(lt,{src:t.item[o],alt:t.item[e]}),r.a.createElement("div",{className:"text"},r.a.createElement("h3",{className:"title"},t.item[e].toUpperCase()),r.a.createElement("div",{className:"space-between"},r.a.createElement("span",{className:"quantity"},"Quantidade: ",t.quantity),r.a.createElement("strong",{className:"price"},"$",t.item[c]))))})},[n]);return n&&n.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(bt.Scrollbars,{style:{height:"calc(100% - 120px)"}},s),r.a.createElement(Ot,null,r.a.createElement("div",null,r.a.createElement("span",null,"Total:")," ",r.a.createElement("strong",null,"$",i)),r.a.createElement(ht,{text:"Checkout",icon:G.c,action:function(){return l(!0)}})))},yt=e(23);function kt(t){var n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth"})}function Nt(){var t=Object(m.a)(["\n\t","\n\n\tposition: absolute;\n\tright: 0;\n\ttop: 30px;\n\theight: 300px;\n\twidth: 280px;\n\tbackground-color: ",";\n\tcolor: ",";\n\tpadding: 20px 8px 0 12px;\n\tz-index: 100;\n\tbox-shadow: "," 0px 2px 6px;\n\tanimation: fadeIn 0.3s;\n\n\t@media "," {\n\t\twidth: 400px;\n\t}\n\n\t&.empty {\n\t\tfont-size: ",";\n\t\ttext-align: center;\n\t\theight: 90px;\n\t\tpadding: 30px 20px;\n\t}\n\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: -14px;\n\t\tright: 10px;\n\n\t\t@media "," {\n\t\t\tright: 36px;\n\t\t}\n\n\t\t","\n\t}\n\n\t& > div {\n\t\theight: 100%;\n\t}\n"]);return Nt=function(){return t},t}function Ct(){var t=Object(m.a)(["\n\tdisplay: inline-flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tmargin-left: 10px;\n\twidth: 60px;\n\theight: 100%;\n\tborder: none;\n\tbackground-color: transparent;\n\tcursor: pointer;\n\tborder-radius: 8px;\n\t",";\n\n\t@media "," {\n\t\twidth: 100px;\n\t}\n\n\t&.hover {\n\t\tbackground-color: ",";\n\n\t\tspan {\n\t\t\ttransform: scale(1.25);\n\t\t}\n\t}\n\n\tspan {\n\t\tfont-size: ",";\n\t\tcolor: ",";\n\t\t",";\n\t}\n\n\tsvg {\n\t\tcolor: ",";\n\t\tfont-size: ",";\n\t}\n"]);return Ct=function(){return t},t}function zt(){var t=Object(m.a)(["\n\tposition: relative;\n"]);return zt=function(){return t},t}var St=u.c.section(zt()),_t=u.c.button(Ct(),Object(p.d)("background-color 0.2s ease-out"),L.tablet,Object(p.c)(x,.2),Object(p.b)("14px"),x,Object(p.d)("transform 0.2s ease-out"),x,Object(p.b)("20px")),Tt=u.c.div(Nt(),"\n\t@keyframes fadeIn {\n\t\tfrom {\n\t\t\topacity: 0;\n\t\t}\n\t\tto {\n\t\t\topacity: 1;\n\t\t}\n\t}\n",x,k,Object(p.c)(v,.2),L.tablet,Object(p.b)("20px"),L.tablet,Object(p.e)({pointingDirection:"top",width:"25px",height:"15px",foregroundColor:x}));var It=function(t){var n=t.items,e=t.total,c=Object(a.useRef)(),o=Object(a.useState)(!1),l=Object(i.a)(o,2),s=l[0],u=l[1],m=Object(a.useState)([]),p=Object(i.a)(m,2),d=p[0],f=p[1],b=Object(a.useMemo)(function(){return!(n.length>0)},[n]),g=Object(a.useCallback)(function(){kt("header")},[]),x=function(t){c.current.contains(t.target)||u(!1)};return Object(a.useEffect)(function(){return document.addEventListener("mousedown",x),function(){document.removeEventListener("mousedown",x)}},[]),Object(a.useEffect)(function(){var t,e=(t="id",n.reduce(function(n,e){return void 0===e[t]?n:Object.assign(n,Object(yt.a)({},e[t],(n[e[t]]||[]).concat(e)))},{})),a=Object.values(e).map(function(t){return{item:t[0],quantity:t.length}});f(a)},[n]),Object(a.useEffect)(function(){u(!0),g("header")},[d]),r.a.createElement(St,{ref:c,onMouseOver:function(){return u(!0)},onMouseLeave:function(){return u(!1)}},r.a.createElement(_t,{className:s?"hover":""},r.a.createElement(V.a,{icon:G.h}),r.a.createElement("span",null,n.length)),s&&r.a.createElement(Tt,{className:b?"empty":""},b&&r.a.createElement("p",null,"Your shop cart is empty."),!b&&r.a.createElement(wt,{list:d,title:"name",price:"base_experience",image:"image",total:e})))};function Lt(){var t=Object(m.a)(["\n\t.flex {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: 0;\n\t\tflex-direction: column;\n\n\t\t@media "," {\n\t\t\tflex-direction: row;\n\t\t\tgap: 1rem;\n\t\t\tpadding: 1rem 0;\n\t\t}\n\n\t\tli {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\n\t.wrapper {\n\t\tpadding: 0;\n\n\t\t@media "," {\n\t\t\tpadding: 0 30px;\n\t\t}\n\t}\n\n\tbutton {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: flex-start;\n\t\tcolor: ",";\n\t\tborder: 0;\n\t\tborder-bottom: 1px solid ",";\n\t\tbackground-color: ",";\n\t\twidth: 100%;\n\t\tpadding: ",";\n\t\tfont-size: ",";\n\t\tcursor: pointer;\n\t\t",";\n\n\t\t@media "," {\n\t\t\tborder: 1px solid ",";\n\t\t\tjustify-content: center;\n\t\t}\n\n\t\tsvg {\n\t\t\tfont-size: ",";\n\t\t\tmargin-right: 10px;\n\t\t}\n\n\t\t&:hover {\n\t\t\tbackground-color: ",";\n\t\t\tcolor: ",";\n\t\t}\n\n\t\t&.active {\n\t\t\tcolor: ",";\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n"]);return Lt=function(){return t},t}var Mt=u.c.section(Lt(),L.tablet,L.tablet,function(t){return t.theme.colors.primary},function(t){return t.theme.colors.primary},x,Object(p.b)("16px"),Object(p.b)("16px"),Object(p.d)("background-color 0.3s ease-in"),L.tablet,function(t){return t.theme.colors.primary},Object(p.b)("20px"),function(t){return Object(p.c)(t.theme.colors.primary,.1)},x,x,function(t){return t.theme.colors.primary}),Pt={name:"electric",icon:G.f,colors:{primary:g}},Dt={name:"fire",icon:G.e,colors:{primary:f}},Bt={name:"water",icon:G.j,colors:{primary:d}},Ft={name:"ice",icon:G.d,colors:{primary:b}};var $t=function(t){var n=t.setTheme,e=t.theme,c=Object(a.useContext)(W),o=c.selected,i=c.actions.setSelectedPokemon,l=Object(s.e)(),u=Object(a.useMemo)(function(){return[Pt,Dt,Bt,Ft]},[Pt,Dt,Bt,Ft]),m=Object(a.useCallback)(function(t){n(t),i(null)},[]);return Object(a.useEffect)(function(){o||l.push("/")},[o]),r.a.createElement(Mt,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",{className:"flex"},u.map(function(t){return r.a.createElement("li",{className:"shop-item",key:t.name},r.a.createElement("button",{onClick:function(){return m(t)},className:e.name===t.name?"active":""},r.a.createElement(V.a,{icon:t.icon}),t.name))}))))},Ut=function(t){var n=t.pageTitle,e=t.setTheme,c=t.theme,o=Object(a.useContext)(W),i=o.cart,s=o.total;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{id:"header"},r.a.createElement("div",{className:"mobile"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"brand start-xs"},r.a.createElement(l.b,{to:"/"},n)),r.a.createElement(It,{items:i,total:s})),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement(ft,null))),r.a.createElement("div",{className:"desktop"},r.a.createElement("div",{className:"wrapper container-fluid"},r.a.createElement("div",{className:"brand start-xs"},r.a.createElement(l.b,{to:"/"},n)),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement(ft,null)),r.a.createElement(It,{items:i,total:s})))),r.a.createElement(B,null,r.a.createElement($t,{setTheme:e,theme:c})))};function qt(){var t=Object(m.a)(["\n\theight: 40px;\n\tline-height: 40px;\n\ttext-align: center;\n\tbackground-color: $black;\n\n\tp {\n\t\tfont-size: ",";\n\t}\n"]);return qt=function(){return t},t}var Ht=u.c.footer(qt(),Object(p.b)("12px"));var Jt=function(t){var n=t.text;return r.a.createElement(Ht,{id:"footer"},r.a.createElement("p",null,n))};function Rt(){var t=Object(m.a)(["\n\tfont-size: ",";\n\tcolor: ",";\n\tborder: none;\n\tborder-radius: 50%;\n\tbackground-color: ",";\n\tbox-shadow: "," 0px 2px 6px;\n\n\tdisplay: block;\n\twidth: 42px;\n\theight: 42px;\n\tcursor: pointer;\n\n\tposition: fixed;\n\tleft: calc(96% - 43px);\n\tbottom: 10%;\n\tz-index: 10;\n\n\t",";\n\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"]);return Rt=function(){return t},t}var Yt=u.c.button(Rt(),Object(p.b)("24px"),function(t){return t.theme.colors.primary},x,Object(p.c)(v,.2),Object(p.d)("color 0.2s ease-out"),function(t){return Object(p.a)(.2,t.theme.colors.primary)});var At=function(){var t=Object(a.useCallback)(function(){kt("header")},[]);return r.a.createElement(Yt,{onClick:function(){return t()}},r.a.createElement(V.a,{icon:G.b}))};function Kt(){var t=Object(m.a)(["\n\t",";\n\t","\n\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 0;\n\tz-index: 200;\n\n\tmargin: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\n\tanimation: fadeIn 0.3s;\n\tbackground-color: ",";\n\n\t.content {\n\t\tbackground-color: ",";\n\t\twidth: 600px;\n\t\theight: 50vh;\n\t\tmax-height: 400px;\n\t\tborder-radius: 4px;\n\t\tbox-shadow: "," 0px 2px 6px;\n\t\tmargin: 24px;\n\t}\n\n\t.modal-header {\n\t\tposition: relative;\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tcolor: ",";\n\t\tfont-size: ",";\n\n\t\tsvg {\n\t\t\tposition: absolute;\n\t\t\ttop: -3px;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n"]);return Kt=function(){return t},t}var Wt=u.c.div(Kt(),"\n  display: flex;\n\tjustify-content: center;\n\ttext-align: center;\n\talign-items: center;\n  ","\n\t@keyframes fadeIn {\n\t\tfrom {\n\t\t\topacity: 0;\n\t\t}\n\t\tto {\n\t\t\topacity: 1;\n\t\t}\n\t}\n",Object(p.c)(y,.7),x,Object(p.c)(v,.2),h,Object(p.b)("40px"));var Qt=function(t){var n=t.displayModal,e=void 0===n||n,a=t.setDisplayModal,c=t.children;return e&&r.a.createElement(Wt,null,r.a.createElement("div",{className:"content"},r.a.createElement("header",{className:"modal-header"},r.a.createElement(V.a,{icon:G.k,onClick:function(){return a(!1)}})),c))};function Vt(){var t=Object(m.a)(["\n\t",";\n\tflex-direction: column;\n\theight: 100%;\n\n\tp {\n\t\tfont-size: ",";\n\t\tcolor: ",";\n\n\t\tmargin: 0 0 16px;\n\t\tpadding: 0 30px;\n\n\t\t&.title {\n\t\t\tfont-size: ",";\n\t\t\tfont-weight: bold;\n\t\t\tcolor: ",";\n\t\t}\n\n\t\tstrong {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"]);return Vt=function(){return t},t}var Gt=u.c.div(Vt(),"\n  display: flex;\n\tjustify-content: center;\n\ttext-align: center;\n\talign-items: center;\n  ",Object(p.b)("18px"),N,Object(p.b)("22px"),k,k);var Xt=function(){var t=Object(a.useContext)(W),n=t.checkout,e=t.actions.setCheckout;return r.a.createElement(Qt,{displayModal:n,setDisplayModal:e},r.a.createElement(Gt,null,r.a.createElement("p",{className:"title"},"Hello there!"),r.a.createElement("p",null,"Thank you for purchasing our product. Your support and trust in us are much appreciated. For your next purchase, use coupon code:"," "),r.a.createElement("p",null,r.a.createElement("strong",null,"POKE30%")),r.a.createElement("p",null,"and get 30% discount on any Pokem\xf3n."),r.a.createElement("p",null,"Much love,"),r.a.createElement("p",null,r.a.createElement("strong",null,"PokeStore"))))};function Zt(){var t=Object(m.a)(["\n\t.home__icon {\n\t\tmargin-bottom: 30px;\n\t}\n\n\tp {\n\t\tfont-size: ",";\n\t}\n\n\t.btn {\n\t\tmargin-top: 50px;\n\t}\n"]);return Zt=function(){return t},t}var tn=u.c.section(Zt(),Object(p.b)("13px"));var nn=function(t){var n=t.name,e=t.pokemonUrl,c=Object(a.useState)(!0),o=Object(i.a)(c,2),l=o[0],u=o[1],m=Object(a.useState)({}),p=Object(i.a)(m,2),d=p[0],f=p[1],b=Object(s.e)(),g=Object(a.useContext)(W).actions,x=g.setSelectedPokemon,h=g.setMessage;Object(a.useEffect)(function(){function t(){return(t=Object(q.a)(U.a.mark(function t(n){var e;return U.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,K(n);case 4:e=t.sent,f(e.data),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),h("Error on get Pokem\xf3n details."),console.error(t.t0);case 12:u(!1);case 13:case"end":return t.stop()}},t,null,[[1,8]])}))).apply(this,arguments)}!function(n){t.apply(this,arguments)}(e)},[e]);var v=Object(a.useMemo)(function(){return st(d)},[d]),j=Object(a.useCallback)(function(t){x(t),b.push("/profile/".concat(t.name))},[]);return r.a.createElement("div",{className:"item",onClick:function(){return j(Object(F.a)({},d,{image:v}))}},r.a.createElement(at,{isLoading:l,loadingText:"Loading ".concat(n.toUpperCase())},r.a.createElement("div",{className:"wrap  img__wrapper"},r.a.createElement(lt,{src:v,alt:n})),r.a.createElement("div",{className:"text"},r.a.createElement("span",{className:"title"},n),r.a.createElement("span",{className:"price"},"$",d.base_experience))))};function en(){var t=Object(m.a)([" \n  ","\n\n\tmargin: 0 0 60px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3%;\n\n\t.page-title {\n    font-size: ",";\n    font-weight: 700;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin: 2rem 0 2rem;\n    text-transform: uppercase;\n\n    &:after {\n      content: '';\n      background-color: ",";\n      width: 100px;\n      height: 8px;\n      display: block;\n      margin-top: 4px;\n    }\n\t}\n\n\t.item {\n    ",";\n    flex-direction: column;\n    background-color: ",";\n\t\topacity: 1;\n\t\tanimation: fadeIn 0.3s;\n    width: 100%;\n    min-height: 200px;\n    margin-bottom: 14px;\n    box-shadow: "," 0px 2px 6px;\n    border-bottom: 2px solid ",";\n\n    @media "," {\n      width: 48%;\n      margin-bottom: 2%;\n    }\n\n    @media "," {\n      width: 31.3333333333%;\n    }\n\n\t\ta {\n\t\t\tcolor: ",";\n\t\t}\t\t\n\n\t\t.wrap {\n\t\t\ttext-align: center;\n\t\t\tposition: relative;\n\t\t\theight: 250px;\n\t\t\tcursor: pointer;\n\t\t\t",";\n\t\t}\n\t\t\n\t\t.img__wrapper {\t\t\t\n      ",";      \n\n\t\t\timg {\n        width: auto;\n        max-width: 250px;\n\t\t\t\tobject-fit: contain;\n        animation: fadeIn 0.3s;\n        ",";      \n\t\t\t}\n\t\t}\n\n\t\t.text {\n\t\t\tcursor: pointer;\n      display: flex;\n      justify-content: space-between;\n      width: 100%;\n\n      span {\n        display: block;\n        font-size: ",";\n        padding: 10px 12px;\n        margin: 0;\n        text-transform: capitalize;\n        font-weight: bold;\n\n        &:hover & {\n          color: ","\n        }\n\n        &.title {\n          text-align: left;\n        }\n\n        &.price {\n          text-align: right;\n        }\n      }\n\t\t}\n\n    &:hover {\n\t\t\ta {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\n      .title {\n        color: ",";        \n      }\n\n      .img__wrapper {\n        img {\n          transform: scale(1.14) translateY(7px);\n        }\n      }\n\t\t}\n\t}\n}\n"]);return en=function(){return t},t}var an=u.c.section(en(),"\n\t@keyframes fadeIn {\n\t\tfrom {\n\t\t\topacity: 0;\n\t\t}\n\t\tto {\n\t\t\topacity: 1;\n\t\t}\n\t}\n",Object(p.b)("24px"),function(t){return t.theme.colors.primary},"\n  display: flex;\n\tjustify-content: center;\n\ttext-align: center;\n\talign-items: center;\n  ",x,Object(p.c)(v,.2),function(t){return t.theme.colors.primary},L.tablet,L.laptop,x,Object(p.d)("background-color 0.2s ease-out"),"\n  display: flex;\n\tjustify-content: center;\n\ttext-align: center;\n\talign-items: center;\n  ",Object(p.d)(["transform 0.5s ease-out","opacity .3s ease-in"]),Object(p.b)("16px"),function(t){return t.theme.colors.primary},j,function(t){return t.theme.colors.primary});var rn=function(){var t=Object(a.useContext)(W),n=t.isLoading,e=t.shopData,c=t.message,o=t.actions.setSelectedPokemon;Object(a.useEffect)(function(){o("null")},[]);var i=Object(a.useCallback)(function(t,n){if(t&&t.length>0&&n)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"page-title"},n),t.map(function(t){return r.a.createElement(nn,{key:t.pokemon.name,name:t.pokemon.name,pokemonUrl:t.pokemon.url})}))},[]);return r.a.createElement("div",{className:"wrapper container-fluid"},r.a.createElement(at,{isLoading:n,loadingText:"Loading results"},r.a.createElement(an,{id:"results"},i(e,c))))};var cn=function(){return r.a.createElement(tn,{id:"home"},r.a.createElement("main",{className:"main-content"},r.a.createElement(rn,null)))},on=e(44);function ln(){var t=Object(m.a)(["\n\t",";\n\n\topacity: 1;\n\tmargin-bottom: 60px;\n\n\th1 {\n\t\tfont-size: ",";\n\t\tmargin: 0 0 2rem;\n\t}\n\n\ta.back {\n\t\tdisplay: inline-block;\n\t\tbackground-color: none;\n\t\tcolor: ",";\n\t\tfont-weight: bold;\n\t\tpadding: 10px 0;\n\t\tmargin: 30px 0 40px;\n\t\t",";\n\n\t\t&:hover {\n\t\t\tcolor: ",";\n\t\t}\n\n\t\tsvg {\n\t\t\tmargin-right: 8px;\n\t\t}\n\t}\n\n\t.row {\n\t\tdisplay: flex;\n\t\tgap: 2rem;\n\t\tjustify-content: space-between;\n\t\talign-items: flex-start;\n\t\tmargin-top: 2rem;\n\t\tflex-direction: column-reverse;\n\n\t\t@media "," {\n\t\t\tflex-direction: row;\n\t\t}\n\n\t\t.col {\n\t\t\twidth: 100%;\n\n\t\t\t@media "," {\n\t\t\t\twidth: 50%;\n\t\t\t}\n\n\t\t\t&__info {\n\t\t\t\twidth: 100%;\n\n\t\t\t\t@media "," {\n\t\t\t\t\twidth: 70%;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__add {\n\t\t\t\tbackground-color: ",";\n\t\t\t\tpadding: 16px 24px;\n\n\t\t\t\t@media "," {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\tspan {\n\t\t\t\t\tfont-size: ",";\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.image-wrapper {\n\t\t\t\tanimation: fadeIn 1s;\n\t\t\t\tbackground-color: ",";\n\t\t\t\tmargin-bottom: 32px;\n\n\t\t\t\tfigure {\n\t\t\t\t\tmargin: 0 0 16px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.list {\n\t\t\tpadding: 0;\n\t\t\tmargin: 0 0 16px;\n\n\t\t\tli {\n\t\t\t\tlist-style: none;\n\t\t\t\tdisplay: inline;\n\n\t\t\t\t&:after {\n\t\t\t\t\tcontent: ', ';\n\t\t\t\t}\n\n\t\t\t\t&:last-of-type {\n\t\t\t\t\t&:after {\n\t\t\t\t\t\tcontent: '';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.text {\n\t\tmargin: 0 30px 0 0px;\n\n\t\t@media "," {\n\t\t\tmargin: 0 30px 0 20px;\n\t\t}\n\n\t\tp {\n\t\t\tmargin-bottom: ",";\n\t\t}\n\n\t\t@media "," {\n\t\t\tmargin: 0;\n\t\t}\n\n\t\tspan {\n\t\t\tfont-weight: bold;\n\t\t}\n\n\t\t.price {\n\t\t\tfont-size: ",";\n\t\t\tmargin: 0;\n\t\t}\n\t}\n\n\t.small {\n\t\tdisplay: block;\n\t\tmargin: 10px 0;\n\t\tfont-size: ",";\n\t}\n\n\tstrong {\n\t\tcolor: ",";\n\t\tfont-weight: normal;\n\t}\n\n\t.plot {\n\t\tmargin-top: 2rem;\n\t\tcolor: ",";\n\t}\n\n\ta {\n\t\tcolor: ",";\n\t}\n"]);return ln=function(){return t},t}var sn=u.c.article(ln(),"\n\t@keyframes fadeIn {\n\t\tfrom {\n\t\t\topacity: 0;\n\t\t}\n\t\tto {\n\t\t\topacity: 1;\n\t\t}\n\t}\n",Object(p.b)("40px"),function(t){return t.theme.colors.primary},Object(p.d)("background-color 0.2s ease-out"),k,L.tablet,L.tablet,L.tablet,x,L.tablet,Object(p.b)("12px"),x,L.tablet,Object(p.b)("14px"),L.tablet,Object(p.b)("42px"),Object(p.b)("13px"),N,N,j);var un=function(t){t.match.params,t.history;var n=Object(a.useContext)(W),e=n.actions.setAddToCart,c=n.cart,o=n.selected;return r.a.createElement("section",{className:"character-profile"},r.a.createElement("div",{className:"wrapper container-fluid"},o?r.a.createElement(sn,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col__info"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement(lt,{src:o.image,alt:o.name})),r.a.createElement("div",{className:"text"},r.a.createElement("span",null,"Types: "),r.a.createElement("ul",{className:"list"},o.types.map(function(t,n){return r.a.createElement("li",{key:t.type.name},t.type.name)}))),r.a.createElement("div",{className:"text"},r.a.createElement("span",null,"Abilities: "),r.a.createElement("ul",{className:"list"},o.abilities.map(function(t){return r.a.createElement("li",{key:t.ability.name},t.ability.name)}))),r.a.createElement("div",{className:"text"},r.a.createElement("span",null,"Moves: "),r.a.createElement("ul",{className:"list"},o.moves.map(function(t){return r.a.createElement("li",{key:t.move.name},t.move.name)})))),r.a.createElement("div",{className:"col col__add"},r.a.createElement("h1",null,o.name.toUpperCase()),r.a.createElement("br",null),r.a.createElement("div",{className:"text"},r.a.createElement("p",{className:"price"},"$",o.base_experience),r.a.createElement("span",null,"Em at\xe9 10x no cart\xe3o")),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(ht,{text:"Buy",icon:G.h,action:function(){return e([].concat(Object(on.a)(c),[o]))}}))),r.a.createElement(l.b,{className:"back",to:"/"},r.a.createElement(V.a,{icon:G.a}),"Back to shop")):r.a.createElement(sn,null,r.a.createElement("p",null,"No results."),r.a.createElement(l.b,{className:"back",to:"/"},r.a.createElement(V.a,{icon:G.a})," Back"))))};var mn=Object(s.f)(function(t){return Object(a.useEffect)(function(){window.scrollTo(0,0)},[t.location]),t.children});function pn(){var t=Object(m.a)(["\n  *,\n  ::after,\n  ::before {\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    min-height: 100%;\n  }\n\n  #root {\n    min-height: 100vh;\n\n    > section {\n      min-height: calc(100vh - 100px);\n    }\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Hind Madurai', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: ",";\n    color: ",";\n  }\n\n  h1,\n  h2,\n  h3 {\n    margin: 0;\n    padding: 0;\n  }\n\n  p {\n    padding: 0;\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n  }  \n\n  .icon-wrapper {\n    margin-bottom: 0;\n  }\n\n  .wrapper {\n    margin: 0 auto;\n    max-width: 1200px;\n    padding: 0 16px;\n\n    @media "," {\n      padding: 0 32px;\n    }\n  }\n  \n"]);return pn=function(){return t},t}var dn=Object(u.b)(pn(),w,k,L.tablet),fn=function(){var t=H("theme",Pt),n=Object(i.a)(t,2),e=n[0],a=n[1];return r.a.createElement(u.a,{theme:e},r.a.createElement(Q,{setTheme:a,theme:e},r.a.createElement(l.a,{basename:"/pokestore"},r.a.createElement(mn,null,r.a.createElement(dn,null),r.a.createElement(Ut,{pageTitle:"POKESTORE",setTheme:a,theme:e}),r.a.createElement(s.a,{exact:!0,path:"/",component:cn}),r.a.createElement(s.a,{path:"/profile/:id",component:un}),r.a.createElement(Xt,null),r.a.createElement(At,null),r.a.createElement(Jt,{text:"Pokestore ".concat((new Date).getFullYear()," - Todos os direitos reservados")})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(fn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.789a8586.chunk.js.map