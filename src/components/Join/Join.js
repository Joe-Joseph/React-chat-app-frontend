import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../Join/Join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleInputName = (event) => {
        setName(event.target.value);
    }

    const handleInputRoom = (event) => {
        setRoom(event.target.value);
    }

    return (
        <div className="joinOuterContainer">
           <div className="joinInnerContainer">
               <h1 className="heading">Join</h1>
               <div><input placeholder="Name" className="joinInput" type="text" onChange={handleInputName}/></div>
               <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={handleInputRoom}/></div>
               <Link to={`/chat?name=${name}&room=${room}`}>
                    <button onClick={event => (!name || !room) && event.preventDefault()} className="button mt-20" type="submit">Sign In</button>
               </Link>
           </div>
        </div>
    )
}

export default Join;
