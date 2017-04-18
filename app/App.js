import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './reducer/todoListRedux'
import List from './components/List'
import Input from './components/Input'
import Title from './components/Title'

// App is connected to the store using connect(). 
// It pulls the list data, todos, out of the store's state using mapStateToPros.
// It uses the dispatch() function added to its props to dispatch actions to modify the store
const mapStateToPros = (state) => ({
  todos: state.todos
})

class App extends Component {

  // Using subscribe/unsubscribe to passing props
  // state = {}
  // componentWillMount() {
  //   const { store } = this.props
  //   const { todos } = store.getState()
  //   this.setState({todos})

  //   this.unsubscribe = store.subscribe(() => {
  //     const { todos } = store.getState()
  //     this.setState({todos})
  //   })
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  onAddTodo = (text) => {
    const { dispatch } = this.props
    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.remove(index))
  }

  render() {
    const { todos } = this.props

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

export default connect(mapStateToPros)(App)
