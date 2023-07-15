import ExpenseItem from "./components/Expenses/expenseItem";
import "./App.css";
import "./components/Expenses/expenses.css";
import Card from "./components/UI/card";
import NewExpense from "./components/newExpense/newExpense";

import ExpensesFilter from "./components/Expenses/expenseFilter";

import React, { useState } from "react";

const dummy_expenses = [
  {
    title: "car Insurance",
    amount: 200,
    date: new Date(2022, 3, 12),
    id: "id1",
  },
];

const App = () => {
 const [expenses,setExpenses] =useState(dummy_expenses)

  const addExpenseHadler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
  };

  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

 

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHadler} />
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => {
          return(<ExpenseItem
          key ={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />);
        })}
      </Card>
    </div>
  );
};

export default App;
