// alert();
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
    const accountNumber = document.getElementById("account-number").value;
    console.log(accountNumber);
    const pin = document.getElementById("pin").value;
    console.log(accountNumber, pin);
    if (accountNumber.length === 11) {
      console.log("okay thik ace");
      if (parseInt(pin) === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("pin thik nai");
      }
    } else {
      alert(" need valid account number");
    }
  });
