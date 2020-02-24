export function numberScrub(numberString) {
  // removes non-number characters from incoming string incoming number
  let cleaned = ("" + numberString).replace(/\D/g, "");
  let newNum = `+1${cleaned}`;
  if (newNum.length > 12) {
    alert("Please enter area code and number only");
  }
  return newNum;
}

export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
}

export function searchNumber(numberString) {
  let cleaned = ("" + numberString).replace(/\D/g, "");
  return cleaned;
}

export function viewKeywords(array) {
  let unique = [...new Set(array)];
  return unique.join(", ");
}
