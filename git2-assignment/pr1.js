//Identify Prime

let num = 17;
let count=0;

for(let i=0; i<=num; i++){
  if(num%i==0){
    count++;    
  }
}
if(count==2){
  console.log("It is Prime Number");
}
else{
  console.log("It is not a prime number")
}

