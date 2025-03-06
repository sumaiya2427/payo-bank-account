document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const pin = document.getElementById("cash-pin").value;
    const convertedPin = parseInt(pin);
    console.log("pin", convertedPin);
    const cashAmount = document.getElementById("cash-amount").value;
    const convertedAmount = parseFloat(cashAmount);
    const mainBlance = document.getElementById("main-blance").innerText;
    console.log("mainBlance", mainBlance);
    const convertedblance = parseFloat(mainBlance);
    if (convertedPin === 1234) {
      sum = convertedblance - convertedAmount;

      document.getElementById("main-blance").innerText = sum;
    } else {
      ("need valid pin");
    }
  });
