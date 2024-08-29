document.addEventListener("DOMContentLoaded", function() {
    const panNumberInput = document.getElementById("pan-number");
    const aadhaarNumberInput = document.getElementById("aadhaar-number");

    // Validate PAN number (should be 10 characters)
    panNumberInput.addEventListener("input", function() {
        if (this.value.length > 10) {
            alert("PAN number should not exceed 10 characters.");
            this.value = this.value.slice(0, 10);
        }
    });

    // Validate Aadhaar number (should be 12 characters)
    aadhaarNumberInput.addEventListener("input", function() {
        if (this.value.length > 12) {
            alert("Aadhaar number should not exceed 12 characters.");
            this.value = this.value.slice(0, 12);
        }
    });
});
