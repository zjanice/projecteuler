//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var arr = [1,2];
var evenArr = [];
   
for (var i = 2; i<= 4000000; i++) {
    
    arr.push(arr[i-1] + arr[i-2]);
    if(arr[i-1] + arr[i-2] > 4000000) {
        break;
    }
}

for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0) {
        evenArr.push(arr[i]);
    }    
}

var sum = evenArr.reduce(add, 0);
function add(a, b) {
    return a + b;
}


console.log(sum);