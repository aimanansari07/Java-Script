// let marks=[85,65,56,98,78,45,69]
// let student=['jhon','tony','strak','petre']
// console.log(student)
// console.log(marks)

// //iterate through loops
// //using for loop
// student=['jhon','tony','strak','petre']
// for(let i=0;i<student.length;i++){
//     console.log(student[i])}


//using for-of 
// marks=[85,65,56,98,78,45,69]
// for(let m of marks){
//     console.log(m)
// }
//using for-in loop
// marks=[85,65,56,98,78,45,69]
// for(let m in marks){
//     console.log(marks[m])
// }

//arrays methods
//push
// let cars=['bmw','bugatii','rr','ferrari']
// console.log(cars.push('volvo'))
// console.log(cars)
// //pop it deletes from the ends and also return the deletd value

// console.log(cars)
// console.log(cars.pop())
// console.log(cars)
// //unshift it add elemenets from start
// console.log(cars)
// console.log(cars.unshift('pagani'))
// console.log(cars)
// //shift it remove elemenets from start also return the deletd value
// console.log(cars)
// console.log(cars.shift())
// console.log(cars)
// //Concate
// let fruits=['apple','mango','banana']
// let vegs=['tomato','onion','carrot']
//  let combo=fruits.concat(vegs)
// // let combo=fruits + vegs
// console.log(`after concate ${combo}`)

//tostring it convert arrays to string
    // console.log(student)
    // console.log(student.toString())
    // console.log(student)
    // //slice it retrun the sub-arrays
    // console.log(marks)
    // console.log(marks.slice(1,4))
    // console.log(marks)
//splice it used to update the arrays like(add,delete,replace,slice)
// console.log(marks)
// //add using splice
// console.log(marks.splice(2,0,100))
// console.log(marks)
// //remove using splice
// marks.splice(4,1)//it delets the item at 4th index
// console.log(marks)
// //replace using splice
// marks.splice(4,1,150)
// console.log(marks)

//iterate using while
// let j=0;
// while(j<marks.length){
    
//     console.log(marks[j])
//     j++;
// }

//practice questions
//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]Find the average marks of the entire class.
let marks=[85,97,44,37,76,60]
let sum=0;
for(let m of marks){
    sum+=m;
}
let avg=sum/marks.length;
console.log(`average of marks is ${avg}`)

//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let items=[250,645,300,900,50]

console.log(items)
for(let i=0;i<items.length;i++){
    let dp=items[i]/10;
    items[i]=items[i]-dp;
}
console.log(items)  

//Qs. Create an array to store companies -> “Bloomberg” “Microsoft” “Uber“Google” “IBM” “Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies=['bloomberg','microsoft','uber','Google','IBM','Netflix'];
console.log(companies)
companies.shift()
console.log(companies)
companies.splice(1,1,'Ola')
console.log(companies)
companies.push('Amazone')
console.log(companies)