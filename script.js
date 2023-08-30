"use strict";

let input, random = Math.floor(Math.random() * 100);
 
while (input = prompt("Введите число от 0 до 100:")) {
    if (isNaN(input))
        alert("Введите число!");
    else if (input > random)
        alert("Загаданное число меньше!");
    else if (input < random)
        alert("Загаданное число больше!");
    else if (input == random) {
        alert("Поздравляю, Вы угадали!!!");
        break;
    }
}
