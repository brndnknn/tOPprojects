function cipherHelper( code, shift ){
    // upper
    if( code < 91 && code > 64){
        code += shift;
        if( code > 90){
            code -= 26;
        }
        return code;
    }

    // lower
    if( code < 123 && code > 96){
        code += shift;
        if( code > 122 ){
            code -=26;
        }
        return code;
    }

    //return other unchanged
    return code;
}



function caesarCipher(str, num){
    // utf-16 codes
    //caps 65-90, non-caps 97-122

    let newStr = '';
    for(let i = 0; i < str.length; i++){
        let thisChar = str.charCodeAt(i);
        let newChar = String.fromCharCode(cipherHelper(thisChar, num));
        newStr = newStr + newChar;
    }
    return newStr;

}

export default caesarCipher;