(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./documentation/customization/theme.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function p(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=c(this,s(n).call(this,e))).layout=null,t}var t,o,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"customize-theme"}},"Customize theme"),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"default-theme"}},"Default theme"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Below is how default grid theme looks like. It is ",a.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"important"),"\nto implement it into your provider under ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"grid")," key."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"{\n  baseSize: 16,\n  columns: 12,\n  breakpoints: {\n    xs: {\n      viewport: 0,\n      container: 0\n    },\n    sm: {\n      viewport: 576,\n      container: 540\n    },\n    md: {\n      viewport: 778,\n      container: 720\n    },\n    lg: {\n      viewport: 992,\n      container: 960\n    },\n    xl: {\n      viewport: 1200,\n      container: 1140\n    }\n  }\n}\n")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"create-your-own-theme"}},"Create your own theme"),a.a.createElement(r.MDXTag,{name:"p",components:n},"You can change count of ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"columns"),", or define your own ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"breakpoints"),"."),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"customized-breakpoints"}},"Customized breakpoints"),a.a.createElement(r.MDXTag,{name:"p",components:n},"For the smallest screen, you must set viewport to ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"0"),". For the other viewport\nproperties you can set ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"viewport")," and ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"container")," size in pixels (without unit).\nIf you set ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"baseSize"),", your defined sizes od viewports will be recalculated\nto ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"em")," units. If you do not specify baseSize, it will fallback to pixels."),a.a.createElement(r.MDXTag,{name:"p",components:n},"Below, you can see how to change count of columns:"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"{\n  columns: 7,\n  // ...rest\n}\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"Below, you can see customized breakpoints."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"{\n  breakpoints: {\n    phone: {\n      viewport: 320,\n      container: 300\n    },\n    tablet: {\n      viewport: 768,\n      container: 740\n    },\n    notebook: {\n      viewport: 1366,\n      container: 1200\n    }\n  }\n  // ...rest\n}\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"You can also use units in ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"viewport")," or ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"container")," key. When value\nis a number it fallbacks to ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"px"),", or when baseSize is set it will\nbe calculated to ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"em"),"s, for example:"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"{\n  breakpoints: {\n    phone: {\n      viewport: '320px',\n      container: '100%'\n    },\n    tablet: {\n      viewport: '768px',\n      container: 740\n    },\n    notebook: {\n      viewport: '1366px',\n      container: '1200px'\n    }\n  }\n  // ...rest\n}\n")),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"override-settings-in-container"}},"Override settings in Container"),a.a.createElement(r.MDXTag,{name:"p",components:n},"You can even override cofiguration for only one Container."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { ThemeProvider } from 'styled-components'\nimport { Container, Row, Col, theme } from 'coolstyle\n\nconst breakpoints = {\n  phone: {\n    viewport: 320,\n    container: 300\n  },\n  tablet: {\n    viewport: 768,\n    container: 740\n  },\n  notebook: {\n    viewport: 1366,\n    container: 1200\n  }\n}\n\n<ThemeProvider theme={{ grid: theme }}>\n  <Container columns={7} breakpoints={breakpoints}>\n    <Row>...</Row>\n    <Row>...</Row>\n  </Container>\n</ThemeProvider>\n")),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"override-settings-in-row"}},"Override settings in Row"),a.a.createElement(r.MDXTag,{name:"p",components:n},"You can even override cofiguration for each Row separately."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { ThemeProvider } from 'styled-components'\nimport { Container, Row, Col, theme } from 'coolstyle\n\nconst breakpoints = {\n  phone: {\n    viewport: 320,\n    container: 300\n  },\n  tablet: {\n    viewport: 768,\n    container: 740\n  },\n  notebook: {\n    viewport: 1366,\n    container: 1200\n  }\n}\n\n<ThemeProvider theme={{ grid: theme }}>\n  <Container>\n    <Row columns={7} breakpoints={breakpoints}>...</Row>\n    <Row columns={5} breakpoints={breakpoints}>...</Row>\n  </Container>\n</ThemeProvider>\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"or pass it via ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ThemeProvider>"),":"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { ThemeProvider } from 'styled-components'\nimport { Container, Row, Col, theme } from 'coolstyle\n\nconst breakpoints = {\n  phone: {\n    viewport: 320,\n    container: 300\n  },\n  tablet: {\n    viewport: 768,\n    container: 740\n  },\n  notebook: {\n    viewport: 1366,\n    container: 1200\n  }\n}\n\n<ThemeProvider theme={{ grid: theme }}>\n  <Container>\n    <ThemeProvider\n      theme={grid: {\n        breakpoints,\n        columns: 7,\n        baseSize: 16\n      }}\n    >\n      <Row columns={7} breakpoints={breakpoints}>...</Row>\n    </ThemeProvider>\n    <Row columns={5} breakpoints={breakpoints}>...</Row>\n  </Container>\n</ThemeProvider>\n")))}}])&&p(t.prototype,o),i&&p(t,i),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=documentation-customization-theme.0f5954bb6bd20692586e.js.map