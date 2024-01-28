import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //https://stackoverflow.com/questions/62324139/why-is-my-react-component-rendering-twice-on-initial-load
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
