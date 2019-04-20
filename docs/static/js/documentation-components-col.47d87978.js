(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./documentation/components/Col.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l={},r="wrapper";function c(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(o.b)(r,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"col"},"Col"),Object(o.b)("h2",{id:"usage-example"},"Usage example"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Col"),"s must be inside Row. These are not standalone components.\nThere is not requirement to use also ",Object(o.b)("inlineCode",{parentName:"p"},"Container"),". You can\nsee examples below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { ThemeProvider } from 'styled-components'\nimport { Container, Row, Col, theme } from 'coolstyle\n\n<ThemeProvider theme={{ grid: theme }}>\n  <Container>\n    <Row breakpoints={/* object */} columns={7}>\n      <Col>{/* ...your components */}</Col>\n      <Col>{/* ...your components */}</Col>\n      <Col>{/* ...your components */}</Col>\n    </Row>\n  </Container>\n</ThemeProvider>\n\n// example without using Container\n<ThemeProvider theme={{ grid: theme }}>\n  <Row breakpoints={/* object */} columns={7}>\n    <Col>{/* ...your components */}</Col>\n    <Col>{/* ...your components */}</Col>\n    <Col>{/* ...your components */}</Col>\n  </Row>\n</ThemeProvider>\n")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"property name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default value"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"size"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number / object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"size of ",Object(o.b)("inlineCode",{parentName:"td"},"Col"),"s inside ",Object(o.b)("inlineCode",{parentName:"td"},"Row"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"gap"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number / object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"gap of all ",Object(o.b)("inlineCode",{parentName:"td"},"Col"),"s inside ",Object(o.b)("inlineCode",{parentName:"td"},"Row"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"padding"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number / object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"padding of all ",Object(o.b)("inlineCode",{parentName:"td"},"Col"),"s inside ",Object(o.b)("inlineCode",{parentName:"td"},"Row"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"css"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string / func"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"css extension for ",Object(o.b)("inlineCode",{parentName:"td"},"Row"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tag"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HTML valid tag, generates ",Object(o.b)("inlineCode",{parentName:"td"},"div")," by default")))),Object(o.b)("p",null,"You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"breakpoint keys")," as a properties. The example would be following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"  const xs = {\n    padding: 10,\n    size: 4\n  }\n\n  const lg = {\n    padding: 10,\n    size: 4\n  }\n\n  <Col xs={xs} lg={lg} />\n")),Object(o.b)("p",null,"From the example above, data are passed via context to Row and Col components.\nComponent ",Object(o.b)("inlineCode",{parentName:"p"},"Col")," gets values of ",Object(o.b)("inlineCode",{parentName:"p"},"size"),", ",Object(o.b)("inlineCode",{parentName:"p"},"gap")," and ",Object(o.b)("inlineCode",{parentName:"p"},"padding"),"."))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"documentation/components/Col.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=documentation-components-col.c7b8f333b489d8d41bf0.js.map