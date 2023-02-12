//string is palidrome or not


let bag="";
let str="naman";

for(let i=str.length-1; i>=0; i--){
  bag=bag+str[i];
}
if(bag==str){
  console.log("string is palindrome");
}
{
  console.log("String is not palindrome");
}