import {useState} from "react";
import {car1} from "../cars.service/CarService";

export default function ControlledForm() {
    let [model, setModel]= useState('');
    let [price, setPrice]= useState('');
    let [year, setYear]= useState('');
    let [car, setCar]= useState({model:'', price:'', year:''})


    const onsubmitContForm = (e) => {
        e.preventDefault();

        let tempCar= {model, price, year}
        setCar({...tempCar})
        car1(tempCar).then(value => console.log(value));
    }

    const onInputChangeModel= (e)=>{
        setModel(e.target.value);
    }

    const onInputChangePrice= (e)=>{
        setPrice(e.target.value);
    }

    const onInputChangeYear= (e)=>{
        setYear(e.target.value);
    }

    return(
    <div>
    <form onSubmit={onsubmitContForm}>
        <input type="text" name={model} value={model} onInput={onInputChangeModel}/>
        <input type="text" name={price} value={price} onInput={onInputChangePrice}/>
        <input type="text" name={year} value={year} onInput={onInputChangeYear}/>
        <input type="submit" value={'save'}/>
    </form>
    </div>
        )
}