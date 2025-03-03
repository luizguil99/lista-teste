import { useState } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoItem } from './components/TodoItem'
import { TodoStats } from './components/TodoStats'

interface Todo {
  id: string
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  const completedTodos = todos.filter((todo) => todo.completed).length

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Todo App</h1>
        
        <TodoStats total={todos.length} completed={completedTodos} />
        
        <TodoForm onAdd={addTodo} />
        
        <div className="bg-white rounded-lg shadow-sm divide-y">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
