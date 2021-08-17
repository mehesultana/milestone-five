function updateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    // console.log(caseNumber);

    if (isIncreasing == true) {
        caseNumber = parseFloat(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseFloat(caseNumber) - 1;
    }
    caseInput.value = caseNumber;

    //update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
}

//phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);
});

//handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    // console.log('case plus clicked');
    updateCaseNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    
 */
    updateCaseNumber('case', 59, false);
});
