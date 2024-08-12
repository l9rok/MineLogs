// Напишите программу, которая запрашивает у пользователя два набора из двух чисел и объявляет две 
// функции: calculateAverage и compareAverages. Функция calculateAverage принимает два числа как параметры 
// и возвращает их среднее арифметическое. Функция compareAverages принимает результаты средних значений 
// из двух наборов чисел как параметры и выводит сообщение о том, какое среднее значение больше.
function calculateAverage(a, b) {
    return (a + b) / 2;
    }

    function compareAverages(avgSet1, avgSet2) {
    if (avgSet1 === avgSet2) {
        console.log('Средние значения наборов равны');
    } else if (avgSet2 > avgSet1) {
        console.log('Среднее значение второго набора больше');
    } else {
        console.log('Среднее значение первого набора больше');
    }
}

let firstNum1 = parseInt(prompt('Введите первое число первого набора: '));
let secondNum1 = parseInt(prompt('Введите второе число первого набора: '));
let firstNum2 = parseInt(prompt('Введите первое число второго набора: '));
let secondNum2 = parseInt(prompt('Введите второе число второго набора: '));

const avgSet1 = calculateAverage(firstNum1, secondNum1);
const avgSet2 = calculateAverage(firstNum2, secondNum2);
compareAverages(avgSet1, avgSet2);

// Напишите программу, которая запрашивает у пользователя два набора из двух чисел и объявляет две функции: 
// findMax и compareMax. Функция findMax принимает два числа как параметры и возвращает большее из них. 
// Функция compareMax принимает результаты нахождения максимума из двух наборов чисел как параметры и выводит сообщение о том, 
// какое число больше.
function findMax(a, b) {
    return a > b ? a : b;
}

function compareMax(x, y) {
    let result = "Максимальные числа наборов равны";
    if (x !== y)
        result = `Максимальное число ${x > y ? "первого" : "второго"} набора больше`;
    console.log(result);
}

const x1 = Number(prompt("Введите первое число первого набора:"));
const y1 = Number(prompt("Введите второе число первого набора:"));
const x2 = Number(prompt("Введите первое число второго набора:"));
const y2 = Number(prompt("Введите второе число второго набора:"));

compareMax( findMax(x1, y1), findMax(x2, y2) );

// Напишите программу, которая запрашивает у пользователя три числа и объявляет функцию, 
// которая принимает три числа как параметры и возвращает их среднее арифметическое. 
// Выведите удвоенное значение среднего арифметического.

let x = +(prompt());
let y = +(prompt());
let z = +(prompt());
function sredneAr(x, y, z){
return (x+y+z)/3;
}
let znah = sredneAr(x, y, z);
console.log(znah*2)

// Напишите программу, которая запрашивает у пользователя длины трех сторон треугольника и объявляет функцию checkTriangleExistence, 
// которая принимает длины сторон в качестве параметров и возвращает сообщение о том, 
// существует ли треугольник с такими сторонами или нет.
// Чтобы проверить треугольник на существование, нужно сравнить каждую сторону с суммой двух других. 
// Если хотя бы в одном случае сторона окажется больше либо равна сумме двух других, 
// то треугольника с такими сторонами не существует.
let firstLenght = +prompt();
let secondLenght = +prompt();
let thirdLenght = +prompt();

function checkTriangleExistence(a, b, c){
    if(a < b + c && b < a + c && c < a + b){
        return 'Треугольник существует';
    } else{
        return 'Треугольник не существует';
    }
}

let result = checkTriangleExistence(firstLenght, secondLenght, thirdLenght);
console.log(result);