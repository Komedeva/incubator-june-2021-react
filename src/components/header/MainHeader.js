import {useEffect, useState} from "react";
import {Header} from "./Header";

const MainHeader =()=> {
    let [header, setHeader]=useState([])
    useEffect(() => {
        Header().then(value => setHeader([...value]));
    }, []);
    return(
        <div>
            {header.map(value => <Header  header={value}/>)}
        </div>
    );
}

export {MainHeader}
