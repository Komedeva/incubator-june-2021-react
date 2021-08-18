
//     fetch('http://195.72.146.25/api/v1/cars', {
// }
//     method: 'DELETE',
// });

// function deleteCar(){
//     return fetch('http://195.72.146.25/api/v1/cars/45', {
//     method: 'DELETE',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//         .then(value=> value.json())
// };


function getCars(){
    return fetch('http://195.72.146.25/api/v1/cars')
        .then(value => value.json())
}

function carPatch({model: model, price: price, year: year}){
    return fetch('http://195.72.146.25/api/v1/cars', {
    method: 'PATCH',
        body: JSON.stringify({
             model, price, year
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
}



const car1 = ({model: model, price: price, year: year}) => {
    return fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify({
            model,
            price,
            year,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
export {car1,getCars, carPatch}