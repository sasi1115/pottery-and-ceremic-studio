const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
 
const rtlBtn = document.querySelector(".nav-buttons .btn");
const themeBtn = document.querySelector(".logo-btn");
const loginBtn = document.querySelector(".navbar .login-btn");
 
 
if(menuBtn && navLinks){
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.innerHTML = navLinks.classList.contains("active") ? "✖" : "☰";
  });
}
 
 
function enableRTL(){
  document.documentElement.classList.toggle("rtl");
 
  if(document.documentElement.classList.contains("rtl")){
    localStorage.setItem("direction","rtl");
    if(rtlBtn) rtlBtn.innerHTML = "LTR";
  }else{
    localStorage.setItem("direction","ltr");
    if(rtlBtn) rtlBtn.innerHTML = "RTL";
  }
}
 
 
if(themeBtn){
  themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
 
    if(document.documentElement.classList.contains("dark-mode")){
      themeBtn.innerHTML = `<span class="sun-icon">☀</span>`;
      localStorage.setItem("theme","dark");
    }else{
      themeBtn.innerHTML = `<div class="moon"></div>`;
      localStorage.setItem("theme","light");
    }
  });
}
 
 
function openLoginPage(){
  window.location.href = "login.html";
}
 
if(loginBtn){
  loginBtn.addEventListener("click", openLoginPage);
}
 
 
if(localStorage.getItem("theme") === "dark"){
  document.documentElement.classList.add("dark-mode");
  if(themeBtn){
    themeBtn.innerHTML = `<span class="sun-icon">☀</span>`;
  }
}
 
 
if(localStorage.getItem("direction") === "rtl"){
  document.documentElement.classList.add("rtl");
  if(rtlBtn){
    rtlBtn.innerHTML = "LTR";
  }
}

function openMenu(){

    document
    .getElementById("mobileMenu")
    .classList.toggle("show");

}

