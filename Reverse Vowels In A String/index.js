function reverseVowels(string_) {
    const vowels = [...string_.replaceAll(/[^aeiou]/gi, '')]
    return string_.replaceAll(/[aeiou]/gi, ()=> vowels.pop())
}