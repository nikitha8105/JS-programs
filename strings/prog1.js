function countWords(str) {
    return str.trim().split(/\s+/).length;
}

const result = countWords("Hi welcome to Coding.");
console.log(result); 