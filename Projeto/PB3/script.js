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

function Potencia() {
    var base = document.getElementById('base').value;
    var expo = document.getElementById('expoente').value;
    if (base == "") {
        alert('Digite um Número');
        document.getElementById('base').focus()
    } else if (expo == "") {
        alert('Digite um Número');
        document.getElementById('expoente').focus();
    }
    var pot = Math.pow(base, expo);
    document.getElementById('resultadop').innerHTML = pot;
}

function Raiz() {
    verificaResultado = false;
    var rad;
    var indice = document.getElementById('indice').value;
    var radicando = document.getElementById('radicando').value;
    if (radicando == "") {
        alert('Digite um Número');
        document.getElementById('radicando').focus();
    } else if (indice < 2 || indice == "") {
        alert('Digite um Número que seja maior ou igual a 2');
        document.getElementById('indice').focus();
    } else if (indice % 2 == 0 && radicando < 0) {
        alert('Digite um índice par para que a raiz seja um número real')
        document.getElementById('indice').focus();
    } else if (indice % 3 == 0 && radicando < 0) {
        radicando *= (-1);
        rad = Math.pow(radicando, (1 / indice));
        document.getElementById('resultadop').innerHTML = rad;
    } else {
        verificaResultado = true;
    }
    if (verificaResultado) {
        rad = Math.pow(radicando, (1 / indice));
        document.getElementById('resultadop').innerHTML = rad;
    }
}