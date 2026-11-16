// Q7 Customer Feedback Processor
const feedback="Great product! Fast delivery and amazing sound quality!";
const words=feedback.trim().split(/\s+/).length,lower=feedback.toLowerCase();
const negative=lower.includes("bad")||lower.includes("poor");
console.log({wordCount:words,result:negative?"Needs Improvement":"Positive Feedback"});