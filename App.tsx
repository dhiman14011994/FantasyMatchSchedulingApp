import { Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import Routes from './app/routes'

const App = () => {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  )
}

export default App