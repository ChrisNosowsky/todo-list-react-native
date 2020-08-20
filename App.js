import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'go to coffee shop', key: '1'},
    {text: 'learn spring', key: '2'},
    {text: 'learn ruby', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}></AddTodo>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
