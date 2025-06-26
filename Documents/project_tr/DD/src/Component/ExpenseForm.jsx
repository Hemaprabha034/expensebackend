import React from 'react'
import '../index.css'; 
import { useState } from 'react';
export default function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addExpense(title,amount)
    setTitle(" ")
    setAmount(0)
  };
const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <div className='expense-form'>
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='title'className='form-label'>Title</label>
          <input type='text'
           id='title'
           name='title' value={title}
           className='form-input' onChange={handleTitleChange} />
        </div>
        <div className="form-group">
          <label htmlFor='amount'className='form-label'>Amount(₹)</label>
          <input type='number'
           id='amount'
           name='amount' value={amount}
           className='form-input' onChange={handleAmountChange} />
        </div>
        <button type='submit' className='submit-button'>Add Expense</button>
      </form>
    </div>

  )
}
