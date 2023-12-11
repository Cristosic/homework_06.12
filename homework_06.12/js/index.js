// Создать функцию checkEquality с помощью которого проверяем равны ли все 3 значение внутри input-ов или нет
// Например если 3, 3, 3 то в результате должны получать "Все поле равны" если нет то пишем "Все поле не равны"

function checkEquality() {
    let firstNumber = +document.querySelector('.input-1').value
    let secondNumber = +document.querySelector('.input-2').value
    let thirdNumber = +document.querySelector('.input-3').value
    if (firstNumber === secondNumber && secondNumber === thirdNumber) {
        document.querySelector(".result-1").innerHTML = `All fields are equal`;
    } else {
        document.querySelector(".result-1").innerHTML = `All fields are not equal`;
    }
}

// Создать функцию hasZero с помощью которого проверяем есть ли поле которое равно 0 если есть пишем "Да, есть", если нет пишем просто "Нет"
// Например если будет 1, 2, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

function hasZero() {
    let firstNumber = +document.querySelector(".input-1").value;
    let secondNumber = +document.querySelector(".input-2").value;
    let thirdNumber = +document.querySelector(".input-3").value;
    if (firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) {
        document.querySelector('.result-1').innerHTML = `Yes, it is 0`
    } else {
        document.querySelector('.result-1').innerHTML = `No`
    }
}


// Создать функцию sameOne с помощью которого проверяем есть ли поле которое совпадают, если есть пишем "Да, есть", если нет пишем просто "Нет"
// Например если будет 1, 1, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

function sameOne() {
    let firstNumber = +document.querySelector(".input-1").value;
    let secondNumber = +document.querySelector(".input-2").value;
    let thirdNumber = +document.querySelector(".input-3").value;
    if (firstNumber === secondNumber || secondNumber === thirdNumber || thirdNumber === firstNumber) {
        document.querySelector('.result-1').innerHTML = `Yes, it is`
    } else {
        document.querySelector('.result-1').innerHTML = `No`
    }
}

