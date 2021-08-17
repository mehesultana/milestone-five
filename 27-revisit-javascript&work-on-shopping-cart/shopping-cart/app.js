function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    // console.log(caseNumber);

    if (isIncreasing == true) {
        productNumber = parseFloat(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber;

    //update  total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}

//phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

//handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    // console.log('case plus clicked');
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    
 */
    updateProductNumber('case', 59, false);
});
