import React from 'react'
import ReactDOM from 'react-dom'

import Application from './Components/Application'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  rootElement
)
