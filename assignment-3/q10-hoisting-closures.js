// Q10 Nested Hoisting and Closures
function outer(){console.log("outer before assignment:",count);var count=5;
 function inner(){console.log("inner before assignment:",count);var count=10;}
 inner();console.log("outer after inner:",count);}
outer();
// Each function has its own execution context; inner's var count shadows outer count.