(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./documentation/examples/unequal-columns.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=t("./src/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=p(this,d(n).call(this,e))).layout=null,t}var t,r,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=u(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:n},o.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"unequal-columns"}},"Unequal columns"),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"using-size-prop-in-col"}},"Using size prop in Col"),o.a.createElement(a.MDXTag,{name:"p",components:n},"Column with can be set for all breakpoints by using ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"size")," property."),o.a.createElement(i.e,{__codesandbox:"undefined",__position:0,__code:"<ThemeProvider theme={{ grid: theme }}>\n  <Container\n    colCss={`\n      background-color: #e0e0eb;\n      border: 1px solid #b3b3cc;\n      padding: 20px;\n    `}\n  >\n    <Row>\n      <Col size={2}>size 2</Col>\n      <Col size={3}>size 3</Col>\n      <Col size={7}>size 7</Col>\n    </Row>\n  </Container>\n</ThemeProvider>",__scope:{props:this?this.props:t,ThemeProvider:c.a,Container:l.b,Row:l.c,Col:l.a,theme:l.d}},o.a.createElement(c.a,{theme:{grid:l.d}},o.a.createElement(l.b,{colCss:"\n        background-color: #e0e0eb;\n        border: 1px solid #b3b3cc;\n        padding: 20px;\n      "},o.a.createElement(l.c,null,o.a.createElement(l.a,{size:2},"size 2"),o.a.createElement(l.a,{size:3},"size 3"),o.a.createElement(l.a,{size:7},"size 7"))))),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"more-unequal-columns"}},"More unequal columns"),o.a.createElement(i.e,{__codesandbox:"undefined",__position:1,__code:"<ThemeProvider theme={{ grid: theme }}>\n  <Container\n    colCss={`\n      background-color: #e0e0eb;\n      border: 1px solid #b3b3cc;\n      padding: 20px;\n    `}\n  >\n    <Row>\n      <Col size={8} />\n      <Col size={4} />\n    </Row>\n    <Row>\n      <Col size={2} />\n      <Col size={2} />\n      <Col size={2} />\n      <Col size={6} />\n    </Row>\n    <Row>\n      <Col size={4} />\n      <Col size={6} />\n      <Col />\n      <Col />\n    </Row>\n  </Container>\n</ThemeProvider>",__scope:{props:this?this.props:t,ThemeProvider:c.a,Container:l.b,Row:l.c,Col:l.a,theme:l.d}},o.a.createElement(c.a,{theme:{grid:l.d}},o.a.createElement(l.b,{colCss:"\n        background-color: #e0e0eb;\n        border: 1px solid #b3b3cc;\n        padding: 20px;\n      "},o.a.createElement(l.c,null,o.a.createElement(l.a,{size:8}),o.a.createElement(l.a,{size:4})),o.a.createElement(l.c,null,o.a.createElement(l.a,{size:2}),o.a.createElement(l.a,{size:2}),o.a.createElement(l.a,{size:2}),o.a.createElement(l.a,{size:6})),o.a.createElement(l.c,null,o.a.createElement(l.a,{size:4}),o.a.createElement(l.a,{size:6}),o.a.createElement(l.a,null),o.a.createElement(l.a,null))))),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"size-via-viewport-keys-in-col"}},"Size via viewport keys in Col"),o.a.createElement(a.MDXTag,{name:"p",components:n},"Default viewports comes from Bootstrap where are predefined\nbreakpoints for ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xs"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sm"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"md"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lg"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xl")," screens."),o.a.createElement(i.e,{__codesandbox:"undefined",__position:2,__code:"<ThemeProvider theme={{ grid: theme }}>\n  <Container\n    colCss={`\n      background-color: #e0e0eb;\n      border: 1px solid #b3b3cc;\n      padding: 20px;\n    `}\n  >\n    <Row>\n      <Col xs={2} sm={2} md={2} lg={2} xl={2} />\n      <Col xs={3} sm={3} md={3} lg={3} xl={3} />\n      <Col xs={7} sm={7} md={7} lg={7} xl={7} />\n    </Row>\n  </Container>\n</ThemeProvider>",__scope:{props:this?this.props:t,ThemeProvider:c.a,Container:l.b,Row:l.c,Col:l.a,theme:l.d}},o.a.createElement(c.a,{theme:{grid:l.d}},o.a.createElement(l.b,{colCss:"\n        background-color: #e0e0eb;\n        border: 1px solid #b3b3cc;\n        padding: 20px;\n      "},o.a.createElement(l.c,null,o.a.createElement(l.a,{xs:2,sm:2,md:2,lg:2,xl:2}),o.a.createElement(l.a,{xs:3,sm:3,md:3,lg:3,xl:3}),o.a.createElement(l.a,{xs:7,sm:7,md:7,lg:7,xl:7}))))),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"size-via-viewport-keys-in-row"}},"Size via viewport keys in Row"),o.a.createElement(a.MDXTag,{name:"p",components:n},"Default viewports comes from Bootstrap where are predefined\nbreakpoints for ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xs"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sm"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"md"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lg"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xl")," screens. You\ncan define them on Row and it will be passed to ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Col"),"s\nvia context."),o.a.createElement(i.e,{__codesandbox:"undefined",__position:3,__code:"<ThemeProvider theme={{ grid: theme }}>\n  <Container\n    colCss={`\n      background-color: #e0e0eb;\n      border: 1px solid #b3b3cc;\n      padding: 20px;\n    `}\n  >\n    <Row xs={4} sm={4} md={4} lg={4} xl={4}>\n      <Col>size 4</Col>\n      <Col>size 4</Col>\n      <Col>size 4</Col>\n    </Row>\n  </Container>\n</ThemeProvider>",__scope:{props:this?this.props:t,ThemeProvider:c.a,Container:l.b,Row:l.c,Col:l.a,theme:l.d}},o.a.createElement(c.a,{theme:{grid:l.d}},o.a.createElement(l.b,{colCss:"\n        background-color: #e0e0eb;\n        border: 1px solid #b3b3cc;\n        padding: 20px;\n      "},o.a.createElement(l.c,{xs:4,sm:4,md:4,lg:4,xl:4},o.a.createElement(l.a,null,"size 4"),o.a.createElement(l.a,null,"size 4"),o.a.createElement(l.a,null,"size 4"))))),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"size-via-viewport-keys-in-container"}},"Size via viewport keys in Container"),o.a.createElement(a.MDXTag,{name:"p",components:n},"Default viewports comes from Bootstrap where are predefined\nbreakpoints for ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xs"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sm"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"md"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lg"),", ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xl")," screens. You\ncan define them on Container and it will be passed to ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Col"),"s\nvia context."),o.a.createElement(i.e,{__codesandbox:"undefined",__position:4,__code:"<ThemeProvider theme={{ grid: theme }}>\n  <Container\n    xs={4}\n    sm={4}\n    md={4}\n    lg={4}\n    xl={4}\n    colCss={`\n      background-color: #e0e0eb;\n      border: 1px solid #b3b3cc;\n      padding: 20px;\n    `}\n  >\n    <Row>\n      <Col>size 4</Col>\n      <Col>size 4</Col>\n      <Col>size 4</Col>\n    </Row>\n    <Row>\n      <Col>size 4</Col>\n      <Col>size 4</Col>\n      <Col>size 4</Col>\n    </Row>\n  </Container>\n</ThemeProvider>",__scope:{props:this?this.props:t,ThemeProvider:c.a,Container:l.b,Row:l.c,Col:l.a,theme:l.d}},o.a.createElement(c.a,{theme:{grid:l.d}},o.a.createElement(l.b,{xs:4,sm:4,md:4,lg:4,xl:4,colCss:"\n        background-color: #e0e0eb;\n        border: 1px solid #b3b3cc;\n        padding: 20px;\n      "},o.a.createElement(l.c,null,o.a.createElement(l.a,null,"size 4"),o.a.createElement(l.a,null,"size 4"),o.a.createElement(l.a,null,"size 4")),o.a.createElement(l.c,null,o.a.createElement(l.a,null,"size 4"),o.a.createElement(l.a,null,"size 4"),o.a.createElement(l.a,null,"size 4"))))))}}])&&m(t.prototype,r),s&&m(t,s),n}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/index.js":function(e,n,t){"use strict";var r=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=t("./node_modules/react/index.js"),a=t.n(o),i=t("./node_modules/lodash/lodash.js"),c=Object(o.createContext)({}),l=["breakpoints","baseSize","columns"],s=["size","gap","padding"],u=s.concat(["gutter","colCss","colTag"]),m=u.concat(["rowCss","rowTag"]);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    ","\n  "]);return b=function(){return e},e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){g(e,n,t[n])})}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=f({},Object(i.pick)(t,l),Object(i.pick)(n,l),Object(i.pick)(e,l));return f({},r,{breakpointKeys:Object.keys(r.breakpoints)})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return t?f({},Object(i.pick)(n,t),Object(i.pick)(e,t)):Object.assign({},n,e)},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return Object(i.omit)(e,n)},w=function(e){if(e)return"function"===typeof e?e(r.b):Object(r.b)(b(),e)},O=function(e,n,t){return t?e>0?"\n      @media only screen and (min-width: ".concat(e/n,"em) {\n        ").concat(t,"\n      }\n    "):t:""},C=function(e,n){var t=e.breakpoints,r=e.baseSize;if(!t)throw Error("Breakpoints are missing!");for(var o="",a=Object.entries(t),i=0;i<a.length;i++){var c=d(a[i],2)[1],l=c.viewport;c.viewport>=0&&(o+=O(l,r,n(c)))}return o},x=function(e,n,t,r){var o=Object.assign({},n),a=!0,i=!1,c=void 0;try{for(var l,s=function(){var e=l.value,a={};r.forEach(function(n){var r=function(e,n,t){var r=t[e];return r||0===r?r&&"object"===p(r)?Object.keys(r).includes(n)?r[n]:null:r:null}(n,e,t);(r||0===r)&&(a[n]=r)});var i=t[e];if(i){if("object"===p(i)){var c=Object.assign({},a);a=f({},i,c)}(Number.isFinite(i)||"string"===typeof i)&&(a.size=i)}o[e]=Object.assign({},n[e],a)},u=e[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)s()}catch(m){i=!0,c=m}finally{try{a||null==u.return||u.return()}finally{if(i)throw c}}return o};function E(){var e=z(["\n      ","\n    "]);return E=function(){return e},e}function j(){var e=z(["\n  box-sizing: border-box;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n\n  ",";\n\n  ","\n"]);return j=function(){return e},e}function z(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var _=function(e){var n=e.container,t="";return n&&(t+="\n        max-width: ".concat(n,"px;\n      ")),t},k=r.c.div(j(),function(e){var n=e.theme;return n.breakpoints&&C(n,_)},function(e){var n=e.extendCss;return Object(r.b)(E(),n)});function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){P(e,n,t[n])})}return e}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var M=function(e){var n=e.theme,t=e.children,r=e.tag,o=e.css,s=S(e,["theme","children","tag","css"]),u=y(s,{},Object(i.get)(n,"grid",{}));return a.a.createElement(k,Object.assign({as:r,extendCss:w(o),theme:u},h(s,[].concat(D(m),D(l)))),a.a.createElement(c.Provider,{value:T({},u,Object(i.pick)(s,u.breakpointKeys),Object(i.pick)(s,m))},t))};M.displayName="mosquito-ui/grid/Container";var X=M;M.__docgenInfo={description:"",methods:[],displayName:"mosquito-ui/grid/Container"};var N=Object(r.d)(X),R=Object(o.createContext)({});function q(){var e=A(["\n      ","\n    "]);return q=function(){return e},e}function I(){var e=A(["\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  align-self: stretch;\n\n  ","};\n\n  ","\n"]);return I=function(){return e},e}function A(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var K=function(e){var n=e.gap,t=e.gutter,r="";return n&&(r+="\n        margin: ".concat(0===t?-1*n/2:n/2,"px -").concat(n/2,"px;\n      ")),r},B=r.c.div(I(),function(e){var n=e.theme;return n.breakpoints&&C(n,K)},function(e){var n=e.extendCss;return Object(r.b)(q(),n)});function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){U(e,n,t[n])})}return e}function U(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Y(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var F=function(e){var n=e.theme,t=e.children,r=e.tag,o=e.css,l=Y(e,["theme","children","tag","css"]);return a.a.createElement(c.Consumer,null,function(e){var c=e.rowCss,s=e.rowTag,m=Y(e,["rowCss","rowTag"]),p=y(l,m,Object(i.get)(n,"grid",{})),d=x(p.breakpointKeys,p.breakpoints,v(l,m),["gap","gutter"]);return a.a.createElement(B,Object.assign({as:r||s,extendCss:w(o||c),theme:J({},p,{breakpoints:d})},h(l,u)),a.a.createElement(R.Provider,{value:J({},p,v(l,m,p.breakpointKeys),v(l,m,u))},t))})};F.displayName="mosquito-ui/grid/Row";var G=F;F.__docgenInfo={description:"",methods:[],displayName:"mosquito-ui/grid/Row"};var H=Object(r.d)(G);function L(){var e=V(["\n      ","\n    "]);return L=function(){return e},e}function Q(){var e=V(["\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  flex-basis: 0;\n  flex-grow: 1;\n\n  ",";\n\n  ","\n"]);return Q=function(){return e},e}function V(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var W=r.c.div(Q(),function(e){var n,t=e.theme;return t.breakpoints&&C(t,(n=t.columns,function(e){var t=e.size,r=e.gap,o=e.padding,a="",i=t/n*100;return i&&(a+="\n      max-width: ".concat(r?"calc(".concat(i,"% - ").concat(r,"px)"):"".concat(i,"%"),";\n      flex-grow: 0;\n      flex-shrink: 0;\n      flex-basis: ").concat(r?"calc(".concat(i,"% - ").concat(r,"px)"):"".concat(i,"%"),";\n    ")),(o||0===o)&&(a+="padding: ".concat(o,"px;")),(r||0===r)&&(a+="\n      margin-left: ".concat(r/2,"px;\n      margin-right: ").concat(r/2,"px;\n      margin-top: ").concat(r,"px;\n    ")),a}))},function(e){var n=e.extendCss;return Object(r.b)(L(),n)});function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){$(e,n,t[n])})}return e}function $(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ne=function(e){var n=e.children,t=e.tag,r=e.css,o=ee(e,["children","tag","css"]);return a.a.createElement(R.Consumer,null,function(e){var i=e.colCss,c=e.colTag,l=ee(e,["colCss","colTag"]),u=y({},l,{}),m=x(u.breakpointKeys,u.breakpoints,Z({},v(h(o,["gap"]),l,s),v(h(o,["gap"]),l,u.breakpointKeys)),s);return a.a.createElement(W,Object.assign({as:t||c,extendCss:w(r||i),theme:Z({},u,{breakpoints:m})},h(o,s)),n)})};ne.displayName="mosquito-ui/grid/Col";var te=ne;ne.__docgenInfo={description:"",methods:[],displayName:"mosquito-ui/grid/Col"};var re=te,oe={baseSize:16,columns:12,breakpoints:{xs:{viewport:0,container:0},sm:{viewport:576,container:540},md:{viewport:778,container:720},lg:{viewport:992,container:960},xl:{viewport:1200,container:1140}}};t.d(n,"b",function(){return N}),t.d(n,"c",function(){return H}),t.d(n,"a",function(){return re}),t.d(n,"d",function(){return oe})}}]);
//# sourceMappingURL=documentation-examples-unequal-columns.2c0af922eee83f173f95.js.map