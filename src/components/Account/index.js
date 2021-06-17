import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Account = ({ balance, performTransaction }) => {
    const [values, setValues] = useState({transaction: '', value: 0});

    function handleChange(event) {
        const { name, value } = event.target;
        const updateValues = { ...values, [name]: value};

        setValues(updateValues);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const transactionDate = new Date().toLocaleDateString('pt-br');
        performTransaction({...values, date: transactionDate});
    }

    return <div className="Conta-header">
        <h2>Conta</h2>
        <p>Saldo: <span data-testid="account-balance" className="Saldo-valor">{`R$ ${balance}`}</span></p>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Depósito
                    <input
                        type="radio"
                        name="transaction"
                        value="deposito"
                        onChange={handleChange}
                        data-testid="transaction"
                        checked={values.transaction === 'deposito'}
                    />
                </label>
            </div>
            
            <div>
                <label>
                    Saque
                    <input
                        type="radio"
                        name="transaction"
                        value="saque"
                        data-testid="transaction"
                        onChange={handleChange}
                        checked={values.transaction === 'saque'}
                    />
                </label>
            </div>

            <label>Valor:</label>
            <input
                type="text"
                name="value"
                value={values.value}
                data-testid="value"
                onChange={handleChange}
            ></input>

            <div>
                <button type="submit">
                    Realizar operação
                </button>
            </div>
        </form>
    </div>
};

Account.defaultProps = {
    balance: 0,
}

Account.propTypes = {
    balance: PropTypes.number,
};

export default Account;
