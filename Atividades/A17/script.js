const masks = {
    tel(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    },
    cpf(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

const button = document.getElementById('button')

button.addEventListener('click', (event) =>{
    event.preventDefault()

    var nome = document.getElementById('nome')
    var sobrenome = document.getElementById('sobrenome')
    var tel = document.getElementById('tel')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var cpf = document.getElementById('cpf')
    
    if (nome.value == '') {
        nome.classList.add("errorInput")
    } else {
        nome.classList.remove("errorInput")
    }

    if (sobrenome.value == '') {
        sobrenome.classList.add("errorInput")
    } else {
        sobrenome.classList.remove("errorInput")
    }

    if (tel.value == '' || tel.value.length < 14) {
        tel.classList.add("errorInput")
    } else {
        tel.classList.remove("errorInput")
    }
    
    if (email.value == '' || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }
    
    if (password.value == '' || password.value.length < 8) {
        password.classList.add("errorInput")
    } else {
        password.classList.remove("errorInput")
    }

    if (cpf.value == '' || cpf.value.length < 14) {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }
})