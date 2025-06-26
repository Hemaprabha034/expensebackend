import React from 'react';
import ExpenseItem from './ExpenseItem';

function History(props){
    return(
        <div className='history'>
            <h3>History</h3>
            {props.expense.map((expense)=>(
            
         <ExpenseItem
          key={expense.id} 
          expense={expense}
          deleteExpense={props.deleteExpense}
           />   
        ))}
            </div>
    );

};
export default History;