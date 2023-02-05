import Card from "../UI/Card"
import ExpenseItem from "../Expenses/ExpenseItem"
import ExpensesFilter from "../Expenses/ExpenseFilter"
import { useState } from "react"

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2019');

    const filterChangeHandler = (pickedYear) => {
        console.log(pickedYear);
        setSelectedYear(pickedYear)
    }

    return (
        <div>
            <ExpensesFilter selected={selectedYear} onYearSelection={filterChangeHandler} />
            <Card className='expenses'>
                <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />

                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                
                <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
            </Card>
        </div>
    )
}

export default Expenses