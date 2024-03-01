function func (arr,symbols){
    arr = arr.split("")
    for (n of symbols){
        arr= arr.filter(symbol => symbol !==n )
    }
    return arr.join("")
}

console.log(func("hello world", ['l', 'd']))
