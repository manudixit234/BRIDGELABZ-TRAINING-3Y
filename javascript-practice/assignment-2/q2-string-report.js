// Q2 String Manipulation Report
const productName=" wireless headphones PRO ";
const words=productName.trim().toLowerCase().split(/\s+/).map(word=>word[0].toUpperCase()+word.slice(1));
const cleanedTitle=words.join(" ").replace(/Pro/i,"Pro Edition");
console.log("Cleaned title:",cleanedTitle,"Length:",cleanedTitle.length);