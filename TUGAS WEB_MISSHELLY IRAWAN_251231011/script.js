// ==========================================
// ELEMEN DOM & VARIABEL GLOBAL
// ==========================================
const registrationForm = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const passwordHint = document.getElementById('passwordHint');

const greetingHeading = document.getElementById('greeting');
const successBanner = document.getElementById('successBanner');
const successMessage = document.getElementById('successMessage');
const headerCard = document.querySelector('.header-card');

// ==========================================
// FITUR 1: MANIPULASI DOM (Ubah Style & Teks)
// ==========================================
document.getElementById('btnThemeNavy').addEventListener('click', () => {
    headerCard.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
});

document.getElementById('btnThemeDark').addEventListener('click', () => {
    headerCard.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
});

document.getElementById('btnThemeAccent').addEventListener('click', () => {
    headerCard.style.backgroundColor = 'rgba(30, 58, 138, 0.6)';
});

// ==========================================
// FITUR 2: EVENT HANDLING ('keyup' & 'input')
// ==========================================

// Event keyup: Hitung panjang karakter password secara real-time
passwordInput.addEventListener('keyup', (e) => {
    const length = e.target.value.length;
    passwordHint.textContent = `Panjang password: ${length} karakter`;
    
    if (length >= 8) {
        passwordHint.style.color = '#4ade80'; // Hijau jika valid
    } else {
        passwordHint.style.color = '#94a3b8'; // Abu-abu jika belum
    }
});

// Event input: Mengubah teks sapaan otomatis saat nama diketik
fullNameInput.addEventListener('input', (e) => {
    const nameValue = e.target.value.trim();
    if (nameValue !== '') {
        greetingHeading.textContent = `Halo, ${nameValue}!`;
    } else {
        greetingHeading.textContent = `Selamat Datang!`;
    }
});

// Helper Function: Validasi Format Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==========================================
// FITUR 3: VALIDASI FORM & ERROR HANDLING
// ==========================================
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah reload halaman

    // Reset pesan error
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successBanner.classList.add('hidden');

    let isValid = true;

    // 1. Validasi Nama
    const nameVal = fullNameInput.value.trim();
    if (nameVal === '') {
        nameError.textContent = 'Nama lengkap tidak boleh kosong.';
        isValid = false;
    }

    // 2. Validasi Email
    const emailVal = emailInput.value.trim();
    if (emailVal === '') {
        emailError.textContent = 'Email tidak boleh kosong.';
        isValid = false;
    } else if (!isValidEmail(emailVal)) {
        emailError.textContent = 'Format email tidak valid (contoh: user@mail.com).';
        isValid = false;
    }

    // 3. Validasi Password (Min 8 Karakter)
    const passwordVal = passwordInput.value;
    if (passwordVal === '') {
        passwordError.textContent = 'Password tidak boleh kosong.';
        isValid = false;
    } else if (passwordVal.length < 8) {
        passwordError.textContent = 'Password minimal 8 karakter.';
        isValid = false;
    }

    // Jika Semua Valid
    if (isValid) {
        successBanner.classList.remove('hidden');
        successMessage.textContent = `Akun atas nama ${nameVal} (${emailVal}) berhasil didaftarkan.`;
        
        registrationForm.reset();
        passwordHint.textContent = 'Panjang password: 0 karakter';
        passwordHint.style.color = '#94a3b8';
    }
});