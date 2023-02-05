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

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type="text" />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} ype="number" min="0.01" step="0.01" />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type="date" />
                </div>
            </div>

            <div>
                <button type="submit" className="new-expense__actions">
                    Add expense
                </button>
            </div>
    </form>
    );
}

export default ExpenseForm;