// Q8 Strict Mode Showdown
"use strict";
// In strict mode duplicate parameter names, implicit globals and deleting variables are errors.
function demo(first,second){const total=first+second;console.log(total);}
demo(5,10);
// The original function fails parsing because it declares duplicate parameter names.