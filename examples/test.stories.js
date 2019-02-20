import React from 'react'
import { storiesOf } from '@storybook/react'
import Container from '../src/Container'
import Row from '../src/Row'
import Col from '../src/Col'

const columnCss = (css: any) => css`
  background-color: #e0e0eb;
  border: 1px solid #b3b3cc;
`

storiesOf('Test', module).add('Defining params as objects', () => {
  return (
    <Container colCss={columnCss}>
      <Row
        padding={{ xs: 12, sm: 45, md: 0, lg: 56 }}
        gap={{ xs: 12, sm: 0, md: 15, lg: 30 }}
      >
        <Col xs={12} md={4} lg={6}>
          xs:12, md:4, lg:6
        </Col>
        <Col size={4}>xs:12, md:4, lg:6</Col>
        <Col xs={12} md={4} lg={6}>
          xs:12, md:4, lg:6
        </Col>
        <Col xs={12} md={4} lg={6}>
          xs:12, md:4, lg:6
        </Col>
        <Col xs={12} md={4} lg={6}>
          xs:12, md:4, lg:6
        </Col>
        <Col xs={12} md={4} lg={6}>
          xs:12, md:4, lg:6
        </Col>
      </Row>
    </Container>
  )
})
