// //5th day task
// //anonymous function
// //a. print odd numbers in array.

// var arr = [1,2,3,4,5,6,7,8,9,10];
// for (var i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i],"even");
//     }else {
//         console.log(arr[i],"odd");
//     }
// }

// //c. sum of all numbers in an array

var arr = [1,2,3,4,5,6];
var total = 0;
for (var i in arr){
    total += arr[i];
}
console.log(total);

// //d.return all the prime numbers in an array

function isprime(n){
    if (n<2)
    return `${n} its not prime number`

    for ( var i =2 ; i<n ; i++){
        if (n % i === 0){
        return `${n} its a not a primenumber`
    
    }
} return `${n} its a prime number`
} 
console.log(isprime(11));

// //e. return all the palindromes in array

var rem,temp,result=0,number;
   number = 12321;
   temp = number;
while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    result = result * 10 + rem;
}
if ( result == temp){
console.log("its palindrome number");
}else {
    console.log("its not palindrome number");
}

// //f.return median two sorted arrays of the same size 

