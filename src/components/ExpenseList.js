import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItems';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) =>(
    <div>
        {props.expenses.map((expense)=>{
            
            return <ExpenseListItem key={expense.id} {...expense} />;
        })}
    </div>
);

const mapStateToProps =(state)=>{
    return {
        expenses:selectExpenses(state.expense,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);