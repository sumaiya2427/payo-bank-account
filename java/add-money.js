document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const amount = document.getElementById("add-money").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const pinConverted = parseInt(pin);
    const mainBlance = document.getElementById("main-blance").innerText;
    const convertedMain = parseFloat(mainBlance);
    if (pinConverted === 1234) {
      const sum = convertedMain + convertedAmount;
      document.getElementById("main-blance").innerText = sum;
    } else {
      console.log("pin sothik na");
    }
  });
