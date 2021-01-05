import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Components/Routes'
import LeftNavigation from './Components/LeftNavigation'
import TopNavigation from './Components/TopNavigation'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <div style={{ height: '100%', paddingTop: '10px', paddingLeft: '15px' }}>
    <BrowserRouter>
      <TopNavigation />
      <LeftNavigation />
      <Routes />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
