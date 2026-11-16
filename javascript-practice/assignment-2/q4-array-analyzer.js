// Q4 Array Performance Analyzer
const scores=Array.from({length:8},()=>Math.floor(Math.random()*71)+30);
const highest=Math.max(...scores),lowest=Math.min(...scores),average=scores.reduce((a,b)=>a+b,0)/scores.length,passed=scores.filter(s=>s>=50).length;
console.log({scores,highest,lowest,average:average.toFixed(2),passed});