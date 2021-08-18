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
        .then((response) => response.json());
}


function getCars() {
    return fetch('http://195.72.146.25/api/v1/cars')
        .then(value => value.json())
}


function carPut({model, price, year}, id) {
    return fetch('http://195.72.146.25/api/v1/cars/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            model, price, year
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}


function carDelete(id) {
    return fetch('http://195.72.146.25/api/v1/cars/' + id, {
        method: 'DELETE',
    })
}


export {car1, getCars, carPut, carDelete}