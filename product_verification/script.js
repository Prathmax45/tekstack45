function verifyProductCode(code) {
    // Regex: 
    // ^      - Start of string
    // #      - '#' character
    // [A-Z]{4} - Exactly 4 uppercase letters
    // \d{3}  - Exactly 3 digits
    // $      - End of string
    const regex = /^#[A-Z]{4}\d{3}$/;
    
    if (regex.test(code)) {
        return "Product code verified successfully";
    } else {
        return "Product code is not valid";
    }
}

// Function to handle the button click on the webpage
function checkCode() {
    const inputCode = document.getElementById('productCode').value;
    const resultMessage = verifyProductCode(inputCode);
    document.getElementById('result').innerText = resultMessage;
}
