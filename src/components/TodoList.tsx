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

const TodoList: React.FC<Props> = ({ todos, setTodos,
    completedTodos, setCompletedTodos }) => {
    return (
        <div className="container">
            <Droppable droppableId='TodoList'>
                {
                    (provided, snapshot) => (
                        <div className={`todo-list ${snapshot.isDraggingOver ? 'drag-active' : ''}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <span className="todo-heading">Active Todos</span>
                            {
                                todos?.map((todo, index) => (
                                    <TodoItem todo={todo} key={todo.id}
                                        setTodos={setTodos} todos={todos}
                                        index={index} />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId='TodoRemove'>
                {
                    (provided, snapshot) => (
                        <div ref={provided.innerRef}
                            className={`todo-list remove ${snapshot.isDraggingOver ? 'drag-complete' : ''}`}
                            {...provided.droppableProps}
                        >
                            <span className="todo-heading">Completed Todos</span>
                            {
                                completedTodos?.map((todo, index) => (
                                    <TodoItem todo={todo} key={todo.id}
                                        setTodos={setCompletedTodos}
                                        todos={completedTodos} index={index} />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    )
}

export default TodoList