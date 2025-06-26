import React ,{useState,useEffect} from 'react'
import History from './History.jsx'
import ExpenseForm from './ExpenseForm.jsx'
import {v4 as uid} from "uuid";
 import "../index.css";
import BalanceContainer from './BalanceContainer.jsx';


function ExpenseContainer() {


  
  
     const [expense, setExpense]=useState([])

     const fetchExpense = async()=>{
      try{
        const response=await fetch('http://localhost:4000/Expense')
        const data = await response.json()
        setExpense(data)

        
      }catch(error){
        console.error('failed to fetch data',error)

      }
     }

     useEffect(()=>{
      fetchExpense();
     },[])

     const addExpense = async(title,amount)=>{
      try{
        const response = await fetch('http://localhost:4000/Expense',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({title,amount}),
        }) ;

        if(response.ok){
          const newItem=await response.json();
          setExpense((prev)=>[...prev,newItem])
        }else{
          console.error('failed to fetch')
        }
      }catch(error){
        console.error('Failed to add expense',error)

      }
      
     }

    //  const addExpense=(title,amount)=>{
    //     setExpense([
    //         ...expense,{
    //             id:uid(),
    //             title,
    //             amount,
    //         },
    //     ]);
    //  }
    //  const deleteExpense=(id)=>{
    //     setExpense(expense.filter((exp)=>exp.id !== id));
    //  }

    const deleteExpense = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/expense/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setExpense((prev) => {
          const updated = [...prev];
          const index = updated.findIndex((exp) => exp._id === id);
          if (index !== -1) {
            updated.splice(index, 1);
          }
          return updated;
        });
      } else {
        console.error('Failed to delete expense');
      }
    } catch (error) {
      console.error('Error while deleting expense:', error);
    }
  };



  return (
    <div className='expense-container'>
        <h1>Expense Tracker</h1>
        <BalanceContainer expense={expense}/>
        <History expense = {expense} deleteExpense={deleteExpense}/>
        <ExpenseForm addExpense={addExpense}/>
    </div>
  )
}

export default ExpenseContainer