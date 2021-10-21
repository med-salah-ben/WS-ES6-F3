let people = [
    {
        name : "yesine", age:19
    },
    {
        name : "nader", age:31
    },
    {
        name : "dali", age:23
    },
    {
        name : "dali", age:30
    },
    {
        name : "bacem", age:31
    }
];
// //function expression 
// let ageSum = people
// .filter(function (person){
//     return person.age>20 && person.age <40
// })
// .filter(function (person){
//     return person.name ==="dali"
// })
// .map(function (person){
//     return person.age;
// })

// console.log(ageSum)


//arrow func

let ageSum = people
.filter((person)=> person.age>15 && person.age<25)
.filter((person)=> person.name ==="yesine")
.map((person)=>person.name)
console.log(ageSum)