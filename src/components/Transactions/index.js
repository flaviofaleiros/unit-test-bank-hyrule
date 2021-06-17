import React from 'react';
import PropTypes from 'prop-types';

import List from "../List";

const Transactions = ({ transactions }) => {
    return (
        <div data-testid="transactions">
            <List data={transactions} />
        </div>
    )
};

Transactions.defaultProp = {
    transactions: [{
        type: '',
        value: '',
        date: '',
    }],
}

Transactions.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        value: PropTypes.string,
        date: PropTypes.string,
    })),
}


export default Transactions;
