import {Car} from "./Car";
import {getCars} from "../service/service.car";
import {useEffect, useState} from "react";

export function CarsOdd (){
const [carsOdd, setCarsOdd]= useState([]);

useEffect(()=>{
    getCars().then(carsArr => {
        const filterArr = carsArr.filter(car=> car.model.length % 2 !== 0)
        console.log(filterArr)
        setCarsOdd(filterArr);
    })
}, []);

    return(
        <div>
            {
                carsOdd&& carsOdd.map(value=> <Car key={value.id} car={value}/>)
            }
        </div>
    )
}

