// Q8 Dynamic Object Updater
const user={name:"John",email:"john@mail.com",age:21},form=document.querySelector("#profile"),details=document.querySelector("#details");
function render(){details.textContent=JSON.stringify(user,null,2);}render();
form.addEventListener("submit",event=>{event.preventDefault();const values=new FormData(form);user.name=values.get("name");user.email=values.get("email");user.age=Number(values.get("age"));render();});