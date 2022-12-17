let data = JSON.parse(localStorage.getItem("data"))||[];

const signupForm = document.getElementById('signup-form');

//Handle the signup form submit event
 signupForm.addEventListener('submit', (e) =>{

// Prevent the default form submission

 e.preventDefault();
// Get the username and password values

const username = signupForm['username'].value;
const password = signupForm['password'].value;

let obj = 
{
username:username,
password: password
}
data.push(obj);
//  data.push(password);
localStorage.setItem("data",JSON.stringify(data));

window.location = "/index.html";
})