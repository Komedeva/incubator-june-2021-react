 export function Car ({car}){
    return(
        <div className={'carModel'} key={car.id}>
            <p><b>Id:</b> {car.id}</p>
            <p><b>Model:</b> {car.model}</p>
            <p><b>Price:</b> {car.price}</p>
            <p><b>Year:</b> {car.year}</p>
        </div>
    );
}