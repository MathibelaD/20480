// Get the registration <form> element from the DOM.
const form = document.getElementById("registration-form");
const submitButton = form.querySelector("button");
    
// TODO: Get the password <input> elements from the DOM by ID
// const passwordInput = ...;
    const passwordInput = document.getElementById("password")
// const confirmPasswordInput = ...;
const confirmPasswordInput = document.getElementById("confirm-password")

const checkPasswords = function () {

    // TODO: Compare passwordInput value to confirmPasswordInput value
    var passwordsMatch = false
    var pass = passwordInput.value;
    var confirmPass = confirmPasswordInput.value;
    console.log(pass, confirmPass)
    if (pass === confirmPass){
        passwordsMatch = true;
    }
    if(passwordsMatch = false){
        submitButton.setCustomValidity("Password not matching")
    }
    return passwordsMatch;
};

const addPasswordInputEventListeners = function () {
    // TODO: Listen for the "input" event on passwordInput and confirmPasswordInput.
    //       Call the checkPasswords function
};

const formSubmissionAttempted = function() {
    form.classList.add("submission-attempted");
};

const addSubmitClickEventListener = function() {
    submitButton.addEventListener("click", formSubmissionAttempted, false);
};
const submitForm = () => {
    submitButton.addEventListener("click", checkPasswords)
}
// checkPasswords()
addPasswordInputEventListeners();
addSubmitClickEventListener();
submitForm()