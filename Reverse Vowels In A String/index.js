function reverseVowels(string_) {
    let vowels = [...string_.replaceAll(/[^aeiou]/gi, '')];
  return string_.replaceAll(/[aeiou]/gi, _ => vowels.pop());
}