 export function Car (){
    return(
        <div className={'carModel'} key={value.id}>
            <p><b>Id:</b> {value.id}</p>
            <p><b>Model:</b> {value.model}</p>
            <p><b>Price:</b> {value.price}</p>
            <p><b>Year:</b> {value.year}</p>
        </div>
    );
}