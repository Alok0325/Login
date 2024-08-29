document.addEventListener("DOMContentLoaded", function() {
    const kycStatusDiv = document.getElementById("kyc-status");

    function showKYCStatus(status) {
        let statusText;
        switch(status) {
            case "incomplete":
                statusText = "KYC is Incomplete";
                kycStatusDiv.style.color = "blue";
                break;
            case "pending":
                statusText = "KYC is Pending";
                kycStatusDiv.style.color = "yellow";
                break;
            case "completed":
                statusText = "KYC is Completed";
                kycStatusDiv.style.color = "green";
                break;
            case "rejected":
                statusText = "KYC is Rejected";
                kycStatusDiv.style.color = "red";
                break;
            default:
                statusText = "KYC Status Unknown";
                kycStatusDiv.style.color = "black";
        }
        kycStatusDiv.textContent = statusText;
    }

    // Replace "completed" with "incomplete", "pending", "completed", or "rejected" to see different statuses
    showKYCStatus("completed");
});
