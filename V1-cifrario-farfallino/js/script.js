let string = "Marco";
let newString = string;
console.log(String);

console.log(newString);

for (let i = 0; i < newString.length; i++) {
 // console.log(string[i]);
  if (string[i] === 'a') {
    newString = newString.replace("a", "afa");
  }
  else if (string[i] === 'e') {
    newString = newString.replace("e", "efe");
  }
  else if ( string[i] === 'i'){
    newString = newString.replace("i", "ifi");
  }
  else if (string[i] === 'o') {
    newString = newString.replace("o", "ofo");
  }
  else if (string[i] === 'u' ) {
    newString = newString.replace("u", "ufu");
  }
  
}
console.log(newString)

