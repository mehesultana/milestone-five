//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transation-area');
    transactionArea.style.display = 'block';
});

//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = '';
});

//withdraw  button event handler
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const cucurrentNumber = parseFloat(current);
    const totalAmount = depositNumber + cucurrentNumber;
    document.getElementById(id).innerText = totalAmount;
}
