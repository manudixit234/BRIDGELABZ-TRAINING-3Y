// Q6 Pyramid Pattern Generator
"use strict";
const rows=5; // Set this to a user-provided row count if desired.
for(let row=1;row<=rows;row++){let line="";for(let column=1;column<=row;column++)line+="* ";console.log(line.trim());}
// Using var reuses a function-scoped binding; let creates a block-scoped binding per loop.