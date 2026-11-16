// Q9 Random Math Quiz Generator
const a=Math.floor(Math.random()*20)+1,b=Math.floor(Math.random()*20)+1;
const operators=["+","-","*","/"],operator=operators[Math.floor(Math.random()*operators.length)];
let answer;
switch(operator){case "+":answer=a+b;break;case "-":answer=a-b;break;case "*":answer=a*b;break;case "/":answer=(a/b).toFixed(2);break;}
console.log(`Question: ${a} ${operator} ${b}`,"Correct answer:",answer);