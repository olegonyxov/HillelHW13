function createSimpleArray(innerArraysLength){
    let arr=[];
    for(let i=0; i < innerArraysLength; i++){
        let arraySymbol = prompt("input array symbol")
        arr.push(arraySymbol);
    }
    return arr
}   
function createUpperArray(){
    let upperArray = []
    const arraysCount = parseInt(prompt("input arrays count"));
    const innerArraysLength = parseInt(prompt("input inner arrays length"));
    for (let i=0; i < arraysCount; i++){
        let newArray = createSimpleArray(innerArraysLength)
        upperArray.push(newArray)
    }
    return upperArray
}

console.log(createUpperArray())