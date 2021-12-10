function theScript {
//MATH!

var highestNum = Math.max(10.2, 4, 9.5, 15.6, 8.1, 2.7);
var roundedNum = math.round(highestNum);
var sqNum = math.sqrt(roundedNum);

document.write(highestNum);
document.write("<br/>");
document.write("<br/>");
document.write(sqNum);

//RANDOM MATH!

var randNum = Math.random();
var randOnetoTen = randNum * 10 + 1;
var randInt = Math.floor(randOnetoTen);

//Math.floor(Maath.random() * n - s)
// n is number of distinct values in range
//s is lowest value in that range

document.write(randNum);
document.write("<br/>");
document.write(randOnetoTen);
document.write("<br/>");
document.write(randInt);
document.write("<br/.");
document.write("<br/>");

//LOOPS

for(i=0; i<=5; i++){
document.write("The for loop has executed" + Number(i) + "times!<br/>")
document.getElementById("testing").innerHTML += "Hello" + i + "! ";
}

document.write("<br/.");
document.write("<br/>");

//CONDITIONALS

var var1 = "one";
var var2 = "one";

 if (var1 == var2){
   console.log("TRUE");
 }
 else{
   console.log("FALSE");
 }

 if (var1 > var2){
   if (var1 == var2){
     console.log("TRUE");
   }
   else{
     console.log("FALSE");
 }

 if (var1 < var2){
   if (var1 == var2){
     console.log("TRUE");
   }
   else{
     console.log("FALSE");
 }


 //UNLOAD AND TIMING

setTimeout(repeatScript, 1000);

}


function repeatScrip(){
  documnent.write("<div>One Div</div>");
  setTimeout(repeatScript2, 2000);
}

function repeatScrip(){
  documnent.write("<div>Two Div</div>");
setTimeout(repeatScript, 2000);
}
