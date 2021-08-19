import {CarsEven} from "./car/CarsEven";
import {CarsOdd} from "./car/CarOdd";
import {BrowserRouter as Router, Route, Link, Switch
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/EvenCar'}> Even car </Link>
                <br/>
                <Link to={'/OddCar'}> Odd car </Link>
            </div>
            <div>
                <Route path={'/EvenCar'}>
                    <CarsOdd/>
                </Route>

                <Route path={'/OddCar'}>
                    <CarsEven/>
                </Route>

            </div>


        </Router>
    );
}