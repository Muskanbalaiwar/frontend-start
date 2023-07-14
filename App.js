import ExpenseItem from "./components/Expenses/expenseItem";
import "./App.css";
import './components/Expenses/expenses.css'
import Card from './components/UI/card'
import NewExpense from './components/newExpense/newExpense'



 const App=() =>{
  const expense = [
    { title: "car Insurance", amount: 200, date: new Date(2023, 3, 12), location:"agra" ,id:'id1'},
  ];
  

  
  return (
    <div>
    <NewExpense></NewExpense>
    <Card className="expenses">
      <ExpenseItem id={expense[0].id}
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location = {expense[0].location}
      ></ExpenseItem>
      <ExpenseItem id='id2'
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location = {expense[0].location}
      ></ExpenseItem>
      <ExpenseItem id='id3'
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location = {expense[0].location}
      ></ExpenseItem>
      <ExpenseItem id='id4'
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        location = {expense[0].location}
      ></ExpenseItem>
      
    </Card>
    </div>
  );
}


export default App;
