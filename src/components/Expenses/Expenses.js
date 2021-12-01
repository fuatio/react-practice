import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import "./expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
            </Card >
        </div>
    )
}

export default Expenses





