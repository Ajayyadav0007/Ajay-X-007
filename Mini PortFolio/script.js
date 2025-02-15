const togglebtn = document.getElementById("toggle-thm");
togglebtn.addEventListener("click",function(){
  document.body.classList.toggle("dark-mode")
})

/*const adminbtn = document.getElementById("admin-login");
adminbtn.addEventListener("click",function(){
 document.getElementById("admin-login").style.display ="block"                        
     })*/

function showAdminSection(){
document.getElementById("admin-login").style.display ="block"
}

document.getElementById("admin-form").addEventListener('submit',function(e){
  e.preventDefault();
  const usernameJS = document.getElementById("username").value;
  const passwordJS = document.getElementById("password").value;
  
  const storedUsername ="admin";
  const storedpassword ="password";
  if(usernameJS == storedUsername && passwordJS == storedpassword){
    alert("Welcome,Admin");
    document.getElementById("admin-login").style.display ="none";
    document.getElementById("admin-section").style.display ="block";
    showStoredUserNotification();
  }
  else{
    alert("Invalid!,Username or Password");
  }
});

  document.getElementById("contact-form").addEventListener('submit',function(e){
  e.preventDefault();
  const nameValue = document.getElementById("name").value;
   const emailValue = document.getElementById("email").value;
   const messageValue = document.getElementById("message").value;
  
  const response = { nameValue, emailValue, messageValue, date: new Date().toISOString() };
  
  const notification = JSON.parse(localStorage.getItem('notification')) || [ ];
  notification.push(response);
  localStorage.setItem("notification", JSON.stringify(notification));
  alert("Thank Your For Your Response, I Will get in touch With you ASAP.....");
  this.reset();
});

function showStoredUserNotification(){
 const responseContainer = document.getElementById("user-responses");
 const notification = JSON.parse(localStorage.getItem('notification')) || [ ];
  responseContainer.innerHTML= '';
  notification.forEach(response=>{
    const responseElement = document.createElement('div');
    responseContainer.innerHTML= `
    <p> Name:${response.nameValue} </p>
    <p> Email:${response.emailValue} </p>
    <p> Message:${response.messageValue} </p>
    <p> Date:${response.date} </p>
    <hr>
    `
    responseContainer.append(responseElement);

    
  });

}
