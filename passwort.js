function getRandomNumbers(length) {
    var array = new Uint8Array(length);
    var res = new Float32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 0xFF === 0) {
            array[i] = 0xFE;
        }
        res[i] = array[i] / 0xFF;
    }
    return res;
}

function getPassword(config) {
    const characters = this.genChars(config);
    var charactersLength = characters.length;
    let randomness = this.getRandomNumbers(config["length"]);
    var result = [];
    for (let i = 0; i < config["length"]; i++) {
        let char = characters.charAt(Math.floor(randomness[i] * charactersLength));
        result.push(char);
    }
    let res = result.join('');
    console.log(res);
    return result;
}

function genChars(config) {
    let chars = "";
    if (!config["numbers"] && !config["letters"] && !config["specialCharacters"] && !config["lockedSpecialCharacters"]) {
        return "-";
    }
    if (config["numbers"]) {
        chars = chars + "0123456789";
    }
    if (config["letters"]) {
        chars = chars + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (config["specialCharacters"]) {
        chars = chars + "!§$%/()´`^°*~#|,:._-€@";
    }

    if (config["lockedSpecialCharacters"]){
        chars = chars + "\\?\"[{\'&>;+}=]<";
    }
    return chars;
}
len = prompt("Länge des Passworts:")
pass = getPassword({"length":parseInt(len), "letters":true, "numbers":true, "specialCharacters":true}).join("")
console.log(pass)
document.activeElement.value = pass
