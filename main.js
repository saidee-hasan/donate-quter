// donate function
const balance = document.querySelector(".balance span");

function donate(el) {
  let inpValue = el.parentNode.querySelector("input[type='text']");
  let donateAmount = el.parentNode.querySelector(".donation span");
  let heading = el.parentNode.querySelector("h2");

  if (isNaN(Number(inpValue.value)) || Number(inpValue.value) <= 0)
    return alert("invalid input");
  if (Number(inpValue.value) > Number(balance.textContent))
    return alert("insufficient balance");

  balance.innerText = Number(balance.textContent) - Number(inpValue.value);
  donateAmount.textContent =
    Number(donateAmount.textContent) + Number(inpValue.value);

  historySec.innerHTML += `<div class="w-11/12 md:w-9/12 mx-auto p-6 border-2 border-gray-100 rounded-2xl space-y-4">

            <p class="text-lg font-bold">${Number(
              inpValue.value
            )} Taka is Donated for ${heading.innerText.slice(
    heading.innerText.indexOf("for") + 3
  )}</p>
            <p>Date : ${new Date()}</p>

        </div>`;

  inpValue.value = "";
  dialog.style.display = "flex";
}

// toggle active status
const donationBtn = document.querySelector(".donation-btn");
const historyBtn = document.querySelector(".history-btn");

donationBtn.addEventListener("click", activeState);
historyBtn.addEventListener("click", activeState);

function activeState(event) {
  let active = event.target;

  active.classList.remove("bg-transparent");
  active.classList.remove("border-gray-400");
  active.classList.add("border-green-400");
  active.classList.add("bg-green-400");
  active.classList.add("font-bold");

  let deactive = active === donationBtn ? historyBtn : donationBtn;

  deactive.classList.remove("border-green-400");
  deactive.classList.remove("bg-green-400");
  deactive.classList.remove("font-bold");
  deactive.classList.add("bg-transparent");
  deactive.classList.add("border-gray-400");
}

// nested navigation event
const donateSec = document.querySelector(".donate-section");
const historySec = document.querySelector(".history-section");
const footer = document.body.querySelector("footer");

donationBtn.addEventListener("click", showDonate);
historyBtn.addEventListener("click", showHistory);

function showDonate() {
  donateSec.classList.remove("hidden");
  historySec.classList.add("hidden");
  footer.classList.remove("hidden");
}

function showHistory() {
  historySec.classList.remove("hidden");
  donateSec.classList.add("hidden");
  footer.classList.add("hidden");
}

// modal function
const dialog = document.querySelector("dialog");

function closeDialog() {
  dialog.style.display = "none";
}
