import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Globalstyle } from './style.js'
import { Iconfontstyle } from './static/iconfont/iconfont.js'

ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <Iconfontstyle />
    <App />
  </Fragment>,
  document.getElementById('root')
)
