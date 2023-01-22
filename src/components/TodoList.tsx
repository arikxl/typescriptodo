import React from 'react'
import { Todo } from '../model';
import TodoItem from './TodoItem';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className="todo-list">


            {todos && todos.length > 0 ? (
                todos?.map((todo: any) => (
                    <TodoItem todo={todo} key={todo.id} setTodos={setTodos} todos={todos} />
                ))
            ): (
                   <h2> No ToDoS YET</h2>
            )}
           
        </div>
    )
}

export default TodoList