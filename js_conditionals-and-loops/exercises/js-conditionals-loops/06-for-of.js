// Exercise 06 — for...of
// ----------------------
// Implement countVowels(word): return how many vowels (a, e, i, o, u) are in
// the given lowercase string. For example countVowels("banana") is 3.
// An empty string has 0 vowels.
//
// Use a for...of loop to walk through each character of the string. Hint: an
// array or string of vowels plus .includes(char) makes the check easy.

function countVowels(word) {
  const vowels = "aeiouAEIOU"
  let countVowels = 0;/*
  for (const char of word) {
    if (vowels.includes(char)) {
      countVowels++;
    }*/
    // หรือ 
  
    for (const char of word) {
      
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        countVowels++;
      }
    
  }
  return countVowels;
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(countVowels("banana"), 3);
strictEqual(countVowels("rhythm"), 0);
strictEqual(countVowels("education"), 5);
strictEqual(countVowels(""), 0);
strictEqual(countVowels("aeiou"), 5);

console.log("All tests passed ✅");
