function createPhoneNumber(numbers){
    const numbersInStrings = numbers.join('');
     return `(${numbersInStrings.slice(0,3)}) ${numbersInStrings.slice(3,6)}-${numbersInStrings.slice(6)}`
}