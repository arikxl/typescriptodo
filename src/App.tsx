import React, { useState} from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string | number>('')
  

  return (
    <div className="App">
      <span className="heading">TypescripTodo</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
