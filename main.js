document.getElementById("donate").addEventListener('click',function(e){
    e.preventDefault;
    
    const addAmount = document.getElementById('donate-amount').value;
    const totalAmount = document.getElementById("total-amount").innerText;
    const myBalance = document.getElementById("myBalance").innerText;
    const time = new Date();
document.getElementById("demo").innerHTML = time;

    if(addAmount > 0 && myBalance >=  addAmount ){
        const amountAdd = parseFloat(addAmount) + parseFloat(totalAmount)
        document.getElementById('total-amount').innerText = amountAdd;
        const balance = parseFloat(myBalance) - addAmount;
        document.getElementById('myBalance').innerText = balance;
         document.getElementById("input-text").innerText ="Congrats !"

    }else{
       document.getElementById("input-text").innerText ="Inalid!"
    }

})


document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("history").classList.add("hidden")
    document.getElementById("card-section").classList.remove("hidden")
    

    
    })
document.getElementById("btn-2").addEventListener("click",function(){
   
    document.getElementById("history").classList.remove("hidden")
    document.getElementById("card-section").classList.add("hidden")
    })


