document.getElementById("donate").addEventListener('click',function(e){
    e.preventDefault;
    
    const addAmount = document.getElementById('donate-amount').value;
    const totalAmount = document.getElementById("total-amount").innerText;
    const myBalance = document.getElementById("myBalance").innerText;



    if(addAmount > 0 && parseFloat(myBalance )>=  addAmount ){
        const amountAdd = parseFloat(addAmount) + parseFloat(totalAmount)
        document.getElementById('total-amount').innerText = amountAdd;

        const balance = parseFloat(myBalance) - addAmount;
        document.getElementById('myBalance').innerText = balance;
        
         // Modal Interface
        document.getElementById("modal-text").innerText ="Congrats !";
        const donate_title = document.getElementById('donate-title').innerText;
        console.log(donate_title)
         const time = new Date();
         const dateTime =   document.innerText = time;
         const div = document.createElement('div');
         div.innerHTML =`
         <div class="border border-black p-3 rounded-md mt-5">
          <h3> ${parseFloat(addAmount)} Taka is   ${donate_title}</h3>
      
         <p>${dateTime}</p>
         </div>
        
         
         `

         document.getElementById('ty').appendChild(div);

        
       
      console.log(lll)

    }else{
       document.getElementById("modal-text").innerText ="Inalid!"
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


