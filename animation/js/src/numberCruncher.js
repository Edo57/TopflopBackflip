"use strict";

function factorsOf(n){
    const factors = [];
    for (let i = 1, max=Math.sqrt(n) ;i <= max; i++){
        if(n%i === 0){
            factors.push(i, n/i);
        }
        return factors.sort(function(a, b){return a>b;});
    }
}
function isPrime(n){
    return factorsOf(n).length === 2
};