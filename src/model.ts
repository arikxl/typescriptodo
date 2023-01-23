

export interface Todo{
    id: number;
    text: string;
    isDone: boolean;
}

// type Actions = 
//     | { type: "add";  payload: string}
//     | { type: "remove";  payload: number}
//     | { type: "done";  payload: number}


// const TodoReducer = (state:Todo[], action:Actions) => {
//     switch (action.type) {
//         case "add":
//             return [
//                 ...state,
//                 { id: Date.now(), text: action.payload, isDone: false }
//             ];
//         case "remove":
//             return state.filter((todo) => todo.id !== action.payload);
//         case "done":
//             return state.map((todo) =>
//                 todo.id !== action.payload ? { ...todo, isDone: !todo.isDone, } : null
//             );
//         default:
//             return state
//     }
// } 

// import { type } from "os";
// import { useReducer } from "react";
// const reducerExample = () => {
    
//     const [state, dispatch] = useReducer(TodoReducer,[])

//     return (
//         <div></div
//     )
// }