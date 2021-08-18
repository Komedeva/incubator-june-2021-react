import {useEffect, useState} from "react";
import {car1, getCars} from "../cars.service/CarService";
import './../carstyle.css';
import {carDelete, carPatch} from "../cars.service/CarService";

export default function ControlledForm() {
    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');
    let [cars, setCars] = useState([]);
    let [checkCar, setCheckCar] = useState({})

    useEffect(() => {
        getCars().then(value => setCars(value));
    }, [checkCar]);


    const onsubmitContForm = (e) => {
        e.preventDefault();
        let tempCar = {model, price, year}

        car1(tempCar).then(value => {
            console.log(value);
            setCheckCar(value);
        });
    }

    const onInputChangeModel = (e) => {
        setModel(e.target.value);
    }

    const onInputChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const onInputChangeYear = (e) => {
        setYear(e.target.value);
    }

    const onEditCar = (id) => {
        carPatch({model, price, year}, id)
            .then((json) => {
                console.log(json);
                setCheckCar(json);
            });
    }

    const DeleteCar = (id) => {
        carDelete(id);

        setCars(cars.filter((item)=> item.id !== id));
    }

    return (
        <div className='cars' style={{display: "flex", flexDirection: "column-reverse"}}>
            {cars.map(value => <div className='Carmodel'
                                    key={value.id}> Id: {value.id} Model: {value.model}, Price: {value.price},
                Year: {value.year}
                <button onClick={() => onEditCar(value.id)}>Edit</button>
                <button onClick={() => DeleteCar(value.id)}>Delete</button>
            </div>)}

            <form onSubmit={onsubmitContForm}>
                <input type="text" name={model} value={model} onInput={onInputChangeModel}/>
                <input type="text" name={price} value={price} onInput={onInputChangePrice}/>
                <input type="text" name={year} value={year} onInput={onInputChangeYear}/>
                <input type="submit" value={'save'}/>
            </form>
        </div>
    )
}