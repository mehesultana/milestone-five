function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    // console.log(caseNumber);

    if (isIncreasing) {
        caseInput.value = parseFloat(caseNumber) + 1;
    } else {
        caseInput.value = parseFloat(caseNumber) - 1;
    }
}

document.getElementById('case-plus').addEventListener('click', function () {
    // console.log('case plus clicked');
    updateCaseNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    
 */
    updateCaseNumber(false);
});
