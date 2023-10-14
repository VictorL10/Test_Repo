// 1 

let age = +prompt("1. How old are you? ", "");
if (age <= 12) {
    alert("ребенок");
} else {
    if (age > 12 && age <= 18) {
        alert("подросток");
    } else {
        if (age > 18 && age <= 60) {
            alert("взрослый");
        } else {
            if (age > 60) {
                alert("пенсионер");
            }
        }
    }
}

// 2
let button = prompt("2. Enter the button ", "");
switch (button) {
    case "1":
        alert("!");
        break;
    case "2":
        alert("@");
        break;
    case "3":
        alert("#");
        break;
    case "4":
        alert("$");
        break;
    case "5":
        alert("%");
        break;
    case "6":
        alert("^");
        break;
    case "7":
        alert("&");
        break;
    case "8":
        alert("*");
        break;
    case "9":
        alert("(");
        break;
    case "0":
        alert(")");
        break;

    default:
        alert("press the button from 0 to 9");
        break;
}

// 3
let a = +prompt("3. Введите трехзначное число ", "");
let third = a / 100;
let number3 = Math.floor(third);
let second = a % 100;
let n = second / 10;
let number2 = Math.floor(n);
let number1 = second % 10;
if (a >= 0 && a <= 99) {
    alert("Вы ввели неверное число. Число должно быть трехзначным.");
} else {
    if (a >= 1000) {
        alert("Вы ввели неверное число. Число должно быть трехзначным.");
    } else {
        if (number1 === number2 || number2 === number3 || number1 === number3) {
            alert("Среди цифр введенного трехзначного числа есть одинаковые");
        } else {

            alert("Среди цифр введенного трехзначного числа нет одинаковых");

        }
    }
}

// 4
let years = +prompt("4. Введите год ", "");
if (years % 400 === 0 || years % 4 === 0) {
    alert("Введенный Вами год високосный ");
} else {
    alert("Введенный Вами год невисокосный ");
}

// 5
let x = +prompt("5. Введите пятиразрядное число", "");
let b = x % 10;
let c = x / 10000;
let d = Math.floor(c);
let e = (x % 1000) % 10;
let f = (x % 100) % 10;
if (x < 10000 || x > 99999) {
    alert("Введенное Вами число не пятиразрядное");
} else {
    if (b == d && e == f) {
        alert("Введенное вами число палиндром");
    } else {
        alert("Введенное Вами число не палиндром");
    }
}

// 6
let usd = +prompt("6. Enter USD ", "");
let currency = prompt("Choose a currency: EUR, UAH or AZN ", "");
let eur = usd * 0.8;
let uah = usd * 23.5;
let azn = usd * 1.7;
if (currency === "EUR") {
    alert(eur);
} else {
    if (currency === "UAH") {
        alert(uah);
    } else {
        if (currency === "AZN") {
            alert(azn);
        }
    }
}

// 7
let amount = +prompt("7. Введите сумму покупки ", "");
if (amount >= 200 && amount < 300) {
    alert("Итого к оплате " + (amount - (amount * 0.03)));
} else {
    if (amount >= 300 && amount < 500) {
        alert("Итого к оплате " + (amount - (amount * 0.05)));
    } else {
        if (amount >= 500) {
            alert("Итого к оплате " + (amount - (amount * 0.07)));
        } else {
            if (amount < 200) {
                alert("Итого к оплате " + amount)
            }
        }
    }
}

// 8
let D = +prompt("8. Введите длину окружности ", "");
let P = +prompt("Введите периметр квадрата ", "");
let result = (D <= P) ? "Окружность поместится в квадрат" : "Окружность не поместится в квадрат";
alert(result);

// 9
let A = prompt("9. В каком году началась Вторая мировая война? " + "\n" + "A1. 1941 " + "\n" + "A2. 1939 " + "\n" + "A3. 1914 " + "\n" + "В поле введите значение А1, А2 или А3", "");
let res1 = 2;
if (A === "A2") {

    alert("Верно " + res1 + " балла");
} else {
    alert("Неверно");
}
let B = prompt("Кто был первым президентом США? " + "\n" + "B1. Вашингтон " + "\n" + "B2. Рузвельт " + "\n" + "B3. Трумен " + "\n" + "В поле введите значение B1, B2 или B3", "");
if (B === "B1") {
    alert("Верно " + res1 + " балла");
} else {
    alert("Неверно");
}
let C = prompt("Кто одержал победу в Крымской войне 1854-1856 гг.? " + "\n" + "C1. Россия " + "\n" + "C2. США " + "\n" + "C3. Коалиция союзников (Англия, Франция, Османская империя) " + "\n" + "В поле введите значение C1, C2 или C3", "");
if (C === "C3") {
    alert("Верно " + res1 + " балла");
} else {
    alert("Неверно");
}
if (A === "A2" && B === "B1" && C === "C3") {
    alert("Итого 6 баллов");
} else {
    if (A != "A2" && B === "B1" && C === "C3" || A === "A2" && B != "B1" && C === "C3" || A === "A2" && B === "B1" && C != "C3") {
        alert("Итого 4 балла");
    } else {
        if (A != "A2" && B != "B1" && C === "C3" || A === "A2" && B != "B1" && C != "C3" || A != "A2" && B === "B1" && C != "C3") {
            alert("Итого 2 балла");
        } else {
            if (A != "A2" && B != "B1" && C != "C3" || A != "A2" && B != "B1" && C != "C3" || A != "A2" && B != "B1" && C != "C3") {
                alert("Итого 0 баллов");
            }
        }
    }
} 


//10
let day = +prompt("10. Введите день " + "\n" + "День в диапазоне от 1 до 31 в зависимости от месяца ", "");
let month = +prompt("Введите месяц " + "\n" + "Месяц вводится цифрой в диапазоне от 1 до 12 ", "");
let year = +prompt("Введите год " + "\n" + "Год вводится числом начиная от 1 года нашей эры ", "");
let god = year + 1;
if (day <= 30 && month != 2) {
    alert((day + 1) + "." + month + "." + year);
} else {
    if (day == 31 && month == 1) {
        alert("1.2." + year);
    } else {
        if (day == 28 && month == 2) {
            alert("1.3." + year);
        } else {
            if (day == 28 && month == 2 && year % 4 === 0) {
                alert("29.2." + year);
            } else {
                if (day == 29 && month == 2 && year % 4 === 0) {
                    alert("1.3." + year);
                } else {
                    if (day == 31 && month == 3) {
                        alert("1.4." + year);
                    } else {
                        if (day == 30 && month == 4) {
                            alert("1.5." + year);
                        } else {
                            if (day == 31 && month == 5) {
                                alert("1.6." + year);
                            } else {
                                if (day == 30 && month == 6) {
                                    alert("1.7." + years);
                                } else {
                                    if (day == 31 && month == 7) {
                                        alert("1.8." + year);
                                    } else {
                                        if (day == 31 && month == 8) {
                                            alert("1.9." + year);
                                        } else {
                                            if (day == 30 && month == 9) {
                                                alert("1.10." + year);
                                            } else {
                                                if (day == 31 && month == 10) {
                                                    alert("1.11." + year);
                                                } else {
                                                    if (day == 30 && month == 11) {
                                                        alert("1.12." + year);
                                                    } else {
                                                        if (day == 31 && month == 12) {
                                                            alert("1.1." + god);
                                                        } else {
                                                            if (day > 31 || day > 28 && month == 2 && year % 4 != 0) {
                                                                alert("Введенная Вами дата неверна");
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}