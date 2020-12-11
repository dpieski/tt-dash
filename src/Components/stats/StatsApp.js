import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class StatsApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._isMounted = false
  }

  componentWillUnmount() {
    this._isMounted = false
  }
  componentDidMount() {
    this._isMounted = true
  }

  render() {
    return (
      <Container
        fluid
        className="ml-5 mt-1 "
        style={{ overflow: 'none', paddingLeft: '45px', paddingTop: '10px' }}
      >
        <Row className="ml-2">
          <Col xs={10} md={8}>
            Stats App
          </Col>
        </Row>
      </Container>
    )
  }
}

export default StatsApp
