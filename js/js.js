let display;
let textField1;
let textField2;
let btnSubmit;

window.onload = function() {
    display = document.getElementById("display");
    textField1 = document.getElementById("txtField1");
    textField2 = document.getElementById("txtField2");
    btnSubmit = document.getElementById("btnSubmit");

    btnSubmit.addEventListener("click", function() {
        let num = textField1.value;
        let num2 = textField2.value;
        display.innerText = AddValues(num, num2);
    });
}

function AddValues(x, y) {
    let val1 = parseInt(x);
    let val2 = parseInt(y);
    return val1 + val2;
}