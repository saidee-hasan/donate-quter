document.getElementById("donate").addEventListener("click", function (e) {
  e.preventDefault;

  const donateAmount = document.getElementById("donate-amount").value;
  const totalAmount = document.getElementById("total-amount").innerText;
  const myBalance = document.getElementById("myBalance").innerText;

  if (donateAmount > 0 && parseFloat(myBalance) >= donateAmount) {
    const amountAdd = parseFloat(donateAmount) + parseFloat(totalAmount);
    document.getElementById("total-amount").innerText = amountAdd;

    const balance = parseFloat(myBalance) - donateAmount;
    document.getElementById("myBalance").innerText = balance;

    // Modal Interface
    document.getElementById("modal-text").innerText = "Congrates !";
    document.getElementById("modal-p-text").innerText = "you have donate ";

    const donate_title = document.getElementById("donate-title").innerText;
    console.log(donate_title);
    const time = new Date();
    const dateTime = (document.innerText = time);
    const div = document.createElement("div");
    div.innerHTML = `
         <div class="border border-black p-3 rounded-md mt-5">
          <h3 class='font-bold'> ${parseFloat(
            donateAmount
          )} Taka is   ${donate_title}</h3>
      
         <p class="text-gray-400">${dateTime}</p>
         </div>
         `;

    document.getElementById("ty").appendChild(div);

    console.log(lll);
  } else {
    document.getElementById("modal-text").innerText = "Inalid!";
  }
});

// Active Color

function showSectionBtn(id) {
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("history").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
document.getElementById("btn").addEventListener("click", function () {
  showSectionBtn("card-section");
});
document.getElementById("btn-2").addEventListener("click", function () {
  showSectionBtn("history");
});

// Btn Active Color
function showBtnColor(id) {
  document.getElementById(id).classList.add("bg-green-400");
  document.getElementById(id).classList.add("bg-green-400");
}

document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("btn-2").classList.remove("bg-green-400");
  showBtnColor("btn")
});
document.getElementById("btn-2").addEventListener("click", function () {
  document.getElementById("btn").classList.remove("bg-green-400");
  showBtnColor("btn-2")
});
