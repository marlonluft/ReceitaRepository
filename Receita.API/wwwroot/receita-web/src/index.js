import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import reducer from './Reducers'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"

import { Container } from 'reactstrap';

import Menu from './Components/Menu'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>

      <Container fluid={true}>

        <Menu></Menu>
        <App />

      </Container>

    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);