function getMultiply(a, b){
    return a * b;
}

let multiply = getMultiply(5, 4);
alert(multiply);

multiply = getMultiply(10, 200);
alert(multiply);

multiply = getMultiply(55, 75);
alert(multiply);

function sayHello(){
    return `Hello, John!`;
}

alert(sayHello()); 

let helloText = sayHello(); //запишем результат в переменную
alert(helloText);

function sayHello(){
    let userName = "John";
    alert(`Hello, ${userName}`)
}
sayHello();

// let n = 6
// let s = 10;
// for (let i=0; i<n; i++) {
//     s = s + i;
// }
// console.log(s)

// let a = 6
// let p = 1
// for (let i=0; i<n; i++) {
//     p = p*i;
// }
// console.log(p)

// for (let i=1; i<3; i++) {
//     console.log(i);
// }
// for (let i=2; i<15; i = i+3){
//     console.log(i);
// }
// for (let i = 0; i < 5; i++){
//     console.log("Hello");
//     console.log("Hi");
// }

// let i = 0;
// while (i < 3){
//     console.log(`i= ${i}`);
//     i++;
// }

// let N = +prompt("Введите кол-во товаров:", 0); 
// let price = 0; //обнуляем начальное значение
// let total = 0; //обнуляем начальное значение

// for (let i=0; i < N; i++){
//     price = +prompt("Введите стоимость товара:", 0); //записали очередное значение цены в price
//     total = total + price;         //к total прибавляем стоимость товара
// }

// alert(`Общая сумма покупки: ${total}`) //выводим результат

// let year = prompt("Введите год вашего рождения:")
// alert(confirm(year))

// let userName = "Alex"

// console.log(userName)

// let num1 = 10;

// console.log(num1);

// const COLOR_RED = "FF0000";

// console.log(COLOR_RED);

// let text = `${userName} is ${num1} years old`

// console.log(text)

// let user = {
//     name: "Иван",
//     surname: "Золо",
//     age: "19"
// };

// alert(user.name);
// alert(user.surname);
// alert(user.age);

// function myFunction() {
//     alert("Кнопка!!!")
// }

// let result = prompt("How old are you?", 45);

// if (result >=45 || result <=99 ){
//     alert("Вход выполнен");
// }
// else if (result <= 44) {
//     alert("пока не соскуфился")
// }
// else{
//     alert("вы уже труха")
// }

// console.log(result)

// let conf = confirm("Принять правила соглашения?")

// console.log(conf)