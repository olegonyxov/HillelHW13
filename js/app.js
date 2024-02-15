function findAverage(arr){ 
    let count = 0;
    let arrSum = 0;
    for (i = 0; i < arr.length; i += 1){
        if (typeof(arr[i]) === "number"){
            arrSum+= arr[i]
            count++
        }  
    }
    return arrSum/count
}
