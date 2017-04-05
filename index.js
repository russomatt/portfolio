import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App.js'

require("./css/base.scss");


render((
  <App />
), document.getElementById('content'))
