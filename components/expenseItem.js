import './expenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2023,3,12);
  const expenseItem = 'car Insurance';
  const expenseAmount = 297
  const location ='Agra'
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div>{location}</div>
        <div className="expense-item__price">Rs {expenseAmount}</div>
       
      </div>
    </div>
  );
}

export default ExpenseItem;
