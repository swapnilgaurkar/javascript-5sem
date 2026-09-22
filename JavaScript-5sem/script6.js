const input = document.getElementById("textInput");
const button = document.getElementById("checkButton");
const result = document.getElementById("result");


function checkPalindrome() {

    // Get user input
    const originalText = input.value.trim();

    // Empty input validation
    if (originalText === "") {

        result.textContent = "⚠️ Please enter some text.";

        result.className = "result error";

        return;
    }


    // Convert text for palindrome checking
    // Example:
    // "Madam" -> "madam"
    // "Never odd or even" -> "neveroddoreven"

    const cleanedText = originalText
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");


    // Reverse text
    const reversedText = cleanedText
        .split("")
        .reverse()
        .join("");


    // Check palindrome
    if (cleanedText === reversedText) {

        result.textContent =
            `✨ "${originalText}" is a palindrome!`;

        result.className = "result success";

    } else {

        result.textContent =
            `❌ "${originalText}" is not a palindrome.`;

        result.className = "result error";
    }
}


// Button click
button.addEventListener("click", checkPalindrome);


// Allow ENTER key
input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkPalindrome();
    }

});