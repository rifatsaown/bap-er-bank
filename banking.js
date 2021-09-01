function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputNumber = parseFloat(input.value);
    input.value = '';
    return inputNumber
}

// deposit Money
document.getElementById('button-deposit').addEventListener('click', function () {
    const deposit = getInputValue('input-deposit')


    const previousDeposit = parseFloat(document.getElementById('deposit-total').innerText);
    const totalDeposit = deposit + previousDeposit;
    document.getElementById('deposit-total').innerText = totalDeposit

    const previousBalance = parseFloat(document.getElementById('balance-total').innerText);
    const totalBalance = deposit + previousBalance;
    document.getElementById('balance-total').innerText = totalBalance;

})
// Withdraw Money
document.getElementById('button-withdraw').addEventListener('click', function () {
    const withdraw = getInputValue('input-withdraw')


    const previousWithdraw = parseFloat(document.getElementById('withdraw-total').innerText);
    const totalWithdraw = withdraw + previousWithdraw;
    document.getElementById('withdraw-total').innerText = totalWithdraw;
    const previousBalance = parseFloat(document.getElementById('balance-total').innerText);
    const totalBalance = previousBalance - withdraw;
    document.getElementById('balance-total').innerText = totalBalance;

})