// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

const encodeString = (str, no) => {
    let arr = []
    let newAscii = 0
    for(i in str){
        newAscii = str.charCodeAt(i) + no
        
        if(newAscii > 90 && newAscii < 97) 
            newAscii = 64 + (newAscii - 90)
        if(newAscii > 122) 
            newAscii = 96 + (newAscii - 122)
        
        arr.push(newAscii)
    }
    return(String.fromCharCode(...arr))
}

console.log(encodeString("Abmp", 2));
