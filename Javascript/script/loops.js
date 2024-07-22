let x = myFunction(4, 3)
console.log(x)
function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}


let subjects= ["CN","DBMS", "Automata","Cloud computing", "HTML"];
// for(let index=0;index<subjects.length;index++){
//     let element= subjects[index];
//     console.log( "Subject Name "+element);
// }

// for(element of subjects){
//         console.log("My subject " + element);
//     }



// for each
/*
The forEach() method calls a function for each element in an array.

The forEach() method is not executed for empty elements.
*/
subjects.forEach(function f(element)
{
    console.log("My Subject " + element)
})


let employee={
                name: "Arfain",
                salary: 100,
                relocate: true,
            }

for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}`)
}

// // console.log(100===100.0)
// console.log(typeof(100.0))
// console.log(typeof(100))


let i=0;
// while(i<5){
//     console.log(`${i} is less than 5`);
//     i++;
// }

// Do-While
do{
    console.log(`${i} is less than 5, we are in do while`);
    i++;
}while(i<5);

