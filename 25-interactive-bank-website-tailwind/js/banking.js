// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button clicked');

    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;

    // console.log(newDepositAmountText);

    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');

    // console.log(depositTotal.innerText);

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;
});
