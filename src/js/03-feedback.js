const throttle = require('lodash.throttle'); 
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle((collectData), 500));
feedbackForm.addEventListener('submit', submitFeedback)


let feedbackData = {};
let userData = {}
autoFillText();

function collectData(e){
    if(e.target.value){
    feedbackData[e.target.name] = e.target.value;
    const feedbackDataJSON = JSON.stringify(feedbackData);
    localStorage.setItem("feedback-form-state", feedbackDataJSON)
}
}
    
function autoFillText(){
    const savedUserFeedback = localStorage.getItem("feedback-form-state")
    if(savedUserFeedback) {
         userData = JSON.parse(savedUserFeedback)
    emailInputFill(userData);
    messageInputFill(userData)
       return userData;
    }
}

function emailInputFill (userData){
    if(userData.email){
        feedbackForm.email.value = userData.email;
    }
}

function messageInputFill (userData){
    if(userData.message){
        feedbackForm.message.value = userData.message;
    }
}

function submitFeedback(e){
    e.preventDefault();
    if(feedbackData.email && feedbackData.message) {
    e.target.reset();
    localStorage.removeItem("feedback-form-state")
    console.log(feedbackData)
    feedbackData = {};
    return;
}
alert('Усі поля мають бути заповнені')
return;
}

