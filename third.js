// //loops in js
// //for loop
// //calculate the sum of num
// let sum=0;
// for(let i=0;i<=5;i++){
//     sum=sum+i
//     }console.log(`sum of number is ${sum}`)//thiis is called string interpolation or template literals(like f-string in python)

// for(let i=0;i<5;i++){
//     console.log('for loop')
// }

// //while

// let i=1;
// while (i<=5) {
//     console.log('while loop');
//     i++;
    
// }

// //do while

// let j=0;
// do{
//     console.log('DO while loop');
//     j++;
// }while(j<=5);

// // for-of loop it used to itrerate the iterators like (strings,array)

// let name='Aiman'//string
// for(let n of name){
//     console.log(n)
// }

// const cars=['vlovo','bmw','ferrari','bugatti']//array
// for(let c of cars){
//     console.log(c)
// }

// //for-in loop it used to iterate the object(key:value) and arrays

// const student={
//     name:'Aiman',
//     age:22,
//     ispass:true,
//     cgpa:8.23,
// };

// for(let s in student){
//     console.log(`keys=${s}\tvalues=${student[s]}`)//using string interpolation
// }
//print even no from 1 to 100

// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value

// let game_no=8;
// let user_no=prompt('Enter the number for game')

// while(user_no!==game_no){
//     user_no=prompt('Wrong number try again');

// }console.log('congrats you enter right number')

//some important  string method

let name='Aiman ansari';

name=name.toUpperCase();//i have to store the updated string in new string bcs strign is immutable
console.log(name)
name=name.toLowerCase()
console.log(name.toLowerCase())
console.log(name.length)
let name2='   Ansari  '
console.log(name2)
name2=name2.trim()
console.log(name2)
console.log(name.slice(1,6))
console.log(name.slice(3))
//String concatination method 1(using concat())
let str='java';
let str2='script';
let res=str.concat(str2)
console.log(res)

//String concatination method 2(using +)
let Name='Aiman';
let Sname='Ansari';
let fname=Name+Sname;
console.log(fname)

//replace
let demo='javascript';
console.log(demo)
let z=demo.replace('java','python')
console.log(z)

//charAt return the character at specify position
Name='Aiman';
console.log(Name.charAt(3))


// Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = “shradhakhapra”
// , username should be “@shradhakhapra13”

let full_name=prompt('Enter a full name')
let username="@"+full_name.concat(full_name.length)
let final_name=username.replace(" ","")
console.log(`Your Username is ${final_name}`)