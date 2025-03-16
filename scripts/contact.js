const form = document.querySelector("form")
const email = document.querySelector("#email");
const userName = document.querySelector("#name");
const reason = document.querySelector("#reason");
const comments = document.querySelector("#comments");
const emailError = document.querySelector("email-error");
const nameError = document.querySelector("name-error");
const reasonError = document.querySelector("reason-error");
const commentError = document.querySelector("comment-error");
const formErrorInput = document.querySelector("#form-errors");
const form_errors = [];
const sendSound = new Audio('../assets/sounds/confirmation_003.ogg');
sendSound.volume = 0.5;

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        email.style.boxShadow = "none";
    } else {
        emailError.className = "active";
        showEmailError();
        email.style.boxShadow = "0 0 0 3px var(--error-color)";
    }
});

userName.addEventListener("input", (event) => {
    if (userName.validity.valid) {
        nameError.textContent = "";
        userName.style.boxShadow = "none";
    } else {
        nameError.className = "active";
        showNameError();
        userName.style.boxShadow = "0 0 0 3px var(--error-color)";
    }
});

reason.addEventListener("input", (event) => {
    if (reason.validity.valid) {
        reasonError.textContent = "";
        reason.style.boxShadow = "none";
    } else {
        reasonError.className = "active";
        showReasonError();
        reason.style.boxShadow = "0 0 0 3px var(--error-color)";
        
    }
});

comments.addEventListener("input", (event) => {
    if (comments.value.length > (comments.maxLength-50) && comments.value.length <= comments.maxLength) {
        comments.style.boxShadow = "0 0 0 3px yellow";
    } else if (comments.value.length > (comments.maxLength)) {
        comments.style.boxShadow = "0 0 0 3px var(--error-color)";
    } else {
        comments.style.boxShadow = "none";
    }
});

form.addEventListener("submit", (event) => {
    let invalid = false;
    if (!email.validity.valid) {
        emailError.className = "active";
        showEmailError();
        event.preventDefault(event);
        invalid = true;
    }
    if (!userName.validity.valid) {
        nameError.className = "active";
        showNameError();
        event.preventDefault(event);
        invalid = true;
    }
    if (!reason.validity.valid) {
        reasonError.className = "active";
        showReasonError();
        event.preventDefault(event);
        invalid = true;
    }
    if (!comments.validity.valid) {
        commentError.className = "active";
        showCommentError();
        event.preventDefault(event);
        invalid = true;
    }
    formErrorInput.value = form_errors;
    if (!invalid) {
        sendSound.play();
    }
});

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
        form_errors.push("location: email, error: valueMissing");
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be a valid email address.";
        form_errors.push("location: email, error: typeMismatch");
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
        form_errors.push("location: email, error: tooShort");
    }

    setTimeout(() => {
        emailError.className = "fadeOut";
    }, 3000);
}

function showNameError() {
    if (userName.validity.valueMissing) {
        nameError.textContent = "You need to enter a name.";
        form_errors.push("location: name, error: valueMissing");
    } else if (userName.validity.patternMismatch) {
        nameError.textContent = "Invalid character in name.";
        form_errors.push("location: name, error: patternMismatch");
    } else if (userName.validity.tooShort) {
        nameError.textContent = `Name should be at least ${userName.minLength} characters; you entered ${userName.value.length}.`;
        form_errors.push("location name, error: tooShort");
    } else if (userName.validity.tooLong) {
        nameError.textContent = `Name should be at most ${userName.maxLength} characters; you entered ${userName.value.length}.`;
        form_errors.push("location name, error: tooLong");
    }

    setTimeout(() => {
        nameError.className = "fadeOut";
    }, 3000);
}

function showReasonError() {
   if (reason.validity.patternMismatch) {
    reasonError.textContent = "Invalid character in reason.";
    form_errors.push("location: reason, error: patternMismatch");
    } else if (reason.validity.tooLong) {
        reasonError.textContent = `Please keep the reason under ${reason.maxLength} characters; you entered ${reason.value.length}.`;
        form_errors.push("location: reason, error: tooLong");
    }

    setTimeout(() => {
        reasonError.className = "fadeOut";
    }, 3000);
}

function showCommentError() {
    if (comments.validity.valueMissing) {
        commentError.textContent = "Please enter a message.";
        form_errors.push("location: comment, error: valueMissing");
    } else if (comments.validity.tooLong) {
         commentError.textContent = `Please keep the comments under ${comments.maxLength} characters; you entered ${comments.value.length}.`;
         form_errors.push("location: comment, error: tooLong");
     }
 
     setTimeout(() => {
        commentError.className = "fadeOut";
     }, 3000);
 }