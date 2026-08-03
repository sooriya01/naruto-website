window.onload = function () {
    alert("🍥 Welcome to the Naruto Anime Website!");
};
// More Details Button
const moreBtn = document.querySelector("button");
moreBtn.addEventListener("click", function () {
    alert(`
Naruto Uzumaki

• Seventh Hokage
• Hero of Hidden Leaf Village
• Master of Rasengan
• Master of Sage Mode
• Saved the Ninja World
`);
});
// Reminder Button
const reminderBtn = document.querySelectorAll("button")[1];
reminderBtn.addEventListener("click", function () {
    let date = document.querySelector("input[type='datetime-local']").value;

    if(date===""){
        alert("Please select date and time.");
    }
    else{
        alert("Reminder Set for\n"+date);
    }

});
// Login
const loginBtn = document.querySelectorAll("button")[2];

loginBtn.addEventListener("click",function(){

    let email=document.querySelectorAll("input[type='text']")[0].value;

    let password=document.querySelectorAll("input[type='password']")[0].value;

    if(email==="" || password===""){
        alert("Please enter username and password.");
    }
    else{
        alert("Login Successful 🍥");
    }

});
// Register
const registerBtn=document.querySelectorAll("button")[3];
registerBtn.addEventListener("click",function(){

    let name=document.querySelectorAll("input[type='text']")[1].value;

    let email=document.querySelectorAll("input[type='text']")[2].value;

    let password=document.querySelectorAll("input[type='password']")[1].value;

    let checkbox=document.querySelectorAll("input[type='checkbox']")[1];

    if(name==="" || email==="" || password===""){
        alert("Fill all registration fields.");
        return;
    }

    if(!checkbox.checked){
        alert("Accept Terms and Conditions");
        return;
    }

    alert("Registration Successful😻🥳");

});
const quotes=[

"Hard work is worthless for those that don't believe in themselves.",

"I'm not gonna run away, I never go back on my word.",

"The moment people come to know love, they run the risk of carrying hate.",

"When people are protecting something truly precious to them, they truly can become as strong as they need to be."

];
setInterval(function(){

    let random=Math.floor(Math.random()*quotes.length);

    console.log(quotes[random]);

},5000);

// Dark Mode
const dark=document.createElement("button");
dark.innerHTML="🌙 Dark Mode";
document.body.prepend(dark);

dark.addEventListener("click",function(){
    document.body.classList.toggle("dark");

});