import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList'; // Import from components folder
import ToDoForm from './components/ToDoForm'; // Import from components folder

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
