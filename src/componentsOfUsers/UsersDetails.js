function UsersDetails(props) {
let {match:{params:{id}}}= props;
        console.log(id);
        return (
        <div>{
            <h1>{state.id} {state.name} {state.username}</h1>
            <p>Email:{state.email}</p>
            <p>Phone:{state.phone}</p>
            <p>Website:{state.website}</p>
            <h4>Address:</h4>
            <p>street:{state.address.street}</p>
            <p>suite:{state.address.suite}</p>
            <p>city:{state.address.city}</p>
            <h4>Company:</h4>
            <p>name:{state.company.name}</p>
            <p>bs:{state.company.bs}</p>
            <p>catchPhrase:{state.company.catchPhrase}</p>
            <h4>Geo:</h4>
            <p>lat:{state.address.geo.lat}</p>
            <p>lng:{state.address.geo.lng}</p>
        }
        </div>
    );
}

export {UsersDetails};