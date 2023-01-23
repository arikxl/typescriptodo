import React, { useRef } from 'react';

interface Props  {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: React.FormEvent)=> void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {

    const inputRef = useRef<HTMLInputElement>(null);

  return (
      <form className="input" onSubmit={(e) => {
          handleAddTodo(e)
          inputRef.current?.blur()
      }}>
          <input type="input" placeholder="Enter a task" className='input-box'
              value={todo} onChange={(e) => setTodo(e.target.value)} ref={ inputRef} />
          <button className="input-btn" type="submit">Go</button>
      </form>
  )
}

export default InputField