
const botoes = document.querySelectorAll(".nav-item");
const telas = document.querySelectorAll(".tela");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {

        const telaSelecionada = botao.dataset.tela;

        telas.forEach((tela) => {
            tela.classList.remove("ativa");
        });

        botoes.forEach((item) => {
            item.classList.remove("active");
        });

        document.getElementById(telaSelecionada).classList.add("ativa");

        botao.classList.add("active");

    });
});

const cardsPlano = document.querySelectorAll('.plano-card');
const inputPlano = document.getElementById('aluno-plano');

cardsPlano.forEach(card => {
    card.addEventListener('click', () => {

        cardsPlano.forEach(c => c.classList.remove('selecionado'));
        
        card.classList.add('selecionado');
        
        if (inputPlano) {
            inputPlano.value = card.getAttribute('data-plano');
        }
    });
});

const inputBuscaMatricula = document.getElementById('busca-aluno-matricula');

if (inputBuscaMatricula) {
    inputBuscaMatricula.addEventListener('input', () => {
        const termo = inputBuscaMatricula.value.toLowerCase();
        const linhas = document.querySelectorAll('.tabela-matriculas tbody tr');

        linhas.forEach(linha => {
            const nomeAluno = linha.cells[0].textContent.toLowerCase();
            linha.style.display = nomeAluno.includes(termo) ? '' : 'none';
        });
    });
}