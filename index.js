/* Function to compute and display the total bill amount after adding the tip */
function computeTotalWithTip() {
  // Retrieve the base bill amount entered by the user
  let initialBillAmount = +document.getElementById("baseBillAmount").value;

  // Retrieve the tip percentage selected by the user
  let chosenTipPercentage = +document.getElementById("selectedTipRate").value;

  // Calculate the final bill amount after adding the tip
  let totalBillAmount = initialBillAmount * (1 + chosenTipPercentage / 100);

  // Display the computed total bill amount
  document.getElementById(
    "finalBillAmountDisplay"
  ).innerText = `Total Amount (including a ${chosenTipPercentage}% tip): $${totalBillAmount.toFixed(
    2
  )}`;
}
