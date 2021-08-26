import {useReducer} from "react";
import './App.css'

const reducer = (state, action) => {
    switch (action.click) {
        case '+':
            return {...state, [action.obj]: state[action.obj] + 1};
            // return {...state, a: state.a -1}
        case '-':
            return {...state, [action.obj]: state[action.obj] - 1};
        default:
            return state
    }
}

export default function App() {
    let [state, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});
    let {a, b, c} = state;


    return (
        <div>
            <h2>state 1 - {a} </h2>
            <button className="button is-success is-light" onClick={() => dispatch({obj: 'a', click: '-'})}>minus
            </button>
            <button className="button is-success is-light" onClick={() => dispatch({obj: 'a', click: '+'})}>plus
            </button>
            <h2>state 2 - {b} </h2>
            <button className="button is-warning is-light" onClick={() => dispatch({obj: 'b', click: '-'})}>minus
            </button>
            <button className="button is-warning is-light" onClick={() => dispatch({obj: 'b', click: '+'})}>plus
            </button>
            <h2>state 1 - {c} </h2>
            <button className="button is-info is-light" onClick={() => dispatch({obj: 'c', click: '-'})}>minus</button>
            <button className="button is-info is-light" onClick={() => dispatch({obj: 'c', click: '+'})}>plus</button>

        </div>
    );
}