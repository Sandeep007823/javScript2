// Q1. Add two Number

let num = 20;
let num2 = 30;
console.log(num+num2);

// Q2. find if the conditions are obeyed or not ?

let a = 40;
let b = 30;
 
if(a > b){
    console.log("True")
}
else{
    console.log("False")
}

// Q3. Check the condition

let i = 30;
let j = 60;

// 1.
 if(i %10 == 0 && j%10 == 0){
    console.log("True");
 }
 else{
    console.log("False");
 }
 // 2.
 if(i %10 != 0 && j%10 != 0){
    console.log("True");
 }
 else{
    console.log("False");
 }
 // 3.
 if(i %10 == 0 || j%10 == 0){
    console.log("True");
 }
 else{
    console.log("False");
 }

 // Q4. find the first digit of a 4 digit number.

 const first = (num) =>{
     while(num > 10){
        num /= 10;
     }
     let digit = Math.floor(num)
     console.log(digit)
 }
  first(6582);
  
// Q5. find the last digit of a 4 digit number

   let number = 6458;
   let last = number%10;
  
    console.log(last)

// Q6. Find the remainder 
 let x = 42;
 let y = 7 ;

 console.log(x % y)

 // Q7 Multiply two Numbers 
   let z = 5;
   let p = 9;

   console.log(z * p)

// Q8 Marks Calculator
  
 let marks = [78,65,48,95,25,45]
     sum = 0;
   for(let n of marks){
      sum += n 
   }
    console.log(sum)
    let average = sum/marks.length;
    console.log(Math.floor(average))