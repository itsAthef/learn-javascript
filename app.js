// for loop

// for (let i=1; i<10; i++){
//     console.log(i)
// }

// for (let i=1; i<=15; i=i+2){
//     console.log(i)
// }

// console.log("backwards")

// for (let j=15; j>=1; j=j-2){
//     console.log(j+i)
// }

// print even number

// for (let i=2; i<=20; i=i+2){
//     console.log(i)
// }

//  infinite loop

// for (let i=1 ; ; i++){
//     console.log(i)
// }

// multiplication loop

// for (let i=5; i<=50; i=i+5){
//     console.log(i)
// }

// let n = prompt("enter you number");
// n =parseInt(n)

// for (let i=n; i<=n*10; i=i+n){
//     console.log(i)
// }

// for (let i=1; i<=3; i++){
//     console.log(`Outer loop ${i}`)
//     for(let j=1; j<=3; j++){
//         console.log(j)
// }
// }

// while loop

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++
// }

// let i=0;

// while(i<=20){
//     console.log(i);
//     i=i+2
// }

// let favMovie = "avatar";

// let guess =prompt("enter movie name");

// while((guess!=favMovie)&&(guess!="quit")){
//     guess=prompt("wrong guess, try again")
// } 

// if(guess==favMovie){
//     console.log(`${favMovie} is the right answer`)
// } else{
//     console.log("You quit")
// }

// break statement

// let i = 1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }

// let vehicles = [["ferrari","bmw","audi","lambo","buggati"],["ducatti","honda","bmw","kawasaki","benilli"]];

// for(let i=1; i<=cars.length; i=i+2){
//     console.log(i , cars[i])
// }

// for(let i=cars.length-1; i>=0;i--){
//     console.log(i, cars[i])
// }


// let vehicles = [["ferrari","bmw","audi","lambo","buggati"],["ducatti","honda","bmw","kawasaki","benilli"]];

// for(let i=0;i<vehicles.length;i++){
//     console.log(i, vehicles[i]);
//     for(let j=0;j<vehicles[i].length;j++){
//         console.log(j,vehicles[i][j]);
//     }
// }

// let students = [["Athiii", 95],["pandu",98],["rayan",100]];

// for(let i=0;i<=students.length;i++){
//     console.log(`${i}, name ${students[i][i]}, marks ${students[i][1]}`);
//     for(let j=0;j<=students[i].length;j++)
// }

// for(i=0;i<students.length;i++){
//     console.log(`The Name and marks of the student ${i}`);
//     for(j=0;j<students[i].length;j++){
//         console.log(`${students[i][j]}`);
//     }
// }

// for of 


// let cars = ["ferrari","bmw","audi","lambo","buggati"];

// for (car of cars){
//     console.log(Car);
// }


// To Do app

// let todo = ["eat", "sleep", "code"];

// let list = console.log(todo);

// if (add = prompt("add a task")){
//     console.log(todo.push)
// };


// Todo App Final

// let tasks = [];

// let ask = prompt("Enter your task");

// while(true){
//    if( ask == "quit"){
//     console.log("You have quitted the application")
//     break;
//    }

//    if(ask == "list"){
//     console.log("--------------")
//     for(task of tasks){
//     console.log(task);
//     }
//     console.log("--------------")
//    } else if(ask == "add"){
//     let task = prompt("Add a new Task")
//     tasks.push(task)
//     console.log("Your Task has been added")
//    } 

//    let ask = prompt("Enter your task")


// }



// object literals

// let student = {
//     name : "Athef",
//     age : 23,
//     Marks : 97
// };



// Post twitter object literals

// const post = {
//     username : "athef_ak",
//     content : "Gaming",
//     likes : 75,
//     reposts : 15,
//     tags : ["#gaming", "#solo", "#games"]
// };







// for (let i=1;i<=30;i++){
//     if(i=i*i){
//         console.log(i)
//     }
// }

// let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

// let total = days[1];

// for(let i=1; i<=30;i=+1){
//         console.log(i)
//     }


// for (let i=1; i<=30; i++){
//     for(let a =2; a<=30; a=a*2){
//         console.log((i=a*2)*30)

//     }
// }

// let a = 2;

// for (let i =1; i<=30; i++){
//     if(i*=a)
//     console.log(i)
// }


// while (i=1){
//     if(i=i*2)
//     i++
// }
// console.log(i)



let x = 1;
let y = x-1;

for(let i=1; i<=30; i++){
    y=y+x;
    x=x*2;
console.log(`day ${i} : ${y}`);
}
