let a=10 //it cannnot be redeclare ,but can reassigned and it has scope
const b='aiman' //it cannnot be redeclare,cannot be reassigned and it has scope
var c=515.146 //it can be redeclare,can be reassigned and it doesnt has scope
console.log('integer ',a);
console.log('string ',b);
console.log('float',c);
var Age=22// it can be access in whole program but let and const cant
{
    let name='tony'
    console.log('let scope',name)
    console.log('var scope',Age )//var has global scope
}
//console.log(name)
{
    const name='tony'
    console.log('const scope',name)
    console.log('var scope',Age )
}
//console.log(name)

//Data types
{
let Name='jhon'
let age=22
let salary=55.365
let ispass=true
let city=null
let gender;//undefined
let contact=BigInt(8850827002)

console.log(typeof(Name))
console.log(typeof(age))
console.log(typeof(salary))
console.log(typeof(ispass))
console.log(typeof(city))
console.log(typeof(gender))
console.log(typeof(contact))
}


//object is non primitive data type
//note: value of constant can change in object
//creating an object
const car={
    name:'bugatii',
    price:22.36,
    year:2022,
    color:'black'
};
console.log(car)
console.log(car['name'])//access using key 1st method
console.log(car.color)//access using key 2nd method
console.log(car.color='red')//changing value 


//practice for object

const product={
    name:'ball pen',
    rating:5,
    price:250.3,
    discount:5,
};

console.log(product)
const profile={
    username:'Aiman',
    isfollow:true,
    followers:898,
    following:88,
}
console.log(profile)
document.write('hello')
let demo=prompt('enter name')
document.write(demo)
