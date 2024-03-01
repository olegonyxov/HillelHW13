let x = prompt("enter first digit")
let znak = prompt("enter operator (+, -, *, /, %, ^)")
let y = prompt("enter second digit")

function checkOperator(oper){
    let operators = ["+", "-", "*", "/", "%", "^"]
    let checker = false ;
    for (let i of operators){
        if (oper === i){
            checker = true;
            break
        }    
    }
    return checker
}
function doMath(x,oper,y){
    if (!isNaN(x) && !isNaN(y) && checkOperator(oper)){
        return eval(x+oper+y)
    } else {
        return ("Incirrect input")
    }       
} 
console.log(doMath(x,znak,y))