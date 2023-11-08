const max=prompt("enter the number:")
const random=Math.floor(Math.random()*max)+1;
console.log(random);
 let guss=prompt("gues the number");
 while(true){
  if(guss == "quit"){
    console.log("quit game")
    break;
  }
  if(guss == random){
    console.log("correct answer",random);
    break;
  }
  else if(guss<random){
    guss=prompt("#your gess is small:")
  }
  else{
     guss=prompt("#your guess bigger")
  }
 }