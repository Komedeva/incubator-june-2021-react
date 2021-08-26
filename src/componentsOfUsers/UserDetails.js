export default function UserDetails(props) {
     console.log(props);

    const {state: user} = props.location;
    return (
        <div>
             <h3>{user.id} {user.name} {user.username}</h3>
             <p>Email:{user.email}</p>
             <p>Phone:{user.phone}</p>
             <p>Website:{user.website}</p>
                <h4>Address:</h4>
                <p>street:{user.address.street}</p>
                <p>suite:{user.address.suite}</p>
                <p>city:{user.address.city}</p>
             <h4>Company:</h4>
             <p>name:{user.company.name}</p>
             <p>bs:{user.company.bs}</p>
             <p>catchPhrase:{user.company.catchPhrase}</p>
             <h4>Geo:</h4>
             <p>lat:{user.address.geo.lat}</p>
             <p>lng:{user.address.geo.lng}</p>
        </div>
    );
}
