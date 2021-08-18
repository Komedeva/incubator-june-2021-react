import {useEffect, useState} from "react";
import {car1, getCars} from "../cars.service/CarService";
import './../carstyle.css';
import {carDelete, carPut} from "../cars.service/CarService";

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
        carPut({model, price, year}, id)
            .then((json) => {
                console.log(json);
                setCheckCar(json);
            });
    }

    const DeleteCar = (id) => {
        carDelete(id);

        setCars(cars.filter((item) => item.id !== id));
    }

    return (
        <div className={'cars'}>
            <div className={'carForm'}>
                <form className={'formochka'} onSubmit={onsubmitContForm}>
                    <div>
                        <p>Model: </p> <input type="text" name={model} value={model} onInput={onInputChangeModel}/>
                    </div>

                    <div>
                        <p>Price: </p> <input type="text" name={price} value={price} onInput={onInputChangePrice}/>
                    </div>

                    <div>
                        <p>Model: </p> <input type="text" name={year} value={year} onInput={onInputChangeYear}/>
                    </div>

                    <div>
                        <button>Save</button>
                    </div>
                </form>
            </div>

            <div className={'carsInfo'}>
                {
                    cars.map(value =>
                        <div className={'carModel'} key={value.id}>
                            <p><b>Id:</b> {value.id},</p>
                            <p><b>Model:</b> {value.model},</p>
                            <p><b>Price:</b> {value.price},</p>
                            <p><b>Year:</b> {value.year}</p>

                            <button onClick={() => onEditCar(value.id)}>Edit</button>
                            <button onClick={() => DeleteCar(value.id)}>Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}