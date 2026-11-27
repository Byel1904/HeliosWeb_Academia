const registerModal = document.getElementById('registerModal');
const registerForm = document.getElementById('registerForm');
const registerError = document.getElementById('registerError');

function openRegister() {
  registerModal.classList.add('active');
  document.getElementById('regNome').focus();
}

function closeRegister() {
  registerModal.classList.remove('active');
  registerForm.reset();
  registerError.textContent = '';
}

document.getElementById('openRegister').addEventListener('click', (e) => {
  e.preventDefault();
  openRegister();
});

document
  .getElementById('closeRegister')
  .addEventListener('click', closeRegister);

registerModal.addEventListener('click', (e) => {""
  if (e.target === registerModal) closeRegister();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeRegister();
});

registerForm.addEventListener('submit', (e) => {""
  e.preventDefault();

  const nome = document.getElementById('regNome').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const senha = document.getElementById('regSenha').value;
  const senha2 = document.getElementById('regSenha2').value;

  if (!nome || !email || !senha) {
    registerError.textContent = 'Preencha todos os campos.';
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    registerError.textContent = 'Digite um e-mail válido.';
    return;
  }
  if (senha.length < 6) {
    registerError.textContent = 'A senha precisa ter ao menos 6 caracteres.';
    return;
  }
  if (senha !== senha2) {
    registerError.textContent = 'As senhas não coincidem.';
    return;
  }

  const users = JSON.parse(localStorage.getItem('helios_users') || '[]');

  if (users.some((u) => u.email === email)) {
    registerError.textContent = 'Este e-mail já está cadastrado.';
    return;
  }

  users.push({ nome, email, senha });
  localStorage.setItem('helios_users', JSON.stringify(users));
  localStorage.setItem('helios_session', email);

  window.location.href = 'home.html';
});

document.querySelectorAll('.toggle-card-eye').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = btn.parentElement.querySelector('input');
    const icon = btn.querySelector('i');
    const isHidden = input.type === 'password';

    input.type = isHidden ? 'text' : 'password';
    icon.classList.toggle('fa-eye-slash', !isHidden);
    icon.classList.toggle('fa-eye', isHidden);
  });
});
