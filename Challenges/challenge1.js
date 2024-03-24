// input student marks and give grades 
let marks = 15;
// marks conditions
 if (marks > 79 && marks < 100)
{
   console.log(`${marks} = A`);
 } else if(marks >= 60){
    console.log(`${marks} = B`);
 }else if(marks >= 49){
    console.log(`${marks} = C`);
 }else if(marks >= 40){
    console.log(`${marks} = D`);
}
// marks less than 40
else{
    console.log(`${marks} = less`);
 }