// Q2 Student Form Validator
const form=document.querySelector("#studentForm");
const rules={name:/^[A-Za-z ]+$/,email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,phone:/^\d{10}$/,password:/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/};
form.addEventListener("submit",event=>{event.preventDefault();let valid=true;
 for(const [id,regex] of Object.entries(rules)){const input=document.getElementById(id),ok=regex.test(input.value.trim());input.style.border=ok?"2px solid green":"2px solid red";document.getElementById(id+"Error").textContent=ok?"":"Invalid "+id;valid&&=ok;}
 document.getElementById("result").textContent=valid?"Registration details are valid.":"Please correct the highlighted fields.";});