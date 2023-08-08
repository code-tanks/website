"use strict";(self.webpackChunkcode_tanks=self.webpackChunkcode_tanks||[]).push([[7334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),l=n(6775),i=n(1980),u=n(7392),c=n(12);function m(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=i??m;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var k=n(2389);const h="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(m(t),i(a))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},s,{className:(0,o.Z)("tabs__item",y,null==s?void 0:s.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function E(e){const t=(0,k.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},9301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const l={sidebar_position:1},i="Your First Tank",u={unversionedId:"tutorial-basics/your-first-tank",id:"tutorial-basics/your-first-tank",title:"Your First Tank",description:"Clone the template repository of your preferred language.",source:"@site/docs/tutorial-basics/your-first-tank.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/your-first-tank",permalink:"/website/docs/tutorial-basics/your-first-tank",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/website/docs/category/basics"},next:{title:"Anatomy",permalink:"/website/docs/tutorial-basics/anatomy"}},c={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"your-first-tank"},"Your First Tank"),(0,r.kt)("h1",{id:"basics"},"Basics"),(0,r.kt)("p",null,"Clone the template repository of your preferred language."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Language"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/code-tanks/python-template"},"Python"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/code-tanks/rust-template"},"Rust"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/code-tanks/dart-template"},"Dart"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/code-tanks/java-template"},"Java"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/code-tanks/javascript-template"},"Javascript"))))),(0,r.kt)("p",null,"You will edit the file within ",(0,r.kt)("inlineCode",{parentName:"p"},"tanks/")," to create your tank. You may create as many tanks as you wish, however each tank's code must be in its own file and follow some basic requirements. These are usually the imports at the top of the file, the tank class, the run() and onEvent() tank methods, and the createTank() method that returns a instance of your tank."),(0,r.kt)(o.Z,{groupId:"code-tanks-language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="spin_bot.py"',title:'"spin_bot.py"'},'from codetanks import BaseTank, commands\n\nclass MyTank(BaseTank):\n    """Simple Python spinning tank\n    """\n\n    def __init__(self):\n        super().__init__()\n\n        self.direction = 0\n\n        print(\'Running my spinning tank!\')\n\n    def run(self):\n        if self.direction % 2 == 0:\n            self.commands.append(commands.MOVE_BACKWARD | commands.ROTATE_TANK_COUNTER_CLOCKWISE | commands.FIRE)\n        else:\n            self.commands.append(commands.MOVE_FORWARD | commands.ROTATE_TANK_CLOCKWISE | commands.FIRE)\n\n    def on_event(self, event):\n        self.direction = self.direction + 1\n\ndef create_tank():\n    """Return an instance of your tank\n    """\n    return MyTank()\n'))),(0,r.kt)(s.Z,{value:"dart",label:"Dart",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="spin_bot.dart"',title:'"spin_bot.dart"'},"import 'package:codetanks/codetanks.dart';\n\nclass MyTank extends BaseTank {\n  int i = 0;\n\n  MyTank() {\n    print(\"Created my spin tank!\");\n  }\n\n  @override\n  void run() {\n    if (i % 2 == 0) {\n      commands.add(Command.MOVE_FORWARD | Command.ROTATE_TANK_CLOCKWISE | Command.FIRE);\n    } else {\n      commands.add(Command.MOVE_BACKWARD | Command.ROTATE_TANK_COUNTER_CLOCKWISE | Command.FIRE);\n    }    \n    print(commands);\n  }\n  \n  @override\n  void onEvent(Map event) {\n    print(event);\n    i = i + 1;\n    print(i);\n  }\n}\n\nBaseTank createTank() => MyTank();\n"))),(0,r.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="spin_bot.rs"',title:'"spin_bot.rs"'},"use ct_api::*;\nuse serde_json::Value;\n\npub struct MyTank {\n    i: u32\n}\n\nimpl Tank for MyTank {\n    fn run(&mut self, commands: &mut Vec<Command>) {\n        if self.i % 2 == 0 {\n            commands.push(Commands::MOVE_FORWARD | Commands::ROTATE_TANK_CLOCKWISE | Commands::FIRE);\n        } else {\n            commands.push(Commands::MOVE_BACKWARD | Commands::ROTATE_TANK_COUNTER_CLOCKWISE | Commands::FIRE);\n        }\n    }\n\n    fn on_event(&mut self, commands: &mut Vec<Command>, event: &Value) {\n        self.i += 1;\n    }\n}\n\npub fn create_tank() -> MyTank {\n    MyTank { i: 0 }\n}\n")))),(0,r.kt)("p",null,"This a basic tank that spins and fires. Upon any event, it will spin in the opposite direction. For more details, check out ",(0,r.kt)("a",{parentName:"p",href:"/website/docs/tutorial-basics/anatomy"},"Anatomy"),", ",(0,r.kt)("a",{parentName:"p",href:"/website/docs/tutorial-basics/physics-and-world"},"Physics & World"),", ",(0,r.kt)("a",{parentName:"p",href:"/website/docs/tutorial-basics/commands"},"Commands"),", ",(0,r.kt)("a",{parentName:"p",href:"/website/docs/tutorial-basics/debugging"},"Debugging"),", ",(0,r.kt)("a",{parentName:"p",href:"/website/docs/tutorial-basics/events"},"Events"),", and ",(0,r.kt)("a",{parentName:"p",href:"/website/docs/tutorial-basics/game-engine-logic"},"Game Engine Logic"),"."),(0,r.kt)("h1",{id:"building"},"Building"),(0,r.kt)("p",null,"To build your code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"build.sh my_tank.py\n")),(0,r.kt)("h1",{id:"running"},"Running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ctdesktop TANK_HASH ANOTHER_TANK_HASH ETC_TANK_HASHES\n")),(0,r.kt)("p",null,"You may enter multiple tank hashes as well as duplicate tank hashes."))}p.isMDXComponent=!0}}]);