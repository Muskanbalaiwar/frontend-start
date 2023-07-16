import React from "react"
import ExpenseItem from "./expenseItem"
import './expensesList.css'

const ExpensesList = props =>{
   
    if(props.items.length===0){
       return <h2 className="expenses-list__fallback">No expense found</h2>
    }
    if(props.items.length===1){
     return <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
    }
   

    return <ul className="expenses-list">
        {props.items.map((expense) => {
            return(<ExpenseItem
            key ={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />);
          })}
    </ul>
  
}

export default ExpensesList