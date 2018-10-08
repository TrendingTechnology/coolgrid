import * as React from 'react'
import Container from './Container'
import Row from './Row'
import Col from './Col'

const columnCss = `
  background-color: #e0e0eb;
  border: 1px solid #b3b3cc;
`

storiesOf('Bootstrap', module)
  .add('basic grid', () => (
    <React.Fragment>
      <Container extendColCss={columnCss}>
        <Row padding={20}>
          <Col xs={12} xl={12}>
            This is an example using custom settings on each element.
            <br />
            Each element accepts props based on your viewport settings.
          </Col>
          <Col xs={12} sm={6} lg={2} xl={6}>
            Column A
          </Col>
          <Col xs={12} sm={6} lg={2} xl={6}>
            Column B
          </Col>
          <Col xs={12} sm={6} lg={2} xl={6}>
            Column C
          </Col>
          <Col xs={12} sm={6} lg={2} xl={6}>
            Column D
          </Col>
          <Col xs={12} sm={6} lg={2} xl={6}>
            Column E
          </Col>
          <Col xs={12} sm={6} lg={2} xl={6}>
            Column F
          </Col>
        </Row>

        <Row
          padding={20}
          size={{
            xs: 12,
            sm: 6,
            lg: 2,
            xl: 6,
          }}
        >
          <Col xs={12} sm={12} lg={12} xl={12}>
            You can achieve the same just by setting it in Row component.
          </Col>
          <Col>Column A</Col>
          <Col>Column B</Col>
          <Col>Column C</Col>
          <Col>Column D</Col>
          <Col>Column E</Col>
          <Col>Column F</Col>
        </Row>
      </Container>

      <Container
        extendColCss={columnCss}
        padding={20}
        size={{
          xs: 12,
          sm: 6,
          lg: 2,
          xl: 6,
        }}
      >
        <Row>
          <Col xs={12} sm={12} lg={12} xl={12}>
            Or even in Container component!
          </Col>
          <Col>Column A</Col>
          <Col>Column B</Col>
          <Col>Column C</Col>
          <Col>Column D</Col>
          <Col>Column E</Col>
          <Col>Column F</Col>
        </Row>
        <Row>
          <Col>Column A</Col>
          <Col>Column B</Col>
          <Col>Column C</Col>
          <Col>Column D</Col>
          <Col>Column E</Col>
          <Col>Column F</Col>
        </Row>
      </Container>
    </React.Fragment>
  ))
  .add('custom 5 columns grid', () => (
    <Container extendColCss={columnCss}>
      <Row columns={5} gap={25} padding={20}>
        <Col xs={2} lg={1} />
        <Col xs={2} lg={1} />
        <Col xs={2} lg={1} />
        <Col xs={2} lg={1} />
        <Col xs={2} lg={1} />
      </Row>
    </Container>
  ))
  .add('complex web layout', () => (
    <Container extendColCss={columnCss}>
      <Row gap={20}>
        <Col xs={3}>
          <Row padding={20}>
            <Col>Col A</Col>
          </Row>
        </Col>
        <Col xs={9}>
          <Row columns={4} gap={10} gutter={0} padding={20}>
            <Col xs={2}>Col B</Col>
            <Col xs={2}>Col C</Col>
            <Col>Col D</Col>
            <Col>Col E</Col>
            <Col xs={4}>Col F</Col>
            <Col xs={4}>Col G</Col>
            <Col xs={1}>Col H</Col>
            <Col xs={1}>Col I</Col>
            <Col xs={1}>Col J</Col>
            <Col xs={1}>Col K</Col>
            <Col xs={1}>Col L</Col>
            <Col xs={1}>Col M</Col>
            <Col xs={1}>Col N</Col>
            <Col xs={1}>Col O</Col>
            <Col xs={3}>Col P</Col>
            <Col>Col Q</Col>
            <Col>Col Q</Col>
            <Col>Col Q</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  ))
