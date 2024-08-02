const myCheckBox=document.getElementById('myCheckBox');
const visaBtn=document.getElementById('visaBtn');
const mastercardBtn=document.getElementById('mastercardBtn');
const paypalBtn=document.getElementById('paypalBtn');
const mySubmit=document.getElementById('mySubmit');
const subResult=document.getElementById('subResult');
const paymentResult=document.getElementById('paymentResult');

mySubmit.onclick=function(){
    if(myCheckBox.checked){
        subResult.textContent=`You are Subscribed`
    }
    else{
        subResult.textContent=`You are not subscribed`
    }
    if(visaBtn.checked){
        paymentResult.textContent=`You are paying with visa`
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent=`You are paying with mastercard`
    }
    else if(paypalBtn.checked){
        paymentResult.textContent=`You are paying with paypal`
    }
    else{
        paymentResult.textContent=`You must select a payment type`
    }
}