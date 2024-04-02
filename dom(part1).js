//Qs. Create a H2 heading element with text - “Hello JavaScript” Append “from Apna College students” to this text using JS
let heading=document.querySelector('#heading')
console.dir(heading.innerText)
heading.innerText=heading.innerText+'from Apna College students';
console.dir(heading.innerText)
//Qs. Create 3 divs with common class name - “box” Access them & add some unique text to each of them.
let divs=document.querySelectorAll('.box')
console.dir(divs)
//method 1
// divs[0].innerText='Hello';
// divs[1].innerText='JavaScript'; 
// divs[2].innerText='From Aiman';

//method 2
for(let i=0;i<divs.length;i++){
    divs[i].innerText=`Unique text${i}`
    
}