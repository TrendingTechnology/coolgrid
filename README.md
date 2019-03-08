# Welcome to Coolgrid

Coolgrid is ultra flexible and extensible grid system for React based on styled-components and heavily inspired by Bootstrap Grid system.

## Documentation

Documentation can be found [here](https://vitus-labs.github.io/coolgrid/).

## Motivation

There are several grid solutions but none of them have fit my needs so far. They were not enough extensible. With Coolgrid you can do basically whatever you want while writing less code and have less dom elements in your application.

## Getting started

Let's get started! Here you will find everything you need to start using Coolgrid.

### Using yarn

```powershell
yarn add coolgrid
```

### Using npm

```powershell
npm i coolgrid
```

#### Required Dependencies

| Package             | Version |
| ------------------- | ------- |
| `react`             | 16.3+   |
| `styled-components` | 4+      |

## Code examples

```jsx
import React from 'react'
import { Container, Row, Col } from 'coolgrid'

const Element = () => (
  <Container>
    <Row>
      <Col size={3}>Column 1</Col>
      <Col size={{ xs: 12, sm: 6, md: 3 }}>Column 2</Col>
      <Col size={{ xs: 9, md: 3 }}>Column 3</Col>
      <Col size={3}>Column 4</Col>
    </Row>
  </Container>
)
```

You can define Col properties in Container or Row component. It uses context in the background. It means you can even write less code.

In the example below, all Cols will have width `xs: 12, sm: 6, md: 3` except Column 2 and 4. Their specified size property will override specification in Row so they will be of `size: 4`, respectively `size: 3`.

```jsx
import React from 'react'
import { Container, Row, Col } from 'coolgrid'

const Element = () => (
  <Container>
    <Row size={{ xs: 12, sm: 6, md: 3 }}>
      <Col>Column 1</Col>
      <Col size={4}>Column 2</Col>
      <Col>Column 3</Col>
      <Col size={3}>Column 4</Col>
    </Row>
  </Container>
)
```
