import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ROUTES from './routes.json'

import DashboardApp from './dashboard/DashboardApp'
import StatsApp from './stats/StatsApp'
import BracketApp from './bracket/BracketApp'
import SettingsApp from './settings/SettingsApp'

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={ROUTES.BRACKET} component={BracketApp}></Route>
          <Route path={ROUTES.STATS} component={StatsApp}></Route>
          <Route path={ROUTES.SETTINGS} component={SettingsApp}></Route>
          <Route path={ROUTES.DASH} component={DashboardApp}></Route>
          <Route path="*" component={DashboardApp}></Route>
        </Switch>
      </div>
    )
  }
}
export default Routes
