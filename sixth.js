//access html elemts using js 
//access using selectors
//1 access html elements  using tag selectors
let head=document.getElementsByTagName('h1')
console.dir(head) 
console.log(head)
//2 access html elements  using id selectors
let para=document.getElementById('para')
console.dir(para)
console.log(para)
//3 access html elements  using class selectors
let div=document.getElementsByClassName('my-div')
console.dir(div)
console.log(div)
//4 access html elements  using Query selectors(it detects the types(like,tag,id,class) of elemnts automatically) mostly used
let btn=document.querySelector('input')//this will retrn only first top elemnts
console.dir(btn)
console.log(btn)
let buttons=document.querySelectorAll('input')//this will retrun all similar elemnts(like,you can have multiple buttons ,tags,headings)
console.dir(btn)
console.log(btn)




