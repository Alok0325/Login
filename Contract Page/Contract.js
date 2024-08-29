const pdfContainer = document.getElementById('pdf-container');
const agreeCheckbox = document.getElementById('agree-checkbox');
const finishButton = document.getElementById('finish-button');

pdfContainer.addEventListener('scroll', () => {
    const isScrolledToEnd = pdfContainer.scrollHeight - pdfContainer.scrollTop === pdfContainer.clientHeight;
    if (isScrolledToEnd) {
        agreeCheckbox.disabled = false;
    }
});

agreeCheckbox.addEventListener('change', () => {
    finishButton.disabled = !agreeCheckbox.checked;
});
