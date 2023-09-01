"use strict";

// let title 
// let screens 
// let screenPrice 
// let adaptive 

// let rollback = 10;
// let fullPrice
// let allServicePrices
// let servicePercentPrice

// let service1 
// let service2 


const appData = {
    title: '',
    screens: '',
    screenPrice: '',
    adaptive: '',
    rollback: 10,
    fullPrice: '',
    allServicePrices: '',
    servicePercentPrice: '',
    service1: '',
    service2: '',
    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num))
    },
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать ?', 'Простые, Сложные, Интерактивные');
        appData.screenPrice = prompt('Сколько будет стоить данная работа?', 15000);
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?', 15000);
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    getAllServicePrices: function () {
        let sum = 0

        for (let i = 0; i < 2; i++) {
            let price = 0

            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?')

            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
            }

            do {
                appData.price = prompt('Сколько это будет стоить?')
            } while (!appData.isNumber(sum));

            sum += +appData.price
        }

        return sum
        // return servicePrice1 + servicePrice2
    },
    showTypeOf: function (variable) {
        console.log(variable, typeof variable);
    },
    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices
    },
    getTitle: function () {
        return appData.title.charAt(0).toUpperCase() + appData.title.slice(1);
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 1500) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }
    },


    getServicePercentPrices: function () {
        return (appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    logger: function () {
        console.log(appData.getServicePercentPrices())
        appData.showTypeOf(appData.getTitle());
        console.log('fullPrice', appData.fullPrice);
        appData.showTypeOf(appData.screenPrice);
        appData.showTypeOf(appData.adaptive);
        console.log(appData.screens);
        console.log(appData.servicePercentPrice);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        for (var prop in appData) {
            console.log("appData" + prop + " = " + appData[prop]);
        }
    },
    start: function () {
        this.asking();
        this.logger();
    },
}

appData.start();







appData.allServicePrices = appData.getAllServicePrices()
appData.fullPrice = appData.getFullPrice()
appData.servicePercentPrice = appData.getServicePercentPrices()
appData.title = appData.getTitle(appData.title)
appData.getRollbackMessage(appData.fullPrice);
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);

// console.log("allServicePrices", appData.allServicePrices);

// console.log(getServicePercentPrices())
// showTypeOf(getTitle());
// console.log('fullPrice', appData.fullPrice);
// showTypeOf(appData.screenPrice);
// showTypeOf(appData.adaptive);
// console.log(appData.screens);
// console.log(appData.servicePercentPrice);
// console.log(getRollbackMessage(appData.fullPrice));
