import moment from 'moment';
// get visible expenses

const getVisibleExpenses = (expense, {text,sortBy,startDate,endDate}) => {
    return expense.filter((expens )=>{
        const createdAtMoment = moment(expens.createdAt);
        const startDateMatch = startDate?startDate.isSameOrBefore(createdAtMoment,'day'):true; 
        const endDateMatch = endDate?endDate.isSameOrAfter(createdAtMoment,'day'):true; 
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
export default getVisibleExpenses;