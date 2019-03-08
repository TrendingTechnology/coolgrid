(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./documentation/components/Row.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return g});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function l(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=c(this,s(n).call(this,e))).layout=null,t}var t,a,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"row"}},"Row"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"usage-example"}},"Usage example"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Use default grid settings by importing it to styled-components\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ThemeProvider>")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import { ThemeProvider } from 'styled-components'\nimport { Container, Row, Col, theme } from 'coolstyle\n\n<ThemeProvider theme={{ grid: theme }}>\n  <Container>\n    <Row>...</Row>\n    <Row>...</Row>\n  </Container>\n</ThemeProvider>\n\n// or without using Container\n<ThemeProvider theme={{ grid: theme }}>\n  <Row>...</Row>\n  <Row>...</Row>\n</ThemeProvider>\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"or create your own grid configuration. There are several approaches\nhow you can achieve this."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import { ThemeProvider } from 'styled-components'\nimport { theme } from 'coolstyle\n\n<ThemeProvider theme={{ grid: theme }}>\n  {/* ...your components */}\n</ThemeProvider>\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"you can also directly overrides grid settings in your Row components"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import { ThemeProvider } from 'styled-components'\nimport { Row, theme } from 'coolstyle\n\n<ThemeProvider theme={{ grid: theme }}>\n  <Row breakpoints={/* object */} columns={7}>\n    {/* ...your components */}\n  </Row>\n\n</ThemeProvider>\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"property name"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"type"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"default value"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"theme"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"object"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"styled-components")," theme")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"breakpoints"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"object"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"breakpoints for responsivity")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"baseSize"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"16"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"base font size used for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"em")," calculation")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"columns"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"12"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"total number of columns in one ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Row"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"size"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number / object"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"size of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Col"),"s inside ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Row"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"gap"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number / object"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"-"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"gap of all ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Col"),"s inside ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Row"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"padding"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number / object"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"-"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"padding of all ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Col"),"s inside ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Row"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"gutter"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number / object"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"-"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"gutter of all ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Col"),"s inside ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Row"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"css"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string / func"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"-"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"css extension for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Row"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"colCss"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string / func"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"-"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"css extension for all ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Col"),"s inside ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Row"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"tag"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"HTML valid tag, generates ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"div")," by default")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"colTag"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"-"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"valid HTML tag for all ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Col"),"s inside ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Row"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"div")," by default")))),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can also use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"breakpoint keys")," as a properties. The example would be following:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  const xs = {\n    padding: 10,\n    gap: 10,\n    gutter: 0,\n    size: 4\n  }\n\n  const lg = {\n    padding: 10,\n    gap: 10,\n    gutter: 0,\n    size: 4\n  }\n\n  <Row xs={xs} lg={lg} />\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"From the example above, data are passed via context to Col components.\nComponent ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Col")," gets values of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"size"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gap")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"padding"),"."))}}])&&l(t.prototype,a),m&&l(t,m),n}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=documentation-components-row.6bcc057d671ddbbdd962.js.map