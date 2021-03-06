import { openNotification } from "../components/Notification";

export function numberScrub(numberString) {
  // removes non-number characters from incoming string incoming number
  let cleaned = ("" + numberString).replace(/\D/g, "");
  // adds "+1" to number (so that it fits intl number format)
  let newNum = `+1${cleaned}`;
  // if the number is too long, it return an error
  if (cleaned.length !== 10) {
    openNotification(
      "error",
      "Please enter 10-digit area code and number only"
    );
  }
  return newNum;
}

export function formatPhoneNumber(phoneNumberString) {
  // removes non-number characters from incoming string incoming number
  let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  // regex to format number like (123)123-1234
  let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  // adds intl code for America to the front
  if (match) {
    let intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
}

export function searchNumber(numberString) {
  // removes non-number characters from incoming string incoming number
  let cleaned = ("" + numberString).replace(/\D/g, "");
  return cleaned;
}

export function viewKeywords(array) {
  // goes through an array and returns an array with no duplicates
  let unique = [...new Set(array)];
  return unique.join(", ");
}

export function parsePair(keywordDatePair) {
  // this function takes an array of objects and then parses the value of each index
  let array = [];
  for (let i = 0; i < keywordDatePair.length; i++) {
    let value = keywordDatePair[i].value.split("&&&&");
    value.forEach(item => {
      array.push(item);
    });
  }
  return array;
}

// takes a text input, lowercases it, and capitalizes the first letter.
export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// checks for a valid MM/DD/YYYY date entry
export function checkDate(date) {
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (dateRegex.test(date)) {
    console.log("successful date entry");
  } else {
    return openNotification("error", "Please enter a valid date.");
  }
}
