import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, 
  TextInput, Button, TouchableOpacity, 
  TextComponent, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoList from './components/Todolist';
import Constants from 'expo-constants';
import TodoInput from './components/TodoInput';

export default function App() {

  const [ todos, setTodos ] = useState([])
  const [ todo, setTodo ] = useState('');

  const addTodo = () => {
    if (todo.length <= 0) return
    setTodos(prev => [...prev, { 
      title: todo,
      isCompleted: false,
    }])
    setTodo('')
    hideKeyboard()
  }

  const deleteTodo = index => {
    setTodos(prev => (
      prev.filter((_, itemIndex) => itemIndex !== index)
    ))
  }

  const toggleTodo = index => {
    const temp = [...todos]
    temp[index].isCompleted = !temp[index].isCompleted
    setTodos([...temp])
  }

  function hideKeyboard() {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Todos</Text>
        <StatusBar style="auto" />
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} />
        <TodoInput 
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  borders: {
    borderRadius: 5,
    borderWidth: 2
  },  
  container: {
    flex: 1,
    backgroundColor: '#12181b',
    paddingHorizontal: 20,
    marginTop: Constants.statusBarHeight || 40
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    borderColor: '#ffffff33',
    borderBottomWidth: 1,
    paddingBottom: 20,
    color: '#fff'
  }
});