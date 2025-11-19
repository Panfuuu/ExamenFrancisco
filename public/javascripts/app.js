document.addEventListener("DOMContentLoaded", function() {
    const boxRegistered = document.getElementById("box-registered");
    const loginForm = document.getElementById("login-form");
    const cancelLogin = document.getElementById("cancel-login");
  
    const boxNew = document.getElementById("box-new");
    const registerForm = document.getElementById("register-form");
    const cancelRegister = document.getElementById("cancel-register");
  
    boxRegistered.addEventListener('click', function(evt) {
      if (evt.target === boxRegistered) {
        loginForm.classList.remove('hidden');
      }
    });
  
    cancelLogin.addEventListener('click', function(e){
      e.preventDefault();
      loginForm.classList.add('hidden');
    });
  
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert("Enviando correo!");
      loginForm.classList.add('hidden');
    });
  
    boxNew.addEventListener('click', function(evt){
      if (evt.target === boxNew) {
        registerForm.classList.remove('hidden');
      }
    });
    cancelRegister.addEventListener('click', function(e){
      e.preventDefault();
      registerForm.classList.add('hidden');
    });
  
    registerForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert("Enviando correo!");
      registerForm.classList.add('hidden');
    });
  });
  