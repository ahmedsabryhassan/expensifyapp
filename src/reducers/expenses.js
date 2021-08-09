
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
export default expenseReducer;