function convertToRoman(num) {
 let romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
 let decimals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
 let finalRomNum = ""

 for (let i=decimals.length-1; i>=0; i--) {
    while (decimals[i] <= num) {
        finalRomNum += romanNum[i];
        num-=decimals[i];
    }
 }
 return finalRomNum;
}
