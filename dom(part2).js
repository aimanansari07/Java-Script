//access the value of attribute using getAttribute()method

let head=document.querySelector('#head')
console.dir(head.getAttribute('id'))

let div=document.querySelector('.mydiv')
console.dir(div.getAttribute('class'))

//changing the value of attribute using getAttribute()method

let newhead=document.querySelector('#head')
newhead.setAttribute('id','heading')
console.log(newhead)

let newdiv=document.querySelector('.mydiv')
newdiv.setAttribute('class','div-class')
console.log(newdiv)


//style the paritcular node(elemnt) using js
newdiv.style.color='red'
newdiv.style.backgroundColor='blue'
head.style.color='purple'
head.style.backgroundColor='yellow'

let h1=document.querySelector('h1')
h1.style.backgroundColor='green'
h1.style.color='yellow'

//create a new elements using js we can create the element using (document.createElement('element name'))

let btn=document.createElement('button')
btn.innerHTML='<b>append</b>'

newdiv.append(btn)//it insert the elemnt at the end of the node(inside)
newdiv.style.width='100px' //sytle using js
newdiv.style.height='200px'//sytle using js

let btn2=document.createElement('button')
btn2.innerText='preappend'
newdiv.prepend(btn2)//it insert the elemnt at the start of the node(inside)

let btn3=document.createElement('button')
btn3.innerText='Before'
newdiv.before(btn3)//it insert the elemnt before the node(outside)

let btn4=document.createElement('button')
btn4.innerText='After'
newdiv.after(btn4)
// btn4.style.marginTop='50px'

//delete an elemnt using js (remove()method)

let para=document.querySelector('p')
para.remove()

