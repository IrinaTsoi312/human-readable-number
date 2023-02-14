module.exports = function toReadable (number) {
  const digits = {"0": "zero", "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", 7: "seven", "8": "eight", "9": "nine", "20": "twenty", "30": "thirty", "40": "forty", "50": "fifty", "60": "sixty", "70": "seventy", "80": "eighty", "90": "ninety"};
  const uniqueDigits = {"10": "ten", "11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen", "15": "fifteen", "16": "sixteen", "17": "seventeen", "18": "eighteen", "19": "nineteen"};
  const uniqueDigitsKeys = [...Object.keys(uniqueDigits)];
  const counts = ["hundred", "thousand"];
  const stringNumber = number.toString();
  const strLength = stringNumber.length;
  if(number < 10) {
    return digits[stringNumber];
  } 
  else if(number > 9 && number < 100) {
    return `${getTens(stringNumber)}`;
  } 
  else if(number > 99 && number < 1000) {
    if(stringNumber.slice(-2) === "00") {
      return getHundreds(stringNumber.slice(-3));
    } else {
      return `${getHundreds(stringNumber.slice(-3))} ${getTens(stringNumber.slice(-2))}`;
    }
  }
  else if(number > 999 && number < 1000000) {
    return `${getThousand(stringNumber)} ${getHundreds(stringNumber.slice(-3))} ${getTens(stringNumber.slice(-2))}`;
  }
  function getTens(str) {
    if(uniqueDigitsKeys.includes(str)) {
      return uniqueDigits[str];
    }
    else if(str[1] === "0") {
      const digit = str[0] + "0";
      return digits[digit];
    } 
    else if(str[0] === "0") {
      return digits[str[1]];
    }
    else if(str[1] !== "0") {
      const digit = str[0] + "0";
      return digits[digit] + " " + digits[str[1]];
    }
  }
  function getHundreds(str) {
    return `${digits[str[0]]} ${counts[0]}`;
  }
  function getThousand(str) {
    if(strLength === 4) {
      return `${digits[str[0]]} ${counts[1]}`;
    } else if(strLength === 5) {
      return `${getTens(str.slice(0, 2))} ${counts[1]}`;
    } else if(strLength === 6) {
      return `${digits[stringNumber[0]]} ${counts[0]} ${counts[1]}`;
    }
  }
}