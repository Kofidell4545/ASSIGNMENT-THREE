
fuction numberToGrade(score) {
  
if(score >= 90) {
   return  "A";

}

else if (score >= 80) {
   return  "B"; 

}

else if(score >= 70 ) {
    return  "C";
    
}

else if (score >= 60){
    return  "D";

}

else {
    return  "D";

}
}
const numScore = 60;
const letterGrade = numberToGrade(numScore);

console.log("The letter grade is:" letterGrade);
