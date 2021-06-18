export const calculateNewBalance = (values, balance) => {
    if (values.transaction === 'deposito') {
        return balance + parseInt(values.value)
    } else {
        return balance - parseInt(values.value);
    }
}

