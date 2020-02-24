export function numberScrub(numberString) {
  // removes non-number characters from incoming string incoming number
  let cleaned = ("" + numberString).replace(/\D/g, "");
  let newNum = `+1${cleaned}`;
  if (newNum.length > 12) {
    alert("Please enter area code and number only");
  }
  return newNum;
}
