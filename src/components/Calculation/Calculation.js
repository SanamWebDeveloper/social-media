import React from 'react';
import './Calculation.css';

const Calculation = (props) => {

    //XOZ function!
    const total = props.value.reduce((total, x) => total+ x.yearlyIncome, 0);

    return (
        <div className="calculation">
            <h1>Calculation!</h1>

            <h2>Friends:{props.value.length} </h2>
            <h2> Their Yearly Income:$ {total} </h2>
        </div>
    );
};

export default Calculation;