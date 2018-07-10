(function a() {
    let self = '(' + a + '())'
    let singleQuote = new RegExp(String.fromCharCode(39), 'g')
    let newLine = new RegExp(String.fromCharCode(10), 'g')

    let toC = code => {
        return 'main(){printf(' + String.fromCharCode(34) + code.replace(newLine, String.fromCharCode(92).repeat(2) + 'n').replace(singleQuote, String.fromCharCode(37) + 'c') + String.fromCharCode(34) +  ', ' + '39' + ',39'.repeat(code.match(singleQuote, 'g').length - 1) + ');}'
    }

    let toPy = code => {
        return 'print(' + String.fromCharCode(39).repeat(3) + code + String.fromCharCode(39).repeat(3) + ')'
    }

    console.log(toC(toPy(self)))
}())
