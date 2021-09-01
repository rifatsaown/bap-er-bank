function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputNumber = parseFloat(input.value);
    input.value = '';
    return inputNumber
}

function addAmount(totalId, amount) {
    const previousTotal = document.getElementById(totalId);
    const previousTotalNum = parseFloat(previousTotal.innerText);
    previousTotal.innerText = amount + previousTotalNum;
}

function balanceAmount() {
    const previousBalanceText = document.getElementById('balance-total');
    const previousBalance = parseFloat(previousBalanceText.innerText);
    return previousBalance;
}

function balance(amount, isAdd) {
    const previousBalanceText = document.getElementById('balance-total');
    const previousBalance = balanceAmount();
    if (isAdd == true) {
        previousBalanceText.innerText = previousBalance + amount;
    } else {
        previousBalanceText.innerText = previousBalance - amount;
    }
}
// deposit Money
document.getElementById('button-deposit').addEventListener('click', function () {
    const deposit = getInputValue('input-deposit');
    if (deposit > 0) {
        addAmount('deposit-total', deposit);
        balance(deposit, true);
    }
})
// Withdraw Money
document.getElementById('button-withdraw').addEventListener('click', function () {
    const withdraw = getInputValue('input-withdraw');
    const previousBalance = balanceAmount();
    if (withdraw > 0 && previousBalance > 0) {
        addAmount('withdraw-total', withdraw);
        balance(withdraw, false);
    }
})