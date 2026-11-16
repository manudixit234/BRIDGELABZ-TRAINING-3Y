// Q2 Microtasks run after synchronous code and before timer macrotasks.
console.log("Start");
setTimeout(()=>console.log("Timeout callback (macrotask)"),0);
Promise.resolve().then(()=>console.log("Promise callback (microtask)"));
console.log("Synchronous log");
console.log("End");
// Output: Start, Synchronous log, End, Promise callback, Timeout callback.