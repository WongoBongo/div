"use strict";

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать ?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');
const rollback = 10;
let fullPrice;





const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}


let allServicePrices;
const getAllServicePrices = function () {
    allServicePrices = (servicePrice1 + servicePrice2);
};
getAllServicePrices();

function getFullPrice() {
    fullPrice = (screenPrice + allServicePrices);
}
getFullPrice();
console.log(allServicePrices);

const gettitle = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
gettitle(title);


const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price >= 0 && price < 1500) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
}
getRollbackMessage();
console.log(getRollbackMessage(fullPrice));


let servicePercentPrice;

const getServicePercentPrices = function () {
    servicePercentPrice = (fullPrice - (fullPrice * (rollback / 100)));
}
getServicePercentPrices();



showTypeOf(gettitle(title));
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(screens);
console.log(servicePercentPrice);