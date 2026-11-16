// Q4 Debugging Mystery
"use strict";
function showMessage(){const greeting="Welcome";console.log(greeting);}
showMessage();
// Original failed because strict mode disallows assigning to an undeclared identifier.
// Debug tip: breakpoint in showMessage; inspect local scope and call stack.