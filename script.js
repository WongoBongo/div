
console.log('Привет мир');

const title = 'dev';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 2;
const rollback = 3;
const fullPrice = 1000000000;
const adaptive = true;
console.log(typeof title, fullPrice, adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов + $`screenPrice` рублей/ долларов/гривен/юани и Стоимость разработки сайта $`fullPrice` рублей/ долларов/гривен/юани");
console.log((fullPrice * (rollback / 100)));