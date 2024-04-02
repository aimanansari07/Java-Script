//q1 solution
let btn=document.createElement('button')
btn.innerText='Click me!'
btn.style.backgroundColor='red'
btn.style.color='white'

document.querySelector('body').prepend(btn)

//q2 solution

let para=document.querySelector('.para')
console.log(para)
console.log(para.getAttribute('class'))
para.setAttribute('class','newpara')// but this will overwrite the old class css but we want both class css

console.log(para.classList)//by using class list property we can contain multiple classes css
para.classList.add('para','newpara2','radius')//we can add css class by using add method
console.log(para.classList)
//suppose we want to one class from classlist then we use (remove())
para.classList.remove('radius')

//changing the value of elemts having same class name each value must be unique to evevry element

let headings=document.querySelectorAll('.heading')
// console.log(headings)
console.dir(headings)
console.dir(headings[0].innerText)//Acess value via index
console.dir(headings[1].innerText)
console.dir(headings[2].innerText)

//1st method change manually using index

headings[1].innerText='python'
console.dir(headings)

//2nd method change using for-loop
for (let i=0;i<headings.length;i++){
    headings[i].innerText=`new different value${i}`
    
}