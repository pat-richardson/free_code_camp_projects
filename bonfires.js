
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






