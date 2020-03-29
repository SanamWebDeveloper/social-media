import React from 'react';
import './Calculation.css';

const Calculation = (props) => {

    //XOZ function!
    const total = props.value.reduce((total, x) => total+ x.yearlyIncome, 0);
    const lovers = props.value.reduce((lovers, y) => lovers+ y.id, 0);

    return (
        <div className="calculation-section">
                <div className="calculation-header">
                     <h1>Calculations!</h1>
                </div>
                <div className="calculation-body">
                    <h2>Friends:{props.value.length} </h2>
                    <h2>Current gf's/bf's: {lovers} </h2>
                    <h2>Annual Income:$ {total} (only)</h2>
                </div>
        </div>
    );
};

export default Calculation;