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
    return `${getTens()}`;
  } 
  else if(number > 99 && number < 1000) {
    return `${getHundreds()} ${getTens()}`;
  }
  else if(number > 999 && number < 1000000) {
    return `${getThousand()} ${getHundreds()} ${getTens()}`;
  }
  else if(number > 999999 && number < 999999999) {}
}
console.log(toReadable(1234));