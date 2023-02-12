import Card from "../UI/Card"
import ExpensesFilter from "../Expenses/ExpenseFilter"
import { useState } from "react"
import ExpensesList from "./ExpensesList"

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2019');

    const filterChangeHandler = (pickedYear) => {
        setSelectedYear(pickedYear)
    }

    const filteredExpenses = props.expenses.filter(x => {
        return x.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={selectedYear} onYearSelection={filterChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses