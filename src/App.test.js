import React from "react";
import { screen, render, fireEvent  } from "@testing-library/react";
import App from "./App";
import { calculateNewBalance } from './utils'

describe('Testing App', function () {
        it('should Render App', function () {
            render(<App />)

            expect(screen.getByTestId('deposito-id')).toBeInTheDocument();
            screen.debug();
        });

    it('should app Flow', function () {
        render(<App />)

        const balance = screen.getByText('R$ 1000');
        const transaction = screen.getByLabelText('Saque');
        const value = screen.getByTestId('value');
        const ButtonTransaction = screen.getByText('Realizar operação');

        expect(balance.textContent).toBe('R$ 1000');

        fireEvent.click(transaction, { target: { value: 'saque'}});
        fireEvent.change(value, { target: { value: 10}});
        fireEvent.click(ButtonTransaction);

        expect(balance.textContent).toBe('R$ 990')
    });

    it('Test function', () => {
        const values = {
            transaction: 'saque',
            value: 50
        }
        const newBalance = calculateNewBalance(values, 150)
        expect(newBalance).not.toBe(1000);
    });
});
