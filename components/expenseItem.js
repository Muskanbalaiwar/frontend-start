import "./expenseItem.css";
import ExpenseDate from "./expenseDate";
import ExpenseDetails from "./expenseDetails";

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <ExpenseDetails  amount={props.amount}  location={props.location}   title={props.title} />
    </div>
  );
}

export default ExpenseItem;
