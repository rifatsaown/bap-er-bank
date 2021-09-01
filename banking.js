function getInputValue(){
    const inputDeposit = document.getElementById('input-deposit');
    const deposit = parseFloat(inputDeposit.value);
    inputDeposit.value = '';
    return deposit
}



// deposit Money
document.getElementById('button-deposit').addEventListener('click', function () {
    // const inputDeposit = document.getElementById('input-deposit');
    // const deposit = parseFloat(inputDeposit.value);
    const deposit = getInputValue()


    const previousDeposit = parseFloat(document.getElementById('deposit-total').innerText);
    const totalDeposit = deposit + previousDeposit;
    document.getElementById('deposit-total').innerText = totalDeposit
    

    const previousBalance = parseFloat(document.getElementById('balance-total').innerText);
    const totalBalance = deposit + previousBalance;
    document.getElementById('balance-total').innerText = totalBalance;

})
// Withdraw Money
document.getElementById('button-withdraw').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('input-withdraw');
    const withdraw = parseFloat(inputWithdraw.value);


    const previousWithdraw = parseFloat(document.getElementById('withdraw-total').innerText);
    const totalWithdraw = withdraw + previousWithdraw;
    document.getElementById('withdraw-total').innerText = totalWithdraw;
    inputWithdraw.value = '';
    const previousBalance = parseFloat(document.getElementById('balance-total').innerText);
    const totalBalance = previousBalance - withdraw;
    document.getElementById('balance-total').innerText = totalBalance;

})