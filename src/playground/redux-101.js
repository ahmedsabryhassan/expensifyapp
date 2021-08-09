import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1 } = {} )=>({type:'INCREMENT',incrementBy });
const decrementCount = ({decrementBy = 1} = {} )=>({type:'DECREMENT',decrementBy });
const resetCount = ()=>({type:'RESET'});
const setCount = ({num = 0} = {} )=>({type:'SET',count:num});

const countReducers = (state = {count:0},action)=>{

    const {incrementBy,decrementBy,type} = action;

    switch (type) {
        case "INCREMENT":
            return {
                count: state.count + incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - decrementBy
            };
        case "RESET":
            return {
                count: 0
            };    
        case "SET":
            return {
                count: action.count
            };                      
        default:
           return state;
    }
}
const store = createStore(countReducers);

store.subscribe (()=>{
    console.log(store.getState())
});
 store.dispatch(incrementCount({incrementBy:123}));

 store.dispatch(decrementCount({decrementBy:12}));

 store.dispatch(resetCount());

store.dispatch(setCount({num:123}));

