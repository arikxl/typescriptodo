import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: Props) => {

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.text);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        )
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(   
            todos.map((todo) => (todo.id===id ?{...todo, text: editText}:todo))
        )
        setIsEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    },[isEdit])

    return (
        <form className="todo-item" onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                isEdit ? (
                    <input value={editText} className='edit-text' ref={ inputRef}
                        onChange={(e) =>setEditText(e.target.value)} />
                ) : (
                    todo.isDone
                        ? (
                            <s className="todo-text"> {todo.text}</s>
                        ) : (
                            <span className="todo-text"> {todo.text}</span>
                        )
                )
            }

            <div className="icons-wrapper">
                <span className="icon" onClick={() => {

                    if (!isEdit && !todo.isDone) {
                        setIsEdit(!isEdit)
                    }
                }
                }>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>

        </form>
    )
}

export default TodoItem