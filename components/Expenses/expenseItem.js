import "./expenseItem.css";
import ExpenseDate from "./expenseDate";
import ExpenseDetails from "./expenseDetails";
//import Card from "../UI/card";
import React ,{useState} from 'react';

const ExpenseItem=(props) =>{
const [title ,setTitle]  = useState(props.title)
const [amount , setAmount] =useState(props.amount);
  const clickHandler = ()=>{
    setTitle('updated')
  }

  const amountHandler = ()=>{
    setAmount(100)
  }

  
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <ExpenseDetails  amount={amount}
       location={props.location}   title={title} />
       <button onClick={amountHandler}>change amount</button>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
