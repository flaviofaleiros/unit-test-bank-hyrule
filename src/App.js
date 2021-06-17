import React, { useEffect, useState } from 'react';

import Account from './components/Account';
import Transactions from './components/Transactions';
import api from './api';

import './App.css';
import Header from "./components/Header";

export const calculateNewBalance = (values, balance) => {
  if (values.transaction === 'deposito') {
    return balance + parseInt(values.value)
  } else {
    return balance - parseInt(values.value);
  }
}

function App() {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  async function loadTransactions() {
    const transactions = await api.listaTransacoes();
    setTransactions(transactions);
  }

  async function getBalance() {
    setBalance(await api.buscaSaldo());
  }

  function performTransaction(values) {
    const newBalance = calculateNewBalance(values, balance);

    api.atualizaSaldo(newBalance).catch((error) => console.error(error))
    api.atualizaTransacoes(values).catch((error) => console.error(error))
    
    setBalance(newBalance);
    setTransactions([values]);
  }

  useEffect(() => {
    getBalance();
    loadTransactions();
  }, [balance])

  return (
    <div className="App">
      <Header title={'Hyrule Bank'}/>
      <Account balance={balance} performTransaction={performTransaction}/>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
