import React from 'react'
import CurrencyItem from './CurrencyItem';

function BalanceContainer(props) {
    
    const {expense} = props;
    let income=0;
    let expenses=0;
    expense.forEach((item)=>{
        let {amount} = item;
        if(amount > 0){
            income += parseInt(amount);
        }
        else{
            expenses += parseInt(amount);
        }
    })
    return (
        <div className='balance-container'>
            <CurrencyItem title="Income" amount={income} type="income" />
            <CurrencyItem title="Expenses" amount={expenses} type="expense" />
            <CurrencyItem title="Balance" amount={income + expenses} type="balance" />
        </div>
    )
}

export default BalanceContainer;