document.getElementById("cashout").style.display = "none";
document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("cashout").style.display = "none";
  document.getElementById("add-money-section").style.display = "block";
});

// cashout
document.getElementById("cashout-box").addEventListener("click", function () {
  console.log("hello");
  document.getElementById("cashout").style.display = "block";
  document.getElementById("add-money-section").style.display = "none";
});
