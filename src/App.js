import {useReducer} from "react";
import './App.css'
const reducer = (state = {a: 0, b: 0, c: 0}, action) => {
    if (action.obj === '1' && action.click === '+') {
        return {...state, a: state.a++}
    } else if (action.obj === '1' && action.click === '-') {
        return {...state, a: state.a--}

        } else if (action.obj === '2' && action.click === '-') {
            return {...state, b: state.b--}
        } else if (action.obj === '2' && action.click === '+') {
            return {...state, b: state.b++}

        } else if (action.obj === '3' && action.click === '-') {
            return {...state, c: state.c--}
        } else if (action.obj === '3' && action.click === '+') {
            return {...state, c: state.c++}
        return {...state};
    }
}
export default function App() {
    let [state, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});
    let {a, b, c} = state;


    return (
        <div>
            <h2>state 1 - {a} </h2>
            <button className="button is-success is-light" onClick={() => dispatch({obj: '1', click: '-'})}>minus
            </button>
            <button className="button is-success is-light" onClick={() => dispatch({obj: '1', click: '+'})}>plus
            </button>
            <h2>state 2 - {b} </h2>
            <button className="button is-warning is-light" onClick={() => dispatch({obj: '2', click: '-'})}>minus
            </button>
            <button className="button is-warning is-light" onClick={() => dispatch({obj: '2', click: '+'})}>plus
            </button>
            <h2>state 1 - {c} </h2>
            <button className="button is-info is-light" onClick={() => dispatch({obj: '3', click: '-'})}>minus</button>
            <button className="button is-info is-light" onClick={() => dispatch({obj: '3', click: '+'})}>plus</button>

        </div>
    );
}