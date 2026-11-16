// Q5 Boolean Logic Access System
const isDoorLocked=true,isWindowClosed=true,isAlarmOn=true,isOwnerInside=true;
const secure=isAlarmOn&&isDoorLocked&&isWindowClosed&&isOwnerInside;
console.log(secure?"Secure":"Unsafe"); // Change values to test scenarios.
