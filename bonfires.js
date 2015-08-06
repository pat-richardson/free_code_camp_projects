
//Bonfire: Reverse a String
function reverseString(str) {
  str = str.split('');
  str.reverse();
  str = str.join('');
  return str;
}

reverseString('hello there');

//Bonfire: Factorialize a Number
function factorialize(num) {
  var total = 1;
  for(var i = 1; i <= num; i++){
      total = total * i;
  }
  return total;
}

factorialize(5);


//Bonfire: Check for Palindromes
function palindrome(str) {

  var fStr = str.toLowerCase().replace(/[^\w]/g,'');
  var rStr = fStr.split('').reverse().join('');
  
  return fStr === rStr ? true : false;
}



palindrome("A man, a plan, a canal. Panama");

//Bonfire: Find the longest word in a String
function findLongestWord(str) {
  str = str.split(' ');
  var maxLength = 0;
  for(var i = 0; i < str.length; i++){
    maxLength = str[i].length > maxLength ? str[i].length : maxLength;
  }
  return maxLength;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

//Bonfire: Title Case Sentence
function titleCase(str) {
  
  function replaceFirstChar(word, firstLetter){
    var newWord = firstLetter + word.substring(1,word.length);
    return newWord;
  }
  
  str = str.toLowerCase().split(' ');
  for(var i = 0; i < str.length; i++){
    if(str[i] !== ''){
      var upCase = str[i].charAt(0).toUpperCase();
      str[i] = replaceFirstChar(str[i], upCase);
    }
  }
  
  return str.join(' ');
}

titleCase("I'm a little tea pot");

//Bonfire: Return Largest Numbers in Arrays
function largestOfFour(arr) {
  var maxNums = [];
 
  function getMaxOfArray(numArray) {
     return Math.max.apply(null, numArray);
  }
  
  for(var key in arr){
    maxNums.push(getMaxOfArray(arr[key]));
  }
  return maxNums;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Bonfire: Confirm the Ending
function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  return str.substring(str.length - target.length, str.length) == target ? true : false; 
  
}

end('Bastian', 'n');

//Bonfire: Repeat a string repeat a string Difficulty
function repeat(str, num) {
  // repeat after me
  var arrayOfString = [],
      count = num;
  
  while (count > 0){
    arrayOfString[arrayOfString.length] = str;
    count --;
  } 
  
  return num > 0 ? arrayOfString = arrayOfString.join('') : '';    
}
repeat('abc', 5);

//Bonfire: Truncate a string
function truncate(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num){
    str = str.slice(0,(num - 3)) + '...';
  }
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);






