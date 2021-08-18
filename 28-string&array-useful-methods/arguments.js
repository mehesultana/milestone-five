//28-7 Unlimited parameters to a function using arguments
function addNumber(num1, num2) {
    // console.log(arguments[1]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const sum = addNumber(23, 13, 53, 634);
console.log(sum);
