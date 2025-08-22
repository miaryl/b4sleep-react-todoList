import { useState } from 'react'
import './App.css'
import Title from './components/title/Title'
import Input from './components/input/Input'
import TodoList from './components/todoList/TodoList'

function App() {
  const [taskList, setTaskList] = useState([]);

  return(
    <div className="body">
      <Title />
      <Input />
      <TodoList />
    </div>
  )
}

export default App
