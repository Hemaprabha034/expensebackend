import React from 'react'

function ExpenseItem(props) {
    const { title, amount, id} = props.expense;
    const type = amount > 0 ? "income" : "expense";
    const handleDelete = () => {
        props.deleteExpense(id);
    }
    return (
        <div className={`expense-item ${type}`}>
            <div className='expense-title'>{title}</div>
            <div className='expense-amount'>${amount}</div>
            <div className='delete-button-overlay'>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
export default ExpenseItem;