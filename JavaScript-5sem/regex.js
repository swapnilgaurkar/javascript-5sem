document.getElementById('processBtn').addEventListener('click', function() {
    const rawText = document.getElementById('rawText').value;
    
    // --- 1. Extraction Regex Patterns ---
    const nameMatch = rawText.match(/Student Name:\s*(.*)/i);
    const prnMatch = rawText.match(/PRN:\s*(.*)/i);
    const emailMatch = rawText.match(/Email Address:\s*([\w\.-]+@[\w\.-]+\.\w+)/i);
    const phoneMatch = rawText.match(/Phone Number:\s*(\d+)/i);
    const deptMatch = rawText.match(/Department:\s*(.*)/i);

    // Fallbacks if field does not exist
    let extractedName = nameMatch ? nameMatch[1].trim() : "Not Found";
    let extractedPrn = prnMatch ? prnMatch[1].trim() : "Not Found";
    let extractedEmail = emailMatch ? emailMatch[1].trim() : "";
    let extractedPhone = phoneMatch ? phoneMatch[1].trim() : "";
    let extractedDept = deptMatch ? deptMatch[1].trim() : "Not Found";

    // --- 2. Data Validations ---
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(extractedEmail);

    const phoneRegex = /^\d{10}$/;
    const isPhoneValid = phoneRegex.test(extractedPhone);

    // --- 3. Text Statistics ---
    const totalWords = rawText.trim() === "" ? 0 : rawText.trim().split(/\s+/).length;
    const totalCharsNoSpaces = rawText.replace(/\s+/g, '').length;

    // --- 4. Replacements & Transformations ---
    const lowercaseText = rawText.toLowerCase();
    
    if (extractedDept.toLowerCase() === "computer science") {
        extractedDept = "Information Technology";
    }

    // --- 5. DOM Injection ---
    document.getElementById('outName').textContent = extractedName;
    document.getElementById('outPrn').textContent = extractedPrn;
    document.getElementById('outEmail').textContent = extractedEmail || "Not Found";
    document.getElementById('outPhone').textContent = extractedPhone || "Not Found";
    document.getElementById('outDept').textContent = extractedDept;

    // Email Badge Update
    const emailBadge = document.getElementById('emailStatus');
    if (emailBadge) {
        emailBadge.className = `badge ${isEmailValid ? 'valid' : 'invalid'}`;
        emailBadge.textContent = isEmailValid ? 'Valid' : 'Invalid';
    }

    // Phone Badge Update
    const phoneBadge = document.getElementById('phoneStatus');
    if (phoneBadge) {
        phoneBadge.className = `badge ${isPhoneValid ? 'valid' : 'invalid'}`;
        phoneBadge.textContent = isPhoneValid ? 'Valid' : 'Invalid';
    }

    // Stats injection
    document.getElementById('statWords').textContent = totalWords;
    document.getElementById('statChars').textContent = totalCharsNoSpaces;

    // Lowercase text box injection
    document.getElementById('outLowercase').value = lowercaseText;

    // Reveal output area
    document.getElementById('outputWrapper').classList.remove('hidden');
});
