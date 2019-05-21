import 'babel-polyfill'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import rootSaga from './sagas'
import { clearError } from './actions/auth'

import './styles/main.css'

import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Stats from './components/Stats'
// import Rate from './components/Rate'
import Botnet from './components/Botnet'
import NotFound from './components/NotFound'

const logger = createLogger({
  predicate: (getState, action) => action.type !== 'CHANGE_FORM'
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSaga)

/**
* Checks authentication status on route change
* @param  {object}   nextState The state we want to change into when we change routes
* @param  {function} replace Function provided by React Router to replace the location
*/
function checkAuth (nextState, replace) {
  const {loggedIn} = store.getState().auth

  store.dispatch(clearError())

  if (!loggedIn && nextState.location.pathname !== '/login') {
    replace('/login')
  }
}

// Mostly boilerplate, except for the routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
class Main extends Component {
  render () {
    const {loggedIn} = store.getState().auth

    try { console.log(this.props.location.pathname) } catch(e) {}

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={App}>
            <Route onEnter={checkAuth}>
              <Route path='/' component={loggedIn ? Home : Login} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/home' component={Home} />
              <Route path='/dashboard' component={Stats} />
              <Route path='/botnet' component={Botnet} />
            </Route>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))
