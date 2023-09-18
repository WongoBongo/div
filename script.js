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

elem[4].classList.add('book3')

const book3 = document.querySelectorAll('.book3')
const bookv = document.querySelector('.book3')
const h2 = bookv.childNodes[1]
h2.remove()
console.log(bookv.childNodes)



const newH = document.createElement('h2')
newH.textContent = 'Книга 3. this и Прототипы Объектов'
newH.innerHTML ='<a class= "NewH2">Книга 3. this и Прототипы Объектов</a>'
book3[0].prepend(newH)

console.log(newH)




book3.textContent = 'Книга 3. this и Прототипы Объектов'

elem[0].classList.add('book2')
const book2 = document.querySelector('.book2')
const ul = book2.childNodes[3]
console.log(ul)
ul.childNodes[1].classList = 'listUl'
ul.childNodes[3].classList = 'listUl'
ul.childNodes[5].classList = 'listUl'
ul.childNodes[7].classList = 'listUl'
ul.childNodes[9].classList = 'listUl'
ul.childNodes[11].classList = 'listUl'
ul.childNodes[13].classList = 'listUl'
ul.childNodes[15].classList = 'listUl'
ul.childNodes[17].classList = 'listUl'
ul.childNodes[19].classList = 'listUl'

console.log(ul.childNodes)


const item = document.querySelectorAll('.listUl')
 
console.log(item)

item[1].append(item[0])
item[9].after(item[2])
item[4].before(item[8])
item[4].after(item[5])
item[8].before(item[6])
console.log(item)
const ul5 = elem[5].childNodes[3]
console.log(ul5)
ul5.childNodes[1].classList = ('li')
ul5.childNodes[3].classList = ('li')
ul5.childNodes[5].classList = ('li')
ul5.childNodes[7].classList = ('li')
ul5.childNodes[9].classList = ('li')
ul5.childNodes[11].classList = ('li')
ul5.childNodes[13].classList = ('li')
ul5.childNodes[15].classList = ('li')
ul5.childNodes[17].classList = ('li')
ul5.childNodes[19].classList = ('li')
ul5.childNodes[21].classList = ('li')

const li = document.querySelectorAll('.li')


li[1].after(li[9])
li[4].after(li[5])
li[7].after(li[5])


const ul6 = elem[2].childNodes[3]
console.log(ul6)

ul6.childNodes[1].classList = ('li6')
ul6.childNodes[3].classList = ('li6')
ul6.childNodes[5].classList = ('li6')
ul6.childNodes[7].classList = ('li6')
ul6.childNodes[9].classList = ('li6')
ul6.childNodes[11].classList = ('li6')
ul6.childNodes[13].classList = ('li6')
ul6.childNodes[15].classList = ('li6')
ul6.childNodes[17].classList = ('li6')
ul6.childNodes[19].classList = ('li6')


const listUl = document.querySelectorAll('.li6')

const newEl = document.createElement('li')
newEl.textContent = 'Глава 8: За пределами ES6'
newEl.classList = 'li6'
ul6.childNodes[19].after(newEl)
console.log(listUl)
console.log(newEl)
