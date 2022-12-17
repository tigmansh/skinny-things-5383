
    // Get the login form

 const loginForm = document.getElementById('login-form');

 let data = JSON.parse(localStorage.getItem("data"))||[];

 let user = document.getElementById("user");
 let pass = document.getElementById("pass");

// Handle the login form submit event
loginForm.addEventListener('submit', (e) => {
  // Prevent the default form submission
  e.preventDefault();

  // Get the username and password values
  const username = loginForm['username'].value;
  const password = loginForm['password'].value;

  // Loop over the local storage items
  for(let i=0; i<data.length; i++){
    if (username===data[i].username && password===data[i].password){
      window.location = "/home.html";
      // alert("logged in");
      break;
    }
    else if (username !== data[i].username){
      user.innerText = "Wrong Username";
    }
    else if(password !== data[i].password){
      pass.innerText = "Wrong Password";
    }
    else{
      user.innerText = "Wrong Username";
      pass.innerText = "Wrong Password";
    }
  }
});

