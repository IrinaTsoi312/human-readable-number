// module.exports = function toReadable (number) {}
function toReadable (number) {
  const digits = {"0": "zero", "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", 7: "seven", "8": "eight", "9": "nine", "20": "twenty", "30": "thirty", "40": "forty", "50": "fifty", "60": "sixty", "70": "seventy", "80": "eighty", "90": "ninety"};
  const uniqueDigits = {"10": "ten", "11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen", "15": "fifteen", "16": "sixteen", "17": "seventeen", "18": "eighteen", "19": "nineteen"};
  const uniqueDigitsKeys = [...Object.keys(uniqueDigits)];
  const counts = ["hundred", "thousand", "million"];
  const stringNumber = number.toString();
  const strLength = stringNumber.length;
  if(number < 10) {
    return digits[stringNumber];
  } 
  else if(number > 9 && number < 100) {
    return `${getTens(stringNumber)}`;
  } 
  else if(number > 99 && number < 1000) {
    return `${getHundreds()} ${getTens()}`;
  }
  else if(number > 999 && number < 1000000) {
    return `${getThousand()} ${getHundreds()} ${getTens()}`;
  }
  else if(number > 999999 && number < 999999999) {}
  function getTens(str) {
    if(str[1] === "0") {
      const digit = str[0] + "0";
      return digits[digit];
    } 
    else if(uniqueDigitsKeys.includes(str)) {
      return uniqueDigits[str];
    }
    else if(str[1] !== "0") {
      const digit = str[0] + "0";
      return digits[digit] + " " + digits[str[1]];
    }
  }
  function getHundreds() {
    return `${digits[stringNumber[strLength-3]]} ${counts[0]}`;
  }
  function getThousand() {
    if(strLength === 4) {
      return `${digits[stringNumber[0]]} ${counts[1]}`;
    } else if(strLength === 5) {
      return `${digits[stringNumber.slice(0, 2)]} ${counts[1]}`;
    } else if(strLength === 6) {
      return `${digits[stringNumber[0]]} ${counts[0]} ${counts[1]}`;
    }
  }
  function getMillions() {
    if(strLength === 7) {
      return `${stringNumber[0]} ${counts[2]}`;
    }
    else if(strLength === 8) {
      return `${getTens}`
    }
  }
}
console.log(toReadable(23));