// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

function solution(inputString) {
    let j = inputString.length - 1
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] !== inputString[j]){
            return false;
        }
        j--
    }
    return true
}