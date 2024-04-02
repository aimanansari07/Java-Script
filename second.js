//comments in js  
/*hello iam aiman (multiline )
ansari*/

//hello(ye single line)

//operators
//arithemetic opt
// let a =10;
// let b=5;
// console.log(' a +b is ',a+b);
// console.log(' a -b is ',a-b);
// console.log(' a*b is ',a*b);
// console.log('a /b is ',a/b);//it return quetiont
// console.log(' a**b is ',a**b);
// console.log(' a%b is ',a%b);//it return remainder
//assignment opt

// let a =10;
// console.log('a+= is',a+=1);
// console.log('a-= is',a-=1);
// console.log('a*= is',a*=2);
// console.log('a/= is',a/=2);
// console.log('a**= is',a**=2);
// console.log('a%= is',a%=1);

//comparison opt
// let a =10;
// let b=5;

// console.log('==== is',a===b);
// console.log('=== is',a==b);
// console.log('!== is',a!==b);//not equal with type
// console.log('!= is',a!=b);//not equal without type

//logical opt
// let a =10;
// let b=5;

// console.log('&& opt',a>b && b<a);
// console.log('|| opt',a>b || b<a);
// console.log('! opt',!(a>b && b<a));

//condtional statemets
//if,ifesle,if-else-if,else

//firt if-else
// let num=prompt('enter a number');
// if(num%2==0){
//     console.log('this num is even',num)
// }else{
//     console.log('this num is odd',num)
// }

// //Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

// let num=prompt('enter a number ')
// if (num%5==0){
//     console.log('this numbr is multiple of 5 ',num)
// }else{
//     console.log('this numbr is not multiple of 5 ',num)
// }

//Write a code which can give grades to students according to their scores:
// Percentage Grade
// 90 and above	A
// 80 to 89	B
// 60 to 79	C
// 33 to 59	D
// below 33	F

// let marks=prompt('enter marks ')

// if(marks >= 90 && marks <= 100){
//     console.log('A');
// }else if(marks >= 80 && marks <= 89){
//     console.log('B');
// }else if(marks >= 60 && marks <= 79){
//     console.log('C');
// }else if(marks >= 33 && marks <= 59){
//     console.log('D');
// }else if(marks >= 0 && marks < 33){
//     console.log('F');
// }

//ternary opt
//it used to check small condition or single line condition

//syntax condition ? true output : false output

let age=prompt('enter age ');
let res= age>18 ? 'adult':'not adult'; 
console.log(res)