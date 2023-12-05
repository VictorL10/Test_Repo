//1

let name = prompt("1. NAME", "");
alert("Привет " + name);

//2

let old = +prompt("2. what year were you born?", "");
const today = 2019;
let years = today - old;
alert("Your age " + years);

//3

let kvadrat = +prompt("3. enter the length of the side of the square", "");
let perimetr = kvadrat * 4;
alert("the perimeter of the square is " + perimetr);

//4

let r = +prompt("4. set the radius of the circle", "");
const Pi = 3.14;
let S = r * r * Pi;
alert("circumference is " + S);

//5

let distance = +prompt("5. distance", "");
let time = +prompt("time", "");
let speed = distance / time;
alert("you have to move at a speed " + speed);

//6

let dollars = +prompt("6. dollars", "");
const curse = 0.9;
let euro = dollars * curse;
alert("Euro " + euro);

//7

let volume = +prompt("7. volume flash-card Gb", "");
let Mb = volume * 1024;
let files = Mb / 820;
alert("fit on your flash drive " + files);

//8

let cash = +prompt("8. how much money do you have in your wallet?", "");
let price = +prompt("How much does one chocolate bar cost?", "");
let chocolate = cash / price;
let ch = Math.floor(chocolate);
let money = cash % price;
alert("the number of chocolates you buy " + ch + " you will have " + money);

//9

let number = +prompt("9. enter a three digit number", "");
let third = number / 100;
let number3 = Math.floor(third);
let second = number % 100;
let n = second / 10;
let number2 = Math.floor(n);
let number1 = second % 10;
alert(number1 + "" + number2 + "" + number3);

//10

let ns = +prompt("10. number");
let mn = ns % 2;
alert(mn === 0);