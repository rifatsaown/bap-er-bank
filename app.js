document.getElementById('login').addEventListener('click', function(){
    //user Email
    const emailUser =document.getElementById('user-email').value;
    //user Password
    const passUser =document.getElementById('user-password').value;
    // Check User Data
    if (passUser == '1234' && emailUser == 'abc@def.com' ){
        window.location.href = 'banking.html'
    }
    else{
        document.getElementById('login-stats').innerText ="Wrong Email Or pass";
    }
})

