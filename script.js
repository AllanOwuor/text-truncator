function truncateText() {
    const inputText = document.getElementById('inputText').value;
    const truncateLength = parseInt(document.getElementById('truncateLength').value);

    if (inputText.length <= truncateLength) {
        document.getElementById('outputText').value = inputText;
    } else {
        const truncatedText = inputText.substring(0, truncateLength) + '...';
        document.getElementById('outputText').value = truncatedText;
    }
}

function copyOutput() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}