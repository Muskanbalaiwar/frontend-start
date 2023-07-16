import "./expenseItem.css";
import ExpenseDate from "./expenseDate";
import ExpenseDetails from "./expenseDetails";
import Card from "../UI/card";
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

 function deleteFun(){
    document.getElementById('id1').remove();
  }

  
  return (
    <li>
    <Card  className="expense-item">
      <ExpenseDate date = {props.date}/>
      <ExpenseDetails  amount={amount}  title={title} />
       <button onClick={amountHandler}>change amount</button>
      <button onClick={clickHandler}>Change Title</button>
      <button id="delete" onClick={deleteFun}>delete</button>
    </Card></li>
  );
}

export default ExpenseItem;
