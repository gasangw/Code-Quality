function solution(number){
    let finalRomanNumeral = '',
         numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
         romans    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 
   numbers.map((value, index) => {    
     while (number >= value) {
       finalRomanNumeral += romans[index];
       number -= value;
     }
   });
   
   return finalRomanNumeral;
 }
 