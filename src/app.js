import React from  'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../src/routers/AppRouter';
import configureStore from '../src/store/configureStore';
import {addExpense} from '../src/actions/expenses';
import {setTextFilter} from '../src/actions/filters';
import getVisibleExpenses from '../src/selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expense,state.filters);
    console.log(visibleExpenses);
});
store.dispatch(addExpense({description:'water bill',amount:1223,createdAt:-11000}));
store.dispatch(addExpense({description:'bill',amount:1253,createdAt:-14000}));
store.dispatch(addExpense({description:'rent',amount:1223,createdAt:11000}));
store.dispatch(addExpense({description:'coffe',amount:12123,createdAt:-21000}));

const jsx = (
    <Provider store={store} >
        <AppRouter/>    
    </Provider>
);
ReactDOM.render( jsx, document.getElementById('app'));