import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

const TodoInput = ({ addTodo, setTodo, todo }) => {
    return (
        <View style={styles.formContainer}>
        <TextInput 
          style={[styles.todoInput, styles.borders]}
          placeholder="Add todos"
          placeholderTextColor="#ffffff33"
          value={todo}
          onChangeText={text => setTodo(text)}
          onKeyPress={
            event => {
              if (event.key == 'Enter') 
              addTodo()
            }}
        />
        <TouchableOpacity 
          style={[styles.borders, styles.button]}
          onPress={addTodo}>
          <Text style={{color: '#fff', fontSize: 18}}>Add</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    todoInput: {
        flex: 1,
        borderColor: '#d8a4eb',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,
        fontSize: 18,
        color: '#fff'
    },
    button: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d8a4eb',
        borderWidth: 0
    },
    borders: {
        borderRadius: 5,
        borderWidth: 2
    },  
})

export default TodoInput
