import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import './styles/style.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { Provider } from 'mobx-react'
import Store from './store'

const Root = (
  <Provider Store={Store}>
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));

