import {Geo} from "../geo/Geo";

export function Address (props) {
    let {street, suite, city, zipcode, geo}= props.address;

    return(
        <div>
           <h4>Address:</h4>
           <p>street:{street}</p>
           <p>suite:{suite}</p>
           <p>city:{city}</p>
           <p>zipcode:{zipcode}</p>
            <Geo geo={geo}/>
        </div>
    );
}