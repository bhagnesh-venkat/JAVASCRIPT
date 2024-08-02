
function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    const lowercaseChars="abcdefghijklmnopaqrstuvwxyz"
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars="0123456789"
    const symbolChars="!@#$%^&*()_+-="

    let allowedChars=""
    let password=""
    allowedChars+=includeLowerCase?lowercaseChars:""
    allowedChars+=includeUpperCase?uppercaseChars:""
    allowedChars+=includeNumbers?numberChars:""
    allowedChars+=includeSymbols?symbolChars:""
    if(length<=0){
        return `(password length atleast must be 1)`
    }
    if(allowedChars.length===0){
        return `(Atleast 1 set of charaters need to be selected)`
    }
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length)
        password+=allowedChars[randomIndex]
    }
    return password
}

const passwordLength=12
const includeLowerCase=true
const includeUpperCase=true
const includeNumbers=true
const includeSymbols=true

const password=generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols)
console.log(`Generated Password: ${password}`)