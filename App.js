import ExpenseItem from "./components/Expenses/expenseItem";
import "./App.css";
import './components/Expenses/expenses.css'

 const App=() =>{
  const expense = [
    { title: "car Insurance", amount: 200, date: new Date(2023, 3, 12), location:"agra" },
  ];
  

  
  return (
    <div className="expenses">
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location = {expense[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location = {expense[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location = {expense[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location = {expense[0].location}
      ></ExpenseItem>
      
    </div>
  );}


export default App;
