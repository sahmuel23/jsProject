function msg() {
    alert("Hello World!");
}

function calcular() {
    let a = parseFloat(document.getElementById("valor1").value);
    let b = parseFloat(document.getElementById("valor2").value);

    if (a == 0 & b == 0) {
        // Caso os dois números recebam valor 0, atribui 0 ao resultado
        document.getElementById("resultado").value = 0;

    } else {
        document.getElementById("resultado").value = eval(a + b);
    }
}

function mudaCor() {
    let altera_Cor = document.getElementById("altera_Cor");

    if (altera_Cor.style.backgroundColor == "white") {
        altera_Cor.style.backgroundColor = "black";
        altera_Cor.style.color = "white";
    } else {
        altera_Cor.style.backgroundColor = "white";
        altera_Cor.style.color = "black";
    }
}

function alteraName() {
    // Seleciona o elemento pelo nome
    var seleciona_nome = document.querySelector('label[name="altera_Name"]');

    // Altera a propriedade do elemento
    if (seleciona_nome.textContent == "Clique para alterar por Name") {
        seleciona_nome.textContent = "Alterado por Name";
    } else {
        seleciona_nome.textContent = "Clique para alterar por Name";
    }
}

function alteraClasse() {
    classes = document.getElementsByClassName('classe_Comum');

    // Itera sobre os elementos e altera suas propriedades
    for (var i = 0; i < classes.length; i++) {
        classes[i].textContent = "Todos que possuem a mesma Classe foram alterados";
    }
}


