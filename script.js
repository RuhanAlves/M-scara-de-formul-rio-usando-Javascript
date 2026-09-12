function mascara_telefone() {

    document.getElementById("telefone").value = document.getElementById("telefone").value.replace(/[^\d()--]/g, "");
    //limitador
    var tel = document.getElementById("telefone").value
    console.log(tel)
    tel = tel.slice(0, 14) //(pode limitar a quantidade de char na entrada pelo java script)
    console.log(tel)
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)
    console.log(tel)

    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }

}

function mascara_CNPJ() {
    var cnpj = document.getElementById("CNPJ").value;

    // tira tudo que não for número
    cnpj = cnpj.replace(/[^\d]/g, "");

    // limitador
    cnpj = cnpj.slice(0, 14);

    // máscara
    if (cnpj.length > 2) {
        cnpj = cnpj.slice(0, 2) + "." + cnpj.slice(2);
    }

    if (cnpj.length > 6) {
        cnpj = cnpj.slice(0, 6) + "." + cnpj.slice(6);
    }

    if (cnpj.length > 10) {
        cnpj = cnpj.slice(0, 10) + "/" + cnpj.slice(10);
    }

    if (cnpj.length > 15) {
        cnpj = cnpj.slice(0, 15) + "-" + cnpj.slice(15);
    }

    document.getElementById("CNPJ").value = cnpj;
}

function mascara_CPF() {
    var cpf = document.getElementById("CPF").value;

    // tira tudo que não for número
    cpf = cpf.replace(/[^\d]/g, "");

    // limitador
    cpf = cpf.slice(0, 11);

    // máscara
    if (cpf.length > 3) {
        cpf = cpf.slice(0, 3) + "." + cpf.slice(3);
    }

    if (cpf.length > 7) {
        cpf = cpf.slice(0, 7) + "." + cpf.slice(7);
    }

    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11) + "-" + cpf.slice(11);
    }

    document.getElementById("CPF").value = cpf;
}

function mascara_CEP() {
    var cep = document.getElementById("CEP").value;

    // tira tudo que não for número
    cep = cep.replace(/[^\d]/g, "");

    // limitador
    cep = cep.slice(0, 8);

    // máscara
    if (cep.length > 2) {
        cep = cep.slice(0, 2) + "." + cep.slice(2);
    }

    if (cep.length > 6) {
        cep = cep.slice(0, 6) + "-" + cep.slice(6);
    }

    document.getElementById("CEP").value = cep;
}

document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("mensagem").showModal();

});