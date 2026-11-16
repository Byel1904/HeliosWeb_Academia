const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');
const loginModal = document.getElementById('loginModal');

openLogin.addEventListener('click', () => {
  loginModal.classList.add('active');
});

closeLogin.addEventListener('click', () => {
  loginModal.classList.remove('active');
});

loginModal.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    loginModal.classList.remove('active');
  }
});

const togglePassword = document.getElementById('togglePassword');
const loginPassword = document.getElementById('loginPassword');

togglePassword.addEventListener('click', () => {
  const passwordVisible = loginPassword.type === 'text';

  loginPassword.type = passwordVisible ? 'password' : 'text';

  togglePassword.innerHTML = passwordVisible
    ? '<i class="fa-regular fa-eye"></i>'
    : '<i class="fa-regular fa-eye-slash"></i>';
});

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
});
