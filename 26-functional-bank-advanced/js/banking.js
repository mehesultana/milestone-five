document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button clicked');
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotal);

    depositTotal.innerText = depositTotalText + depositAmount;
    console.log(depositTotalText);

    //clear input field
    depositInput.value = '';
});
