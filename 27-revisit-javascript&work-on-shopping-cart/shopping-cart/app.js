document.getElementById('case-plus').addEventListener('click', function () {
    // console.log('case plus clicked');
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    // console.log(caseNumber);
    caseInput.value = parseFloat(caseNumber) + 1;
});
