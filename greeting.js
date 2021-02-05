const form= document.querySelector(".js-form"),
    input=form.querySelector("input"),
    greeting=document.querySelector(".js-greetings");
const USER_LD="currentuser"

function paintGreeting(text){
    greeting.innerText=`hello ${text}`
}


function loadName(){
    const currentUser=localStorage.getItem(USER_LD)}
    if(currentUser === null){

    }else{}
  
function init(){
    loadName()
}
init();
