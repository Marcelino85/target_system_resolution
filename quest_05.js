// 5. Inverter os caracteres de uma string

function reverseString(s) {
    let inverted = "";
    for (let i = s.length - 1; i >= 0; i--) {
        inverted += s[i];
    }
    return inverted;
}

// Exemplo
const string = "!ratartnoc em es emit ues o arap latnemadnuf iereS";
console.log("String invertida:", reverseString(string));
