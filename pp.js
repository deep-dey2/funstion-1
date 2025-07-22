function secondLargest(arr){
    let largest = arr[0]
    let second = -Infinity

    for(let i = 0; i<arr.length; i++){
        if (arr[i]>largest){
            second=largest
            largest=arr[i]
        }else if(arr[i]> second && arr[i]< largest){
            second=arr[i]
        }
    }
    return second
}

let numbers = [10,20]
console.log(secondLargest(numbers));