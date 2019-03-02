import Container from '../src/Container'
import Row from '../src/Row'
import Col from '../src/Col'

const columnCss = (css: any) => css`
  background-color: #e0e0eb;
  border: 1px solid #b3b3cc;
  padding: 20px;
`

storiesOf('Custom Grid Examples', module)
  .add('5 Columns Grid', () => {
    return (
      <Container columns={5} colCss={columnCss}>
        <Row>
          <Col />
          <Col />
          <Col />
          <Col />
          <Col />
        </Row>

        <Row>
          <Col xs={3}>xs-3</Col>
          <Col xs={2}>xs-2</Col>
          <Col xs={1}>xs-1</Col>
          <Col xs={3}>xs-3</Col>
          <Col xs={1}>xs-1</Col>
        </Row>
      </Container>
    )
  })
  .add('7 Columns Grid', () => {
    return (
      <Container columns={7} colCss={columnCss}>
        <Row>
          <Col />
          <Col />
          <Col />
          <Col />
          <Col />
          <Col />
          <Col />
        </Row>

        <Row>
          <Col xs={4}>xs-4</Col>
          <Col xs={3}>xs-3</Col>
          <Col xs={2}>xs-2</Col>
          <Col xs={3}>xs-3</Col>
          <Col xs={2}>xs-2</Col>
        </Row>
      </Container>
    )
  })

  .add('Custom Endpoints Grid', () => {
    const breakpoints = {
      phone: {
        viewport: 320,
        container: 300
      },
      tablet: {
        viewport: 768,
        container: 740
      },
      notebook: {
        viewport: 1366,
        container: 1200
      }
    }
    return (
      <Container breakpoints={breakpoints} colCss={columnCss}>
        <Row>
          <Col size={2} />
          <Col size={3} />
          <Col size={7} />
        </Row>
        <Row>
          <Col phone={6} tablet={4} notebook={3}>
            phone-6, tablet-4, notebook-4
          </Col>
          <Col phone={6} tablet={4} notebook={3}>
            phone-6, tablet-4, notebook-3
          </Col>
          <Col phone={12} tablet={4} notebook={3}>
            phone-12, tablet-4, notebook-3
          </Col>
        </Row>
      </Container>
    )
  })
