function validateEmail(email: string) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
function validateNumber(mobile: number) {
    var numberRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return numberRegex.test(mobile.toString());
}
function countWords(str: string) {
    const arr = str.split(' ');

    return arr.filter(word => word !== '').length;
}

export { validateEmail, validateNumber as validatePhoneNumber,countWords }  