import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';



import './App.css';
import { Todo } from './model';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), text: todo, isDone: false }]);
      setTodo('');
    }
  }

  return (
    <DragDropContext onDragEnd={() => { }}>

      <div className="App">
        <span className="heading">TypescripTodo</span>
        <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} setTodos={setTodos}
          completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
      </div>
    </DragDropContext>
  );
}

export default App;
