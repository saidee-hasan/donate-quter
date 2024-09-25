document.getElementById("donate").addEventListener("click", function (e) {
  e.preventDefault;

  const donateAmount = document.querySelector(".donate-amount").value;
  const totalAmount = document.querySelector(".total-amount").innerText;
  const myBalance = document.querySelector(".myBalance").innerText;

  if (donateAmount > 0 && parseFloat(myBalance) >= donateAmount) {
    const amountAdd = parseFloat(donateAmount) + parseFloat(totalAmount);
    document.querySelector(".total-amount").innerText = amountAdd;

    const balance = parseFloat(myBalance) - donateAmount;
    document.querySelector(".myBalance").innerText = balance;

    // Modal Interface
    document.querySelector(".modal-text").innerText = "Congrates !";
    document.querySelector(".modal-p-text").innerText = "you have donated Humankind ";
    document.querySelector(".success-text").innerText = "successfully";

    const donate_title = document.querySelector(".donate-title").innerText;
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

    document.querySelector(".total-history-text").appendChild(div);

    console.log(lll);
  } else {
    document.querySelector(".modal-text").innerText = "Inalid!";
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
