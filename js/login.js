
const USUARIO_ADM = "adm123@gmail.com";
const SENHA_ADM = "123456";
const PAGINA_ADM = "adm.html";

const USUARIO_ALUNO = "byel123@gmail.com";
const SENHA_ALUNO = "123456";
const PAGINA_ALUNO = "home.html";

const form = document.getElementById("loginForm");
const inputUsuario = document.getElementById("loginEmail");
const inputSenha = document.getElementById("loginPassword");
const msgErro = document.getElementById("msgErro");

if (form && inputUsuario && inputSenha) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = inputUsuario.value.trim().toLowerCase();
        const senha = inputSenha.value;

        if (usuario === USUARIO_ADM && senha === SENHA_ADM) {
            sessionStorage.setItem("admLogado", "true");
            window.location.href = PAGINA_ADM;
        }

        else if (usuario === USUARIO_ALUNO && senha === SENHA_ALUNO) {
            sessionStorage.setItem("alunoLogado", "true");
            sessionStorage.setItem("nomeAluno", "Gabriel Silva");
            sessionStorage.setItem("planoAluno", "Black");

            window.location.href = PAGINA_ALUNO;
        }

        else {
            if (msgErro) {
                msgErro.textContent = "Usuário ou senha incorretos.";
                msgErro.style.display = "block";
            }
        }
    });
}
