import React from 'react';
import './User.css';
import userData from '../../userData'
import { useState } from 'react';
import Data from '../Data/Data';
import Calculation from '../Calculation/Calculation';



const User = () => {

    const first15 = userData.slice(0, 15);
    const [users, setUsers] = useState(first15);
    const [friends, setFriends] = useState([]);

    const handleEvent= (props)=>{
        const newFriends = [...friends, props];
        setFriends(newFriends);
    }

    return (
        <div className="users-container">
            <div className="users-div-left">
                {users.map(x => <Data data={x} handleEvent={handleEvent} ></Data> )}
            </div>

            <div className="users-div-right">
              <Calculation value={friends}></Calculation>
            </div>
        </div>
    );
};

export default User;