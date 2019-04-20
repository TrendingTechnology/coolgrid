(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./documentation/getting-started.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),r={},i="wrapper";function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(i,Object(o.a)({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"getting-started"},"Getting started"),Object(l.b)("p",null,"Coolgrid is ultra flexible and extensible grid system for React\nbased on styled-components and heavily inspired by\nBootstrap Grid system."),Object(l.b)("h2",{id:"motivation"},"Motivation"),Object(l.b)("p",null,"There are several grid solutions but none of them have fit my\nneeds so far. They were not enough extensible. With Coolgrid\nyou can do basically whatever you want while writing less code\nand have less dom elements in your application."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"You can install ii with your preferred tool (",Object(l.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm"),")."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"# with yarn\nyarn add coolgrid\n\n# or with npm\nnpm install coolgrid --save\n")),Object(l.b)("h2",{id:"dependencies"},"Dependencies"),Object(l.b)("p",null,"Coolgrid depends on the following packages which need to be installed as well."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"react"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:null}),">= 16.3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"styled-components"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:null}),">= 4")))),Object(l.b)("h2",{id:"themeprovider"},"ThemeProvider"),Object(l.b)("p",null,"Don't forget to add coolstyle config into your ",Object(l.b)("inlineCode",{parentName:"p"},"ThemeProvider")," under ",Object(l.b)("inlineCode",{parentName:"p"},"grid")," key."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { ThemeProvider } from 'styled-components'\nimport { theme } from 'coolstyle\n\n// you can import default bootstrap theme settings or create yours.\n<ThemeProvider theme={{/* ...your theme */}}>\n  {/* ...your components */}\n</ThemeProvider>\n")),Object(l.b)("h2",{id:"code-examples"},"Code examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Container, Row, Col } from 'coolgrid'\n\nconst Element = () => (\n  <Container>\n    <Row>\n      <Col size={3}>Column 1</Col>\n      <Col size={{ xs: 12, sm: 6, md: 3 }}>Column 2</Col>\n      <Col size={{ xs: 9, md: 3 }}>Column 3</Col>\n      <Col size={3}>Column 4</Col>\n    </Row>\n  </Container>\n)\n")),Object(l.b)("p",null,"You can define Col properties in Container or Row component.\nIt uses context in the background. It means you can even\nwrite less code."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Container, Row, Col } from 'coolgrid'\n\nconst Element = () => (\n  <Container>\n    <Row size={{ xs: 12, sm: 6, md: 3 }}>\n      <Col>Column 1</Col>\n      <Col size={4}>Column 2</Col>\n      <Col>Column 3</Col>\n      <Col size={3}>Column 4</Col>\n    </Row>\n  </Container>\n)\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"documentation/getting-started.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=documentation-getting-started.c7b8f333b489d8d41bf0.js.map