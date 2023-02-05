import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');

        console.log(expenseData);
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler} ype="number" min="0.01" step="0.01" />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type="date" />
                </div>
            </div>

            <div>
                <button 
                    type="submit" 
                    className="new-expense__actions">
                    Add expense
                </button>
            </div>
    </form>
    );
}

export default ExpenseForm;