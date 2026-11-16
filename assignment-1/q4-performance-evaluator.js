// Q4 Academic Performance Evaluator
const marks=[88,76,91,82,79];
const total=marks.reduce((a,b)=>a+b,0), average=total/marks.length, percentage=total/(marks.length*100)*100;
let result;
if(marks.some(mark=>mark<35)) result="Detained";
else if(percentage>=85) result="Promoted with Distinction";
else if(percentage>=50) result="Promoted";
else result="Detained";
console.log({marks,average:average.toFixed(2),percentage:percentage.toFixed(2)+"%",result});