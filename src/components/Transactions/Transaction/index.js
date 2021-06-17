import React from 'react';
import PropTypes from 'prop-types';

import '../style.css'


function Transaction({ date, type, value }) {
    return (
        <div className="transacao-container">
            <p>{date}</p>
            <p>{type}</p>
            <p>R$ {value}</p>
        </div>
    )
};

Transaction.defaultProps = {
    type: '',
    value: '0',
    date: '',
}

Transaction.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    date: PropTypes.string,
}

export default Transaction;
