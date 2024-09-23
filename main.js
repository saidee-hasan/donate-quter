document.getElementById("donate").addEventListener('click',function(e){
    e.preventDefault;
    
    const addAmount = document.getElementById('donate-amount').value;
    const totalAmount = document.getElementById("total-amount").innerText;
    const myBalance = document.getElementById("myBalance").innerText;


    if(addAmount > 0 ){
        const amountAdd = parseFloat(addAmount) + parseFloat(totalAmount)
        document.getElementById('total-amount').innerText = amountAdd;

        const balance = parseFloat(myBalance) - addAmount;
        document.getElementById('myBalance').innerText = balance;

    }else{
        alert("invalid Input")
    }

})


document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("history").classList.remove("hidden")
    document.getElementById("card-section").classList.add("hidden")
    
    })
document.getElementById("btn-2").addEventListener("click",function(){
    document.getElementById("history").classList.add("hidden")
    document.getElementById("card-section").classList.remove("hidden")
    
    })