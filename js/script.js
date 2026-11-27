/**
Descricao: DW-prova-02-12
nome_arquivo: script.js
nome_exercicio: Situação de aprendizado 2
nome_aluno: Diego Augusto Ângelo
email_aluno: diego.angelo@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
**/

const formulario = document.querySelector("form");

if (formulario) {
    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        if (email.value === "" || senha.value === "") {
            alert("Preencha todos os campos!");
            return;
        }

        window.location.href = "perfil.html";
    });
}


const pesquisa = document.querySelector("#pesquisa");

if (pesquisa) {
    const linhas = document.querySelectorAll("#tabela tr:not(:first-child)");

    pesquisa.addEventListener("input", function() {
        const texto = pesquisa.value.toLowerCase();

        linhas.forEach(function(linha) {
            const conteudo = linha.textContent.toLowerCase();
        if (conteudo.includes(texto)) {
        linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
        });

    });
}