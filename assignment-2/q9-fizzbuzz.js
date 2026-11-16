// Q9 Odd–Even Number Analyzer
const results=[];
for(let n=1;n<=30;n++){let label;if(n%3===0&&n%5===0)label="FizzBuzz";else if(n%2===0)label="Even";else label="Odd";results.push({number:n,result:label});}
console.table(results);