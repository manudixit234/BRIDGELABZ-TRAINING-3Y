// Q10 Citizen Eligibility Validator
const age=22,isCitizen=true;
let result;
if(isCitizen){if(age>=21)result="Eligible for all services.";else if(age>=18)result="Eligible to vote only.";else result="Not eligible yet.";}
else if(age>=18)result="Only age criteria met.";else result="Not eligible yet.";
console.log(result);