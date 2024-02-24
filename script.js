const input = document.querySelector('input');
const btn = document.querySelector('a');
const generatedPasswords = new Set();

function generator() {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = lowercaseLetters.toUpperCase();
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-=_+[]{}|;:,.<>?';

    const allCharacters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;

    let randomString = '';
    for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        randomString += allCharacters.charAt(randomIndex);
    }

    if (generatedPasswords.has(randomString)) {
        generator();
        return;
    }

    generatedPasswords.add(randomString);

    input.value = randomString;
}

function copy() {
    navigator.clipboard.writeText(input.value);
    btn.classList.add('active');
    setTimeout(function () {
        btn.classList.remove('active');
        input.value = '';
    }, 2000);
}