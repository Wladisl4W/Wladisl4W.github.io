function calculate() {
    let r = document.getElementById("result");
    let number = document.getElementsByName("number-of-goods");
    let cost = document.getElementById("products");
    if (Number.isInteger(Number(number[0].value))) {
        r.innerHTML = Number(r.innerHTML) +
        Number(number[0].value) * Number(cost.value);
    } else {
        window.alert("Недопустимое количество товаров!");
    }
    return false;
}

function erase() {
    let r = document.getElementById("result");
    r.innerHTML = "0";
}




function objectSelect(event) {
    let radio = event.target;
    let select = document.getElementById("calc-2-select");
    let check = document.getElementById("calc-2-check");
    if (radio.value === "dkhook") {
        select.style.display = "none";
        check.style.display = "none";
    }
    if (radio.value === "arcane") {
        select.style.display = "block";
        check.style.display = "none";
    }
    if (radio.value === "gem") {
        select.style.display = "none";
        check.style.display = "block";
    }
}

function changeCost() {
    let radio = document.querySelector("input[name=calc-2-radio-1]:checked");
    let result = document.getElementById("result-2");
    let select = document.getElementById("calc-2-select");
    let check = document.querySelectorAll("input[name=costChanger]:checked");
    let number = document.getElementById("number");
    if (Number.isInteger(Number(number.value)) && Number(number.value) >= 0) { //jslint-ignore-line
        if (radio.value === "dkhook") {
            result.innerHTML = 15000 * Number(number.value);
        }
        if (radio.value === "arcane") {
            result.innerHTML = 2000 * Number(number.value) * Number(select.value); //jslint-ignore-line
        }
        if (radio.value === "gem") {
            result.innerHTML = 0 * number.value;
            if (check !== null) {
                check.forEach(function (check2) {
                    result.innerHTML = Number(result.innerHTML) + Number(check2.value) * number.value; //jslint-ignore-line
                });
            }
        }
    } else {
        result.innerHTML = "Недопустимое кол-во товаров";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calc-1-but-1").addEventListener("click", calculate); //jslint-ignore-line
    document.getElementById("calc-1-but-2").addEventListener("click", erase);
    document.getElementById("calc-2-radio").addEventListener("change", objectSelect); //jslint-ignore-line
    let radioChange = document.querySelectorAll("#calc-2-radio input");
    radioChange.forEach(function (price) {
        price.addEventListener("change", changeCost);
    });
    let checkChange = document.querySelectorAll("#calc-2-check input");
    checkChange.forEach(function (price) {
        price.addEventListener("change", changeCost);
    });
    document.getElementById("calc-2-select").addEventListener("change", changeCost); //jslint-ignore-line
    let inputChange = document.querySelectorAll("#number");
    inputChange.forEach(function (price) {
        price.addEventListener("input", changeCost);
    });
});
