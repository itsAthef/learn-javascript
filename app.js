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

//  Obj of Obj

// const classInfo = {
//     student1 : {
//         name : "athef",
//         age : 23,
//         marks : 95
//     },
//     student2 :{
//         name : "pandu",
//         age : 24,
//         marks : 98
//     },
//     student3:{
//         name : "Rayan",
//         age : 2,
//         marks : 100
//     }
// };


// const students = [
//     {
//         name : "athef",
//         marks : 95
//     },
//     {
//         name : "Pandu",
//         marks : 97
//     },
//     {
//         name :"Rayan",
//         marks : 100
//     }
// ];


// User enters a max number and guess a random generated number between 1 to max

// let max = prompt("Enter a Maximum Number");

// let random = Math.floor(Math.random()*max) + 1;

// let guess = prompt("Guess the Number");

// while(true){
//     if(max == "quit"){
//         console.log("You Quit");
//         break;
//     }
// if (guess == random){
//     console.log(`Your answer ${guess} is correct`);
//     break;
// } else if(guess>random){
//     prompt("Hint : Try for a larger number")
// } else if(guess<random){
//     prompt("Hint : Try for a smaller number")
// }

// else{
//     guess = prompt("You are wrong, Guess again please");
// }

// }





// // PQ 2

// const car ={
//     name : "Lambo",
//     model : "Aventador",
//     colour : "Black"
// };

// // PQ3

// const person={
//     name : "Athef",
//     age : 23,
//     city : "Toronto"
// }

// // PQ1

// let ask = prompt("Click enter");

// let dice = Math.floor(Math.random()*6) + 1;


// functions

// let ask = prompt("Enter your name");

// function name(){
//     console.log(ask);
// }

// name();

// function print(){
//     for(let i = 1;i<=10;i++)
//         console.log(i);
// }

// print();



// function poem () {
//     console.log("If you're bad, I'am your dad")
// }

// poem();


// roll dice

// let roll = prompt("roll the dice");

// function dice(){
//     if(roll == "roll"){
//         console.log(dice());
//     }
    
//    let rand = Math.floor(Math.random()*6)+1;
//    console.log(rand)
// }

// dice();



// let ask = prompt("Enter your name");

// let askAge = prompt("Enter you age");


// function printInfo(name, age){
//     if(ask == name, askAge==age){
//     console.log(`${ask}'s age is ${askAge}`);
// }
// }

// printInfo(ask,askAge);



// Average

// let num1 = prompt("enter first num");

// let num2 = prompt("enter second num");

// let num3 = prompt("enter third number");

// function average(a,b,c){
//     if(a==num1,b==num2,c==num3){
//     console.log((a+b+c)/3);
// }}

// average(num1,num2,num3);


// create a function to get user input birth year, 
//  make sure it is year,
//  make sure the year is not more than 2024
// . and return his age, 



let birthYear;
const currentYear = 2024;

function userAge (birthYear) {
    return currentYear - birthYear;
}

do {
    birthYear  = prompt("Enter your birthday year. it should be between 1 to 2024");
    
} while (isNaN(birthYear) || birthYear < 1 || birthYear > 2024);

console.log(userAge(birthYear));










// function userAge (){
//     while(true){
//         if((birthYear>=currentYear)){
//             alert("Invalid age, please try again")
//             } 
        
//     let age = (currentYear-birthYear)
//     console.log(`Your age is ${age}`)
//     break;}

// }
// userAge();




// 1 year = 365 day 





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


//  30 day question

// let x = 1;
// let y = x-1;

// for(let i=1; i<=30; i++){
//     y=y+x;
//     x=x*2;
// console.log(`day ${i} : ${y}`);
// }
