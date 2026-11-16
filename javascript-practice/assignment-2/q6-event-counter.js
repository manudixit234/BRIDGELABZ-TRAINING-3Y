// Q6 Event-Based Counter Simulation
let count=0;
function increment(){count++;console.log("Count:",count);}
function decrement(){count--;console.log("Count:",count);}
function nestedScopeDemo(){function showCount(){console.log("Nested function sees count:",count);}showCount();}
increment();increment();decrement();nestedScopeDemo();