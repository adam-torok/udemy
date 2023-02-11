import Card from "../UI/Card"
import ExpenseItem from "../Expenses/ExpenseItem"
import ExpensesFilter from "../Expenses/ExpenseFilter"
import { useState } from "react"

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2019');

    const filterChangeHandler = (pickedYear) => {
        setSelectedYear(pickedYear)
    }

    return (
        <div>
            <ExpensesFilter selected={selectedYear} onYearSelection={filterChangeHandler} />
            <Card className='expenses'>
                { props.expenses.map((expense) => (
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount}
                        date={expense.date} 
                        />
                    ))
                }
            </Card>
        </div>
    )
}

export default Expenses