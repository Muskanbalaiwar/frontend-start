import React from "react";
import './newExpense.css'
import ExpenseForm from "./expenseForm";

const NewExpense = () => {
    return (
      <div className='new-expense'>
        <ExpenseForm />
      </div>
    );
  };
export default NewExpense