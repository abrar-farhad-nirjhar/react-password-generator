const UPPERCASES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const LOWERCASES =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const NUMBERS = ["0","1","2","3","4","5","6","7","8","9"]
const SPECIALS = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]


const combined = [UPPERCASES, LOWERCASES, NUMBERS, SPECIALS]


const passwordGenerator = (length) =>{
    let password = ""
    for(let i=0; i<length;i++){
        let fromCollection = Math.floor(Math.random() * 4)
        password+=combined[fromCollection][Math.floor(Math.random() * combined[fromCollection].length)]
    }
    return password
}

export default passwordGenerator