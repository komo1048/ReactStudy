import { useState } from "react";

import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "../NewExpense/ExpensesList";
import ExepnesesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [fileteredYear, setFilteredYear] = useState('2022');
  const onChangeYear = (selectYear) => {
    setFilteredYear(selectYear);
  }

  const filterMap = props.items.filter((expense) => {return expense.date.getFullYear().toString() === fileteredYear});

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={fileteredYear} onSelectYear={onChangeYear} />
        <ExepnesesChart expenses={filterMap}/>
        <ExpensesList items={filterMap}/>
      </Card>
    </div>
  );
}

export default Expenses;
