import React from 'react'

interface Props  {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return (
      <form className="input">
          <input type="input" placeholder="Enter a task" className='input-box'
          value={todo} onChange={(e)=> setTodo(e.target.value)}/>
          <button className="input-btn" type="submit">Go</button>
      </form>
  )
}

export default InputField