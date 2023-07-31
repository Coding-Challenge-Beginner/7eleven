// !Silahkan cek readme.md terlebih dahulu untuk mengetahui rules test ini!

function sevenElevenRules(name, age, money) {
  // write your code here
}

// TEST CASES
console.log(sevenElevenRules("Malik", 17, 1049000)); // "Anda membeli 20 Rokok, 1 Soda, dan 1 Koran. Sisa uang yang dimiliki adalah 9000"
console.log(sevenElevenRules("Puja", 16, 1049000)); // "Anda membeli 34 Soda dan 2 Koran. Sisa uang yang dimiliki adalah 9000"
console.log(sevenElevenRules("Rizki", 17, 50000)); // "Anda membeli 1 Rokok. Sisa uang yang dimiliki adalah 0"
console.log(sevenElevenRules("Rizki", 16, 50000)); // "Anda membeli 1 Soda dan 2 Koran. Sisa uang yang dimiliki adalah 0"
console.log(sevenElevenRules("Ujang", 20, 48000)); // "Anda membeli 1 Soda dan 1 Koran. Sisa uang yang dimiliki adalah 8000"
console.log(sevenElevenRules("Ujang", 25, 9000)); // "Tidak cukup membeli barang apapun!"
console.log(sevenElevenRules(undefined, 58, 1049000)); // "Anda tidak boleh membeli di 7eleven!"
console.log(sevenElevenRules("", undefined, undefined)); // "Anda tidak boleh membeli di 7eleven!"
console.log(sevenElevenRules()); // "Anda tidak boleh membeli di 7eleven!"
console.log(sevenElevenRules("Abdul", undefined, undefined)); // "Invalid Age dan Money!"
console.log(sevenElevenRules("Abdul", undefined, -10000)); // "Invalid Age dan Money!"
console.log(sevenElevenRules("Abdul", -17, undefined)); // "Invalid Age dan Money!"
console.log(sevenElevenRules("Abdul", -17, 60000)); // "Invalid Age!"
console.log(sevenElevenRules("Abdul", 30, undefined)); // "Invalid Money!"

module.exports = sevenElevenRules;
