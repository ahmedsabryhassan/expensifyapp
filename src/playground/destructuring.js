/* const person = {
    name:"ahmed",
    age:20,
    location:{
        city:"giza",
        post:23124
    }
};

const  { name = 'anynomus' ,age}=person;
console.log(`${ name } is ${age}`)

const { post:poster =23 , city }=person.location;
console.log(`the post of ${ city } is ${poster}`)
*/


/// array destructuring

const address = ['1299 s juniper street','bola', 'giza', 'egypt' , `123412` ];
const[street, ,city = `bopba `,...country]=address;

console.log(country);