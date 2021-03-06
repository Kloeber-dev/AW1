var verificaResultado;

function Inserir(num) {
    var numero;
    if (verificaResultado) {
        if (num != '/' && num != '*' && num != '+' && num != '-') {
            Limpa();
            verificaResultado = false;
            numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
        else {
            verificaResultado = false;
            numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
    }
    else {
        numero = document.getElementById('resultado').innerHTML;
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
    if (base === "") {
        Swal.fire('Digite um Número');
        document.getElementById('base').focus()
    } else if (expo === "") {
        Swal.fire('Digite um Número');
        document.getElementById('expoente').focus();
    } else {
        verificaResultado = true;
    }
    if (verificaResultado) {
        var pot = Math.pow(base, expo);
        document.getElementById('resultadop').innerHTML = pot;
    }
}

function Raiz() {
    verificaResultado = false;
    var rad;
    var indice = document.getElementById('indice').value;
    var radicando = document.getElementById('radicando').value;
    if (radicando === "") {
        Swal.fire('Digite um Número');
        document.getElementById('radicando').focus();
    } else if (indice < 2 || indice === "") {
        Swal.fire('Digite um Número que seja maior ou igual a 2');
        document.getElementById('indice').focus();
    } else if (indice % 2 == 0 && radicando < 0) {
        Swal.fire('Digite um índice par para que a raiz seja um número real')
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

function Fatorial() {
    verificaResultado = false;
    var fat = Number(document.getElementById('fatorial').value);

    if (fat === "") {
        Swal.fire('Digite um Número');
        document.getElementById('fatorial').focus();
    } else if (fat < 0 || !Number.isInteger(fat)) {
        Swal.fire('Digite um Número Natural');
        document.getElementById('fatorial').focus();
    }
    else if (fat === 0 || fat == 1) {
        fat = 1;
        verificaResultado = true;
    }
    else {
        verificaResultado = true;
    }
    var result = fat;
    var aux = fat - 1;
    for (aux; aux > 1; aux--) {
        result *= aux;
    }
    if (verificaResultado) {
        document.getElementById('resultadop').innerHTML = result;
    }
}

function Calcular() {

}

function CalculaArea(e) {
    let result;
    let htmlResult = document.getElementsByClassName('resultadoArea')
    verificaResultado = false;
    switch (e) {
        // quadrado
        case '1':
            var lado = document.getElementById('lado').value;
            if (lado === "" || lado < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('lado').focus();
            } else {
                verificaResultado = true;
            }
            if (verificaResultado) {
                result = Math.pow(lado, 2);
                htmlResult[0].innerHTML = result
            }
            break;

        // retangulo
        case '2':
            let base = document.getElementById('base').value;
            let altura = document.getElementById('altura').value;
            if (base === "" || base < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('base').focus();
            } else if (altura === "" || altura < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('altura').focus();
            } else {
                verificaResultado = true;
            }

            if (verificaResultado) {
                result = base * altura;
                htmlResult[1].innerHTML = result
            }
            break;

        // triangulo
        case '3':
            let base1 = document.getElementById('baset').value;
            let altura1 = document.getElementById('alturat').value;
            if (base1 === "" || base1 < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('baset').focus();
            } else if (altura1 === "" || altura1 < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('alturat').focus();
            } else {
                verificaResultado = true;
            }

            if (verificaResultado) {
                result = (base1 * altura1) / 2
                htmlResult[2].innerHTML = result
            }
            break;

        // circunferencia
        case '4':
            let raio = document.getElementById('raio').value;
            if (raio === "" || raio < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('raio').focus();
            } else {
                verificaResultado = true;
            }
            if (verificaResultado) {
                result = Math.pow(raio, 2) * Math.PI;
                var aux = result.toFixed(2);
                result = parseFloat(aux)
                htmlResult[3].innerHTML = result;
            }
            break;

        // Paralelogramo
        case '5':
            let base2 = document.getElementById('basep').value;
            let altura2 = document.getElementById('alturap').value;
            if (base2 === "" || base2 < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('basep').focus();
            } else if (altura2 === "" || altura2 < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('alturap').focus();
            } else {
                verificaResultado = true;
            }

            if (verificaResultado) {
                result = base2 * altura2
                htmlResult[4].innerHTML = result
            }
            break;

        // Losango
        case '6':
            let diagma = document.getElementById('diagma').value;
            let diagme = document.getElementById('diagme').value;
            if (diagma === "" || diagma < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('diagma').focus();
            } else if (diagme === "" || diagme < 0) {
                Swal.fire('Digite um Número Natural')
                document.getElementById('diagme').focus();
            } else {
                verificaResultado = true;
            }

            if (verificaResultado) {
                result = (diagma * diagme) / 2;
                htmlResult[5].innerHTML = result
            }
            break;
    }
}

function TrocaArea() {
    var valor = document.getElementById('SelectArea').value;
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    let d4 = document.getElementById("d4");
    let d5 = document.getElementById("d5");
    let d6 = document.getElementById("d6");
    let tagp = document.getElementById("conteudoarea")
    let image = document.getElementsByClassName('image');

    switch (valor) {
        case '1':
            tagp.innerHTML = "Para fazer o cálculo da área do quadrado é necessário realizar o produto entre dois lados.Como o quadrado tem lados iguais, basta pegar a medida de um dos lados e elevar ao quadrado.Para a realização usamos a fórmula da área A = b.h, assim um de seus lados será a base(b) e o outro a altura(h)."
            image[0].src = 'images/area/quadrado.jpg'
            d1.style.visibility = 'visible';
            d1.style.display = 'flex';
            d2.style.visibility = 'hidden';
            d2.style.display = 'none';
            d3.style.visibility = 'hidden';
            d3.style.display = 'none';
            d4.style.visibility = 'hidden';
            d4.style.display = 'none';
            d5.style.visibility = 'hidden';
            d5.style.display = 'none';
            d6.style.visibility = 'hidden';
            d6.style.display = 'none';
            break;
        case '2':
            tagp.innerHTML = "A área de um retângulo pode ser calculada por meio da fórmula A = b·h, em que b é a base (ou largura) e h é a altura (ou comprimento)."
            image[0].src = 'images/area/area_retangulo.png'
            d1.style.visibility = 'hidden';
            d1.style.display = 'none';
            d2.style.visibility = 'visible';
            d2.style.display = 'flex';
            d3.style.visibility = 'hidden';
            d3.style.display = 'none';
            d4.style.visibility = 'hidden';
            d4.style.display = 'none';
            d5.style.visibility = 'hidden';
            d5.style.display = 'none';
            d6.style.visibility = 'hidden';
            d6.style.display = 'none';
            break;
        case '3':
            tagp.innerHTML = "Para calcular a área de qualquer triângulo, basta calcular o produto entre o comprimento da base e o da altura e dividir por dois";
            image[0].src = 'images/area/triangulo.jpg'
            d1.style.visibility = 'hidden';
            d1.style.display = 'none';
            d2.style.visibility = 'hidden';
            d2.style.display = 'none';
            d3.style.visibility = 'visible';
            d3.style.display = 'flex';
            d4.style.visibility = 'hidden';
            d4.style.display = 'none';
            d5.style.visibility = 'hidden';
            d5.style.display = 'none';
            d6.style.visibility = 'hidden';
            d6.style.display = 'none';
            break;
        case '4':
            tagp.innerHTML = "A área de um círculo é pi vezes o raio elevado ao quadrado (A = π r²).";
            image[0].src = 'images/area/circunferencia.jpg'
            d1.style.visibility = 'hidden';
            d1.style.display = 'none';
            d2.style.visibility = 'hidden';
            d2.style.display = 'none';
            d3.style.visibility = 'hidden';
            d3.style.display = 'none';
            d4.style.visibility = 'visible';
            d4.style.display = 'flex';
            d5.style.visibility = 'hidden';
            d5.style.display = 'none';
            d6.style.visibility = 'hidden';
            d6.style.display = 'none';
            break;
        case '5':
            tagp.innerHTML = "A área do paralelogramo pode ser calculada pela multiplicação da medida de sua base pela medida de sua altura, também chamadas de comprimento e largura.";
            image[0].src = 'images/area/paralelogramo.png'
            d1.style.visibility = 'hidden';
            d1.style.display = 'none';
            d2.style.visibility = 'hidden';
            d2.style.display = 'none';
            d3.style.visibility = 'hidden';
            d3.style.display = 'none';
            d4.style.visibility = 'hidden';
            d4.style.display = 'none';
            d5.style.visibility = 'visible';
            d5.style.display = 'flex';
            d6.style.visibility = 'hidden';
            d6.style.display = 'none';
            break;
        case '6':
            tagp.innerHTML = "Para calcularmos a área de um losango devemos realizar o produto entre as medidas das diagonais e dividir por dois. Ao traçarmos as diagonais, quatro triângulos retângulos são formados. Então, a área é igual a área dos quatros triângulos.";
            image[0].src = 'images/area/losango.png'
            d1.style.visibility = 'hidden';
            d1.style.display = 'none';
            d2.style.visibility = 'hidden';
            d2.style.display = 'none';
            d3.style.visibility = 'hidden';
            d3.style.display = 'none';
            d4.style.visibility = 'hidden';
            d4.style.display = 'none';
            d5.style.visibility = 'hidden';
            d5.style.display = 'none';
            d6.style.visibility = 'visible';
            d6.style.display = 'flex';
            break;
    }
}