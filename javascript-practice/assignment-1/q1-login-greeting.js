// Q1 Personalized Login Greeting
const userName = "Manu";
const hour = new Date().getHours();
const greeting = hour < 12 ? "Good Morning" : hour <= 17 ? "Good Afternoon" : "Good Evening";
console.log(`${greeting} ${userName}!`);