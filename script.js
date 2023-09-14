'use strict';

const elem = document.querySelectorAll('.book');
const list = document.querySelectorAll('.books')
const adversting = document.querySelectorAll('.adv')
console.log(adversting)
console.log(elem)
console.log(list)

adversting[0].remove()

list[0].appendChild(elem[0])

list[0].append(elem[2])

list[0].insertBefore(elem[0], elem[3])
list[0].insertBefore(elem[3], elem[5])

const body = document.querySelector('body')
console.log(body)
document.body.style.background = 'url(image/you-dont-know-js.jpg)';

const book3 = document.querySelector('.book3')
console.log(book3)

book3.textContent = 'Книга 3. this и Прототипы Объектов'


const item = document.querySelectorAll('.item')
 
console.log(item.length)  
item[1].append(item[0])
item[9].after(item[2])
item[4].before(item[8])
item[4].after(item[5])
item[8].before(item[6])
console.log(item)
const li = document.querySelectorAll('.li')

console.log(li)

li[1].after(li[9])

li[4].after(li[2])

const listUl = document.querySelectorAll('.listUl')

const newEl = document.createElement('li')
newEl.textContent = 'Глава 8: За пределами ES6'
newEl.classList = 'listUl'
listUl[8].after(newEl)
console.log(listUl)
console.log(newEl)
