import React from 'react'
import {
  Alt,
  BarChartLine,
  XDiamondFill,
  TrophyFill,
} from 'react-bootstrap-icons'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const LeftNavigation = () => {
  return (
    <div id="left-navigation">
      <Nav
        defaultActiveKey="/"
        className="flex-sm-column"
        style={{
          position: 'absolute',
          top: '5',
          left: '5',
          alignContent: 'center',
          minWidth: '45px',
          paddingTop: '10px',
        }}
      >
        <Nav.Item>
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              borderLeft: '2px ',
              paddingLeft: '3px',
            }}
            exact
            style={{ color: 'grey' }}
          >
            <XDiamondFill className="mb-2 mt-2" size={30} />
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/stats"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              borderLeft: '2px ',
              paddingLeft: '3px',
            }}
            exact
            style={{ color: 'grey' }}
          >
            <BarChartLine className="mb-2" size={30} />
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/bracket"
            activeStyle={{
              fontWeight: 'bold',
              color: 'black',
              borderLeft: '2px ',
              paddingLeft: '3px',
            }}
            exact
            style={{ color: 'grey' }}
          >
            <Alt className="mb-2" size={30} />
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  )
}
export default LeftNavigation
