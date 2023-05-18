
function checkCapicua(string) {

    const trimStr = string.replace(/\s/g, '');
    const arrayString = trimStr.split('');

    const reverseArrayString = arrayString.reverse();

    const reverseString = reverseArrayString.join('');

    if (trimStr == reverseString) {
        console.log(`El string ${string} es capicúa.`);
    }
    else {
        console.log(`El string ${string} no es capicúa.`)
    }
}

const string = prompt('Ingrese string a evaluar: ');

checkCapicua(string);
