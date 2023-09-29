"use strict";
const title = document.getElementById('title')
console.log(title)

const startBtn = document.getElementsByClassName('handler_btn')[0]
const reseBtn = document.getElementsByClassName('handler_btn')[1]


const buttonPlus = document.querySelector('.screen-btn')
console.log(buttonPlus)

const otherItemPercent = document.querySelectorAll('.other-items.percent')
console.log(otherItemPercent)

const otherItemNumber = document.querySelectorAll('.other-items.number')
console.log(otherItemNumber)

const rollbackInput = document.querySelector('div.rollback input[type = range]')

console.log(rollbackInput)

const rollbackSpan = document.querySelector('div.rollback span')
console.log(rollbackSpan)

const total = document.getElementsByClassName('total-input')[0]
const totalCount= document.getElementsByClassName('total-input')[1]
const totalICountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
console.log(totalCountRollback)
const range = document.getElementById('range')
const rangeSpan = document.getElementsByClassName('range-value')[0]
const countInput = document.getElementById('count-input')
const countSelect = document.getElementById('select-Count')
console.log(countInput, typeof(countInput),)
console.log(range,rangeSpan)
console.dir(countInput.value)

let screens = document.querySelectorAll('.screen')
console.log(screens)


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPersent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle()

        buttonPlus.addEventListener('click', appData.addScreenBlock) 
        
        
        
        
        range.addEventListener('change',appData.rangesize)

        
        if (countInput.value === '' && countSelect.value === '') {

            console.log('введите количество экранов и тип')
            
        } else {
            startBtn.addEventListener('click', appData.start)
            
        }
            
           
        
        
    },
   rangesize :  function(event) {
        rangeSpan.textContent = event.target.value
        appData.rollback = event.target.value
        console.log(appData.rollback)
       
   },
    start: function () {
        appData.addScreens()
        appData.addPrices()
        appData.addServisec()
        appData.showResult()
        
        // appData.asking();
        // appData.logger();
        // appData.getAllServicePrices();
        // appData.getFullPrice();
        // appData.getServicePercentPrices();
        // appData.getRollbackMessage(appData.fullPrice);
        console.log(appData)
        console.log(appData.screens[0].name)
        console.log(appData.servicePricesPercent, appData.servicePricesNumber)
       
      
    },
    logger: function () {

        appData.showTypeOf(appData.getTitle());
        console.log('fullPrice', appData.fullPrice);
        appData.showTypeOf(appData.screenPrice);
        appData.showTypeOf(appData.adaptive);


    },
    addScreenBlock: function() {
        const cloneScreen = screens[0].cloneNode(true)
        
        screens[screens.length - 1].after(cloneScreen)
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen')
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            
            console.log(input, 'input')
            const selectName = select.options[select.selectedIndex].textContent
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
            
           
            
            let count = 0;

            appData.screens.forEach(screens => {
            count += screens.count;
            })
            totalCount.value = count 
            
        })
    },
   
    
    addServisec: function () {
        otherItemPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text')
            if (check.checked) {
                appData.servicesPersent[label.textContent]  = +input.value
            }
            })
            otherItemNumber.forEach(function (item) {
                const check = item.querySelector('input[type=checkbox]')
                const label = item.querySelector('label')
                const input = item.querySelector('input[type=text')
                if (check.checked) {
                    appData.servicesNumber[label.textContent]  = +input.value
                }
                })
    },
    addPrices: function() {
        
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
            
        }
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += +appData.servicesNumber[key]
        }
        for (let key in appData.servicesPersent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPersent[key] / 100)
        }
        appData.fullPrice = +appData.screenPrice + +appData.servicePricesNumber + +appData.servicePricesPercent

        totalCountRollback.value = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
        
        
        console.log(appData.screens.indexOf('count'))
        console.log(appData.screenPrice, "appData.screenPrice", appData.servicePricesNumber, 'appData.servicePricesNumber', appData.servicePricesPercent, 'appData.servicePricesPercent', appData.rollback, 'appData.rollback', appData.servicePricesNumber, 'appData.servicePricesNumber' )
        console.log(appData.screens[0].price)
        
    },
    addTitle: function () {
        document.title = title.textContent
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalICountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        
    } ,    
    
   
    // asking: function () {
    //     for (let i = 0; i < 2; i++) {
    //         let name = prompt('Какой допольнительный тип услуги нужен?')
    //         let price = 0
    //         do {
    //             price = prompt('Сколько это будет стоить?')
    //         } while (price)
            
    //         appData.services[name] = +pice
           
    //     }
    // },
    // getAllServicePrices: function () {
    //     let sum = 0

    //     for (let i = 0; i < 2; i++) {
            
    //         let price = 0

    //         if (i === 0) {
    //             appData.service1 = prompt('Какой дополнительный тип услуги нужен?')

    //         } else if (i === 1) {
    //             appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
    //         }

    //         do {
    //             appData.price = prompt('Сколько это будет стоить?')
    //         } while (sum);

    //         sum += +appData.price
    //     }

    //     return sum

    // },
    showTypeOf: function (variable) {
        console.log(variable, typeof variable);
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


    

}



appData.init();



// appData.allServicePrices = appData.getAllServicePrices()
// appData.fullPrice = appData.getFullPrice()

// appData.title = appData.getTitle(appData.title)
// appData.getRollbackMessage(appData.fullPrice);
// console.log(appData.fullPrice);
// console.log(appData.servicePercentPrice);

