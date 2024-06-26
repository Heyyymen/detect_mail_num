function extractPhoneNumbers(text) {
    // Define a general regular expression pattern for matching international phone numbers
    const phonePattern = /\+?\d{1,3}?[\s.-]?\(?\d{1,4}?\)?(?:[\s.-]?\d){6,14}/g;
    
    // Use the match method to find all matches in the text
    const phoneNumbers = text.match(phonePattern);
    
    // If no matches found, return false
    if (!phoneNumbers || phoneNumbers.length === 0) {
        console.log("Aucun numéro de téléphone trouvé.");
        return false;
    }
    
    // Format and display the phone numbers
    phoneNumbers.forEach((phoneNumber) => {
        const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
        console.log("Numéro de téléphone trouvé :", formattedPhoneNumber);
    });
    
    // Return true indicating phone numbers were found
    return true;
}

function formatPhoneNumber(phoneNumber) {
    // Remove all non-digit characters except the leading plus
    const cleaned = phoneNumber.replace(/[^\d+]/g, '');

    // Determine if the number starts with a plus sign
    const startsWithPlus = cleaned.startsWith('+');

    // If the number starts with a plus, keep the plus, otherwise start with an empty string
    const prefix = startsWithPlus ? '+' : '';
    const number = startsWithPlus ? cleaned.slice(1) : cleaned;

    // Group the digits in pairs and join them with spaces
    const grouped = number.match(/.{1,2}/g).join(' ');

    // Return the formatted number with the original prefix
    return prefix + grouped;
}

// Example usage
const sampleText = "voici mon numéro de téléphone : +33 6 45 85 65 68, 06 84 86 65 26";
const hasPhoneNumbers = extractPhoneNumbers(sampleText);

if (hasPhoneNumbers) {
    console.log("Des numéros de téléphone ont été trouvés dans le texte.");
} else {
    console.log("Aucun numéro de téléphone n'a été trouvé dans le texte.");
}