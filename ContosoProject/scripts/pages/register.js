// Get the registration <form> element from the DOM.
const form = document.getElementById("registration-form");
const submitButton = form.querySelector("button");
    
// TODO: Get the password <input> elements from the DOM by ID
// const passwordInput = ...;
var passwordInput = document.getElementById("password")
// const confirmPasswordInput = ...;
var confirmPasswordInput = document.getElementById("confirm-password")

const checkPasswords = function () {

    // TODO: Compare passwordInput value to confirmPasswordInput value
    // var passwordsMatch = false
    var passwordsMatch = passwordInput.value === confirmPasswordInput.value;
    if (passwordsMatch) {
        // Clear any previous error message.
        confirmPasswordInput.setCustomValidity("");
    } else {
        // Setting this error message will prevent the submission of the form.
        confirmPasswordInput.setCustomValidity("Your passwords don't match. Please type the same password again.");
    }
    
};

const addPasswordInputEventListeners = function () {
    // TODO: Listen for the "input" event on passwordInput and confirmPasswordInput.
    //       Call the checkPasswords function
    passwordInput.addEventListener("input", checkPasswords, false);
    confirmPasswordInput.addEventListener("input", checkPasswords, false);
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
