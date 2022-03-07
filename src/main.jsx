import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import store from './store/store'
import './index.css'
import './i18n';
import {App} from './App'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
