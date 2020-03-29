import React from 'react';
import './Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus, faPlus, faPlusCircle, faSkullCrossbones, faThumbsUp} from '@fortawesome/free-solid-svg-icons';


const Data = (props) => {
    
   const {name, email, phone, yearlyIncome, img} = props.data;

    return (
        <div className="main-section">
            <div className="data-section">
                
                <div className="user-image-div">
                    <img src={props.data.img} alt="NOT OK!" />
                </div>
                
                <div className="user-data-div">
                    <h1>Name: {name}</h1>
                    <p>Email: <i><u>{email} </u></i></p>
                    <p>Phone: {phone} </p>
                    <p>City: {props.data.address.city}</p>
                    <br></br> <br/>
                    <h3>Annual Income: $ {yearlyIncome}</h3>
                    <button className="add-button" onClick={()=> props.handleEvent(props.data)}> <FontAwesomeIcon icon={faUserPlus}/> Join me! </button>
                </div>
                
                
            </div>
        </div>
    );
};

export default Data;