import React from 'react';
import PropTypes from 'prop-types';

import Transaction from './Transaction';
import List from "../List";

const Transactions = ({ transactions }) => {
    return (
        <div data-testid="transactions">
            {/*{transactions && transactions*/}
            {/*    .map(({id, transaction, value, date}) =>*/}
            {/*    <Transaction key={`${id}-${transaction}`} type={transaction} value={value} date={date}*/}
            {/*/>)}*/}
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
