let x = prompt("Enter First Number");
let y = prompt("Enter Second Number");
let op = prompt("Enter the operator");

if (op == "+") {
    alert(Number(x) + Number(y));
} else if (op == "-") {
    alert(Number(x) - Number(y));
} else if (op == "/") {
    alert(Number(x) / Number(y));
} else if (op == "%") {
    alert(Number(x) % Number(y));
} else if (op == "*") {
    alert(Number(x) * Number(y));
}
else{alert("Wrong input, refersh page to start again"); }