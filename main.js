// donate function
const balance = document.querySelector(".balance span");

function donate(e) {
  let inputValue = e.parentNode.querySelector("input[type='text']");
  let donateAmount = e.parentNode.querySelector(".donation span");
  let heading = e.parentNode.querySelector("h2");

  if (isNaN(Number(inputValue.value)) || Number(inputValue.value) <= 0)
    return alert("invalid input");
  if (Number(inputValue.value) > Number(balance.textContent))
    return alert("insufficient balance");

  balance.innerText = Number(balance.textContent) - Number(inputValue.value);
  donateAmount.textContent =
    Number(donateAmount.textContent) + Number(inputValue.value);

  historySection.innerHTML += `<div class="w-11/12 md:w-9/12 mx-auto p-6 border-2 border-gray-100 rounded-2xl space-y-4">

            <p class="text-lg font-bold">${Number(
              inputValue.value
            )} Taka is Donated for ${heading.innerText.slice(
    heading.innerText.indexOf("for") + 3
  )}</p>
            <p>Date : ${new Date()}</p>

        </div>`;

  inputValue.value = "";
  dialog.style.display = "flex";
}

// toggle active status
const donationBtn = document.querySelector(".donation-btn");
const historyBtn = document.querySelector(".history");

donationBtn.addEventListener("click", activeState);
historyBtn.addEventListener("click", activeState);

function activeState(event) {
  let active = event.target;

  active.classList.remove("bg-transparent");
  active.classList.remove("border-gray-400");
  active.classList.add("border-green-400");
  active.classList.add("bg-green-400");
  active.classList.add("font-bold");

  let dactive = active === donationBtn ? historyBtn : donationBtn;

  dactive.classList.remove("border-green-400");
  dactive.classList.remove("bg-green-400");
  dactive.classList.remove("font-bold");
  dactive.classList.add("bg-transparent");
  dactive.classList.add("border-gray-400");
}

// nested navigation event
const donateSection = document.querySelector(".donate-section");
const historySection = document.querySelector(".history-section");
const footer = document.body.querySelector("footer");

donationBtn.addEventListener("click", showDonate);
historyBtn.addEventListener("click", showDonationHistory);

function showDonate() {
  donateSection.classList.remove("hidden");
  historySection.classList.add("hidden");
  footer.classList.remove("hidden");
}

function showDonationHistory() {
  historySection.classList.remove("hidden");
  donateSection.classList.add("hidden");
  footer.classList.add("hidden");
}

// modal function
const dialog = document.querySelector("dialog");

function closeDialog() {
  dialog.style.display = "none";
}
