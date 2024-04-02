//Function with no paramter
function demo(){
    console.log('Demo function');
}
demo();

//function with parameter

function sum(a,b) {
    console.log('addition is ',a+b)
}sum(10,5)

//function with return statemets
function mul(a,b) {
    return a*b;
} 
// let res= mul(5,2) first method to display return result
// console.log("multiplication is ",res) 

//second method to display return result
console.log("multiplication is",mul(5,2))

//arrow function (it provide a compact way to define a function but generally it use for short process)

let arrow=() => { //Arrow function with no parameter
console.log('Arrow Function');
};
arrow()

//arrow fucntion with parameter

let cal=(a,b)=>{
    console.log('addtion using arrow ',a+b)
    // return `addtion using arrow ${a+b}` arrow using return
}
console.log(cal(5,10))

//Qs. Create a function using the “function” keyword that takes a String as an argument &returns the number of vowels in the string.

// let str=prompt("Enter a string")
// let count=0;
//1ST method
// function vovels(){for(let i=0;i<str.length;i++){
//     if (str[i]==="a"|| str[i]==="e"|| str[i]==="i"|| str[i]==="o"|| str[i]==="u") {
//         count++;
        
//     }
// }console.log("Number of vovels in the given string is ",count)}
// vovels()

//2 method
// function vov(){
//     let vovels=['a','e','i','o','u','A','E','I','O','U']    
// for(let i=0;i<str.length;i++){
//     for (let j=0;j<vovels.length;j++){
//         if(str[i]===vovels[j]){
//             count++;
//         }
//     }
// }console.log("Number of vovels in the given string is ",count)
// }
// vov();  

//Same question by using arrow function
// str=prompt("Enter a string")
// count=0;
// let arrowVov=(str)=>{
//     let vovels=['a','e','i','o','u','A','E','I','O','U']    
//     for(let i=0;i<str.length;i++){
//         for (let j=0;j<vovels.length;j++){
//             if(str[i]===vovels[j]){
//                 count++;
//             }
//         }
//     }console.log("Number of vovels in the given string is ",count)
// }
// arrowVov(str);

//for each loop (it is a higher order methods that is used to perform some operations on array elements)

let cities=['mumbai','delhi','pune','goa']
cities.forEach((city)=>{ //it used with arrow function
    console.log(city)
})

//Qs. For a given array of numbers, print the square of each value using the forEach loop.
let num=[3,2,6,4]
console.log(num)
num.forEach((n)=>{
    console.log(`square of ${n} is ${n*n}`)
})

//map method(it same like foreach method but it returns the new array after perfroming some operations on each elemet of an array)
// num=[3,2,6,4]
// num.map(function val(num){ //map using noraml function
//     console.log(num)
// })

num=[3,2,6,4]
//map using arrow function
num=[3,2,6,4]
num.map((val)=>{
    console.log(val)
})

//craete new using existing array after performing some operations on old array
num=[3,2,6,4]
let newarray =num.map((val)=>{
   return val*2;
})
console.log(newarray)//new array
console.log(num)//old array(map not change the value of an old array after performanig operation on it it will create new array )

//filter method(it used to filtr the result of operations performed on array it only store ture values to new array ir it returns the filter array)

// let item=[1,2,3,4,5,6]
// let even= item.filter((val)=>{
//     return val%2==0 ;//filter only even values from array and then store it to newarray
// })

// console.log('even array',even)
// console.log('old array',item)//(filter not change the value of an old array after performanig operation on it it will create new array )


// //reduce method(it returns only single values after performing operations on array)
//  //exmple calcluate the sum of array elemnts

// let elem=[1,2,3,4,5,6,10,45]
// // let res=elem.reduce((pre,cur)=>{//pre used to previous value and cur used to store the curent value
// //     let sum=pre+cur
// //     return sum;
// // })
// // console.log(`sum of array elemnts ${res} `)

// //calcluate the largest element in array using reduce
// elem=[100,2,3,4,5,6,10,450]
// let lar=elem.reduce((pre,cur)=>{
//    return pre>cur ? `largest element in array is ${pre}`:`largest element in array is ${cur}`;
    
// })
// console.log(lar)

//Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
// let marks=[75,65,36,90,95,93,98,45]
// let res=marks.filter((val)=>{
//     return val > 90;
// })
// console.log(res)




//Qs)Take a number n as input from user. Create an array of numbers from 1 to n.
//1)Use the reduce method to calculate sum of all numbers in the array.
//2)Use the reduce method to calculate product(factorial) of all numbers in the array.


let n=prompt('enter a size of array')
let numbers=[];
for(let i=1;i<=n;i++){
   numbers[i-1]=i //[n-1](number 1 ki index(0),and 2 ki (1).....to n number)
}
console.log(numbers)

let add=numbers.reduce((pre,cur)=>{
    return pre+cur
})
console.log('sum of all numbers in the array is ',add)

let factorial=numbers.reduce((pre,cur)=>{
    return pre*cur
})
console.log("factorial is ",factorial)