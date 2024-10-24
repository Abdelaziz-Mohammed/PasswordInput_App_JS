const passwordInput = document.getElementById('password-input');
const toggleIcon = document.querySelector('.toggle');

toggleIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
    else {
        passwordInput.type = 'password';
        toggleIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
})