import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE

const addExpense = (
    { 
        description='' ,
        note='',
        amount =0,
        createdAt=0 }={}
) =>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {})=>({
    type:'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = (text='') => ({
    type:'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type:'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate =(startDate = undefined)=>({
    type:"SET_START_DATE",
    startDate
});
// SET_END_DATE
const setEndDate =(endDate = undefined )=>({
    type:"SET_END_DATE",
    endDate
});

// expense reducer

const expenseReducerDefultState = [];

const expenseReducer = ( state = expenseReducerDefultState, action ) =>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>(id !== action.id));
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(action.id == expense.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

// filter reducer

const filtersReducerDefultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = ( state = filtersReducerDefultState, action ) =>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }
};

// get visible expenses

const getVisibleExpenses = (expense, {text,sortBy,startDate,endDate}) => {

    return expense.filter((expens )=>{
        const startDateMatch = typeof startDate !== 'number' || expens.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expens.createdAt <= endDate;
        const textMatch = expens.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1: -1;
        }
        else if (sortBy == 'amount'){
            return a.amount < b.amount ? 1: -1;
        }
        else{
            return 0;
        }
    });
}


// store creating
const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filters:filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expense,state.filters);
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description:'cove',amount:1223,createdAt:-11000}));
const expenseTwo = store.dispatch(addExpense({description:'rent',amount:123,createdAt:-1000}));
store.dispatch(sortByAmount());


/*
store.dispatch(removeExpense( { id:expenseTwo.expense.id } ));
store.dispatch(editExpense(expenseOne.expense.id,{ amount:555 }))
store.dispatch(setTextFilter('e'));

store.dispatch(sortByDate());
store.dispatch(setStartDate(0));
*/

const demoState = {
    expense:[{
        id:'asdasdqwwc',
        description:"????????????",
        note:'final payymen',
        amount:213124,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
};
