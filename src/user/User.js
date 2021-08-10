import {Address} from "../address/Address";
import {Company} from "../company/Company";
import './Userstyle.css'

export function User (props){
    let{id, name, username, email, website, phone, address, company}= props.user;
    return(
        <div className={'user'}>
            <div className={'wrap'}>
                <h2>{id} {name} {username}</h2>
                <p>Email:{email}</p>
                <p>Website:{website}</p>
                <p>Phone:{phone}</p>
                <Address address={address}/>
                <Company company={company}/>

            </div>
        </div>
    )
}