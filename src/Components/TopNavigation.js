import React from 'react'
import { Navbar } from 'react-bootstrap'

class TopNavigation extends React.Component {
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
      <div id="navigation" style={{ position: 'sticky', top: '0' }}>
        <Navbar size={16} expand="md" bg="light" variant="light" sticky="top">
          <Navbar.Brand>DC Table Tennis Application</Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}

export default TopNavigation
