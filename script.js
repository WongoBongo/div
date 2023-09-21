




'use strict';

const btn = document.getElementById('btn')
const text = document.getElementById('text')
const box = document.getElementById('square')
const span = document.getElementById('text-span')
const boxBtn = document.getElementById('e_btn')
const range = document.getElementById('range')
const rangeSpan = document.getElementById('range-span')
const circle = document.querySelectorAll('#circle')[0]
console.log(btn)
console.log(text)
console.log(box)
console.log(boxBtn)
console.log(range)
console.log(circle.style)
boxBtn.style.display = 'none'


// box.style.background = 'blue'

const logger = function(event) {
    console.dir(event.target.value)
    span.textContent = event.target.value
}
const clickbtn = function(event) {
    box.style.background = span.textContent
    console.dir(event.target.value)
}

const rangesize = function(event) {
    rangeSpan.textContent = event.target.value
    circle.style.width = (event.target.value + '%')
    circle.style.height = (event.target.value + '%')
    console.dir(event.target.value)
    console.log(circle.style.resize)

   
}

text.addEventListener('input',logger)
btn.addEventListener('click',clickbtn)
range.addEventListener('change',rangesize)
