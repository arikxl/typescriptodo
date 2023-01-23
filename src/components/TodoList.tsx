import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import TodoItem from './TodoItem';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
    return (
        <div className="container">
            <Droppable droppableId='TodosList'>
                {
                    (provided) => (
                        <div className="todo-list" ref={provided.innerRef} 
                            {...provided.droppableProps}>
                            <span className="todo-heading">Active Todos</span>
                            {todos && todos.length > 0 && (
                                todos?.map((todo, index) => (
                                    <TodoItem todo={todo} key={todo.id}
                                        setTodos={setTodos} todos={todos}
                                        index={index} />
                                ))
                            )}
                        </div>
                    )
                }

            </Droppable>
            <Droppable droppableId='TodosRemove'>
                {
                    (provided) => (
                        <div className="todo-list remove" ref={provided.innerRef}
                            {...provided.droppableProps} >
                            <span className="todo-heading">Completed Todos</span>
                            {
                                completedTodos?.map((todo, index) => (
                                    <TodoItem todo={todo} key={todo.id}
                                        setTodos={setCompletedTodos}
                                        todos={completedTodos} index={index } />
                                ))
                            }
                        </div>
                    )
                }
            </Droppable>
        </div>



    )
}

export default TodoList