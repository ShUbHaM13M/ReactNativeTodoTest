import React from 'react'
import { View, FlatList, Text } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <View style={{flex: 1}}>
            {todos.length ? 
                <FlatList 
                    data={todos}
                    renderItem={
                        ({ item, index }) => 
                            <Todo 
                                item={item} 
                                toggleTodo={() => toggleTodo(index)}
                                deleteTodo={() => deleteTodo(index)}   
                            />
                        }
                    keyExtractor={( _, index) => index.toString()}
                /> :
                <View>
                    <Text 
                        style={{
                            fontSize: 22, 
                            color: '#fff',
                            textAlign: 'center'
                        }}>
                        Noting todo.. ✨✨
                    </Text>
                </View>
            }
        </View>
    )
}

export default TodoList
