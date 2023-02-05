import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log('updated');
        setTitle('updated');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount} HUF</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;
