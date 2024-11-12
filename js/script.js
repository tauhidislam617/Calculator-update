function toggleCalculator() {
  const calculator = document.getElementById("calculator");
  const closeButton = document.getElementById("close-btn");

  if (calculator.style.display === "none") {
    calculator.style.display = "block";
    closeButton.style.display = "block";
  } else {
    calculator.style.display = "none";
    closeButton.style.display = "none";
  }
}

// Initialize the calculator hidden
document.getElementById("calculator").style.display = "none";
document.getElementById("close-btn").style.display = "none";
