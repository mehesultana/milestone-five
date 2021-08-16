/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const severDouble = doubleIt(7); */

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd === true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    /* console.log('deposit button clicked');
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    console.log(depositAmount); */

    const depositAmount = getInputValue('deposit-input');

    //get and update deposit total

    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    console.log(depositTotalText); */

    updateTotalField('deposit-total', depositAmount);

    //update balance

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */

    updateBalance(depositAmount, true);
});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* console.log('withdraw clicked');

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;

    // console.log(withdrawAmountText);

    const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input');

    //get and update withdraw total

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText); 
    
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    */

    updateTotalField('withdraw-total', withdrawAmount);

    //update balance after withdraw

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    updateBalance(withdrawAmount, false);

    //clear withdraw input field
    // withdrawInput.value = '';
});
