import {useEffect, useState} from "react";
import {getCars} from "../service/service.car";
import {Car} from "./Car";

export function CarsEven (){
    const [carsEven, setcarsEven]= useState([]);
     useEffect(()=>{
         getCars().then(carsArr => {
             const filterArr = carsArr.filter(car=> car.model.length % 2 === 0)
             console.log(filterArr)
             setcarsEven(filterArr);
         })
     }, []);
    return(
        <div>
            {
                carsEven&& carsEven.map(value => <Car key={value.id} car={value}/>)
            }
        </div>
    )
}