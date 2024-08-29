document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;

    // Get references to the form elements
    const kycForm = document.getElementById('kyc-form');
    const steps = document.querySelectorAll('.progress-bar .step');
    const bullets = document.querySelectorAll('.progress-bar .bullet');

    // Function to move to the next step
    function nextStep() {
        if (validateStep(currentStep)) {
            steps[currentStep - 1].querySelector('.bullet').classList.remove('active');
            document.querySelector(`#step-${currentStep}`).classList.remove('active');
            currentStep++;
            steps[currentStep - 1].querySelector('.bullet').classList.add('active');
            document.querySelector(`#step-${currentStep}`).classList.add('active');
        }
    }

    // Function to validate the current step's inputs
    function validateStep(step) {
        const inputs = document.querySelectorAll(`#step-${step} input, #step-${step} textarea`);
        for (let input of inputs) {
            if (!input.checkValidity()) {
                input.reportValidity();
                return false;
            }
        }
        return true;
    }

    // Function to handle form submission
    kycForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
            alert('KYC Submitted Successfully!');
            kycForm.reset();
            resetProgressBar();
        }
    });

    // Function to reset the progress bar and form
    function resetProgressBar() {
        currentStep = 1;
        bullets.forEach(bullet => bullet.classList.remove('active'));
        steps.forEach(step => step.classList.remove('active'));
        steps[currentStep - 1].querySelector('.bullet').classList.add('active');
    }

    // Optional: Include OTP verification logic here if needed
    // ...

    // Optional: Include camera functionality for capturing the profile picture
    // ...
});
