// This file is creating the redux and passing it our App container
import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'

// Import the reducer and create a store
import { reducer } from './app/reducer/todoListRedux'
const store = createStore(reducer)

// Import the App container component
import App from './app/App'

// Pass the store into the app container
const AppWithStore = () => <App store={store}/>

AppRegistry.registerComponent('AwesomeProject', () => AppWithStore);