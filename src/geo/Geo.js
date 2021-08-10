import './geo.css';
export function Geo (props) {
    let {lat, lng} = props.geo;

    return(
        <div>
            <h4>Geo:</h4>
            <p>lat:{lat}</p>
            <p>lng:{lng}</p>
        </div>
    );
}