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

function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
console.log(name);
