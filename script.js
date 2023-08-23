"use strict";

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать ?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = confirm('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +confirm('Сколько это будет стоить?');
const service2 = confirm('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +confirm('Сколько это будет стоить?');
const rollback = 1000;
fullPrice = screenPrice + servicePrice1 + servicePrice1;
const servicePercentPrice = math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice >= 0) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice <= -1) {
    console.log("Что то пошло не так");
} 