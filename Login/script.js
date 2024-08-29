const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  signupSubmitBtn = document.querySelector("#signup-button"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  otpForm = document.querySelector(".otp_form");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
})

signupSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateSignupForm()) {
        signupForm.classList.remove("active");
        otpForm.classList.add("active");
    }
});



const otpSubmitBtn = otpForm.querySelector("button");
otpSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateOtpForm()) {
        alert("OTP Verified Successfully!");
        formContainer.classList.remove("active");
        resetForms();
    }
});

function validateOtpForm() {
    const inputs = otpForm.querySelectorAll("input");
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }
    return true;
}



let currentStep = 1;

function nextStep() {
    if (validateStep(currentStep)) {
        document.querySelector(`#step-${currentStep}`).classList.remove('active');
        document.querySelector(`.progress-bar .step:nth-child(${currentStep}) .bullet`).classList.remove('active');
        currentStep++;
        document.querySelector(`#step-${currentStep}`).classList.add('active');
        document.querySelector(`.progress-bar .step:nth-child(${currentStep}) .bullet`).classList.add('active');
    }
}

function validateStep(step) {
    const inputs = document.querySelectorAll(`#step-${step} input`);
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }
    return true;
}

function submitForm() {
    if (validateStep(currentStep)) {
        alert('KYC Submitted Successfully!');
        document.getElementById('kycForm').reset();
        resetProgressBar();
    }
}

function resetProgressBar() {
    currentStep = 1;
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.querySelectorAll('.bullet').forEach(bullet => bullet.classList.remove('active'));
    document.querySelector(`#step-${currentStep}`).classList.add('active');
    document.querySelector(`.progress-bar .step:nth-child(${currentStep}) .bullet`).classList.add('active');
}
