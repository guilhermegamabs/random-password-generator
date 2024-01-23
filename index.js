function generatePassword(passwordLength, includeLowerCase, includeNumbers, includeUpperCase, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolChars = "!@#$%&*()_+=";
    
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLength <= 0) {
        return `(password length must be at least 1!)`;
    }

    if(allowedChars.length === 0) {
        return `(at least one set of character needs to be selected!)`;
    }

    for(let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    console.log(allowedChars)
    return password;
}

const passwordLength = 32;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeNumbers, includeUpperCase, includeSymbols);

console.log(`Generated Passowrd: ${password}`);