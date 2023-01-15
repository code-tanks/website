"use strict";(self.webpackChunkcode_tanks=self.webpackChunkcode_tanks||[]).push([[4214],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(r),y=o,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4206:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Anatomy",c={unversionedId:"tutorial-basics/anatomy",id:"tutorial-basics/anatomy",title:"Anatomy",description:"Body",source:"@site/docs/tutorial-basics/anatomy.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/anatomy",permalink:"/website/docs/tutorial-basics/anatomy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Your First Tank",permalink:"/website/docs/tutorial-basics/your-first-tank"},next:{title:"Physics",permalink:"/website/docs/tutorial-basics/physics"}},l={},s=[{value:"Body",id:"body",level:2},{value:"Gun",id:"gun",level:2},{value:"Radar",id:"radar",level:2}],u={toc:s};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anatomy"},"Anatomy"),(0,o.kt)("h2",{id:"body"},"Body"),(0,o.kt)("p",null,"This is the main component of the tank. Any movement or turning commands apply velocity to this component."),(0,o.kt)("h2",{id:"gun"},"Gun"),(0,o.kt)("p",null,"This is mounted on the tank. If gun is locked, it will rotate along with any tank rotation."),(0,o.kt)("h2",{id:"radar"},"Radar"),(0,o.kt)("p",null,"This is mounted on the radar. If the radar is locked, it will rotate along with any gun or tank rotation"))}p.isMDXComponent=!0}}]);