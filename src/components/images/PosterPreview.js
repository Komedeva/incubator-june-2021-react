import {useEffect, useState} from "react";
//
// export function CarsEven (){
//     const [carsEven, setcarsEven]= useState([]);
//     useEffect(()=>{
//         getCars().then(carsArr => {
//             const filterArr = carsArr.filter(car=> car.model.length % 2 === 0)
//             console.log(filterArr)
//             setcarsEven(filterArr);
//         })
//     }, []);
//     return(
//         <div>
//             {
//                 carsEven&& carsEven.map(value => <Car key={value.id} car={value}/>)
//             }
//         </div>
//     )
// }
// export function Movies() {
//     let [movie, setMovies] = useState([]);
//     useEffect(() => {
//         DiscoverMovie().then(data => setMovies([...data]));
//     }, []);
//     return (
//         <div>
//             {movie.map(movie => <Movie key={movie.id} {...movie}/>)}
//         </div>
//     );
// }

// import {getIMG} from "../../service/MovieService";
//
// export function getImg(){
//     let [img, setImg]= useState([]);
//     useEffect(()=>{
//         getIMG().then(value => setImg([...value]))
//     }, []);
//     return(
//         <div>
//             {img.map(img=><getIMG key={img.id} {...img}/>)}
//         </div>
//     );
// }