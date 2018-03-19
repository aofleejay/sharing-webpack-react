import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
  , document.getElementById('root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
    render(require('./components/App'))
  })
}
