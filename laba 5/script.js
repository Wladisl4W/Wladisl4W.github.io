function calculate() {
    let r = document.getElementById("result");
    let number = document.getElementsByName("number-of-goods");
    let cost = document.getElementById("products");
    if (Number.isInteger(Number(number[0].value))) {
        r.innerHTML = Number(r.innerHTML) +
        Number(number[0].value) * Number(cost.value);
    } else {
        alert("Недопустимое количество товаров!");
    }
    return false;
}

function erase() {
    let r = document.getElementById("result");
    r.innerHTML = "0";
}