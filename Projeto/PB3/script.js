var verificaResultado;

function Inserir(num) {
    if (verificaResultado) {
        if (num != '/' && num != '*' && num != '+' && num != '-') {
            Limpa();
            verificaResultado = false;
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
        else {
            verificaResultado = false;
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
    }
    else {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }
}

function Limpa() {
    document.getElementById('resultado').innerHTML = "";
}

function Apaga() {
    var result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substr(0, result.length - 1)
}

function Calcula() {
    var result = document.getElementById('resultado').innerHTML;
    if (result) {
        document.getElementById('resultado').innerHTML = eval(result);
        verificaResultado = true;
    }
    else {
        document.getElementById('resultado').innerHTML = "";
    }
}

// function getHistory() {
//     return document.getElementById('history-value').innerText;
// }

// function printHistory(num) {
//     document.getElementById('history-value').innerText = num;
// }

// function getOutput() {
//     return document.getElementById('output-value').innerText;
// }

// function printOutput(num) {
//     if (num == "") {
//         document.getElementById('output-value').innerText = num;
//     } else {
//         document.getElementById('output-value').innerText = getFormattedNumber(num);
//     }
// }

// function getFormattedNumber(num) {
//     if (num == "-") {
//         return "";
//     }
//     var n = Number(num);
//     return n.toLocaleString('en');
// }

// function reverseNumberFormat(num) {
//     return Number(num.replace(/,/g, ''));
// }

// var operator = document.getElementsByClassName('operator');
// for (var i = 0; i < operator.length; i++) {
//     operator[i].addEventListener('click', function () {
//         if (this.id == "clear") {
//             printHistory("");
//             printOutput("");
//         }
//         else if (this.id == "backspace") {
//             var output = reverseNumberFormat(getOutput()).toString();
//             if (output) {
//                 output = output.substr(0, output.length - 1);
//                 printOutput(output);
//             }
//         }
//         else {
//             var output = getOutput();
//             var history = getHistory();
//             if (output == "" && history != "") {
//                 if (isNaN(history[history.length - 1])) {
//                     history = history.substr(0, history.length - 1);
//                 }
//             }
//             if (output != "" || history != "") {
//                 output = output == "" ? output : reverseNumberFormat(output);
//                 history = history + output;
//                 if (this.id == "=") {
//                     var result = eval(history);
//                     printOutput(result);
//                     printHistory("");
//                 }
//                 else {
//                     history = history + this.id;
//                     printHistory(history);
//                     printOutput("");
//                 }
//             }
//         }
//     });
// }

// var number = document.getElementsByClassName("number");
// for (var i = 0; i < number.length; i++) {
//     number[i].addEventListener('click', function () {
//         var output = reverseNumberFormat(getOutput());
//         if (output != NaN) {
//             output = output + this.id;
//             printOutput(output);
//         }
//     })
// }