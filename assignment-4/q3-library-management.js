// Q3 Library Management System
class Book{constructor(title,author,isbn,isIssued=false){Object.assign(this,{title,author,isbn,isIssued});}issueBook(){if(this.isIssued)return "Already issued";this.isIssued=true;return "Book issued";}returnBook(){this.isIssued=false;return "Book returned";}}
const books=[new Book("Atomic Habits","James Clear","1001"),new Book("Clean Code","Robert C. Martin","1002",true)];
console.log("Available:",books.filter(book=>!book.isIssued));
const requested=books.find(book=>book.isbn==="1001");console.log(requested?requested.issueBook():"ISBN not found");