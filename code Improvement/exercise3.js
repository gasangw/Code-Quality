function reverseString(string_) {
    let reversed = "";
    for (const index = string_.length - 1; index >= 0; index--) {
      reversed += string_[index];
    }
    return reversed;
  }