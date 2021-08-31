import {useDispatch, useSelector} from "react-redux";

export default function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash)
    console.log(cash)

    const getCash = () => {
        dispatch({type:"GET_CASH", payload:10 })
    }

    const addCash = () => {
        dispatch({type:"ADD_CASH", payload:5})
    }


    return (
        <div style={{displey: "flex"}}>
            <button onClick={() => getCash()}>GET CASH</button>
            <button onClick={() => addCash()}>ADD CASH</button>
        </div>
    );
}