import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Swipeable } from 'react-native-gesture-handler'
import { RectButton } from 'react-native-gesture-handler'

const Todo = ({ item, toggleTodo, deleteTodo }) => {

    const renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-30, 0, 0, 1]
        })
        return (
            <RectButton style={styles.deleteBtn} onPress={deleteTodo} >
                <Text style={[styles.deleteText]} >
                    Delete
                </Text>
            </RectButton>
        )
    }

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity onPress={toggleTodo}>
                <View style={[styles.container, item.isCompleted === true ? styles.doneContainer : '']}>
                    <Text style={[styles.todo, item.isCompleted === true ? styles.done : '']}>{item.title}</Text>
                    {
                        item.isCompleted === true ? 
                        <Ionicons name="checkmark-done" size={28} color="#fff" /> :
                        <Ionicons name="checkmark" size={28} color="#fff" />   
                    }
        
                </View>
            </TouchableOpacity>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 0,
        borderWidth: 2,
        borderColor: '#d8a4eb',
        backgroundColor: '#d8a4ebaa',
        marginVertical: 5,
        paddingVertical: 18,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    todo: {
        fontSize: 22,
        color: '#fff'
    },
    done: {
        textDecorationLine: 'line-through'
    },
    doneContainer: {
        borderRadius: 1,
        borderStyle: 'dashed',
        opacity: 0.4
    },
    deleteBtn: {
        marginVertical: 5,
        paddingHorizontal: 15,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#FF3E3E',
    },
    deleteText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20
    }
})

export default Todo
