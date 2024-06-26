function extractEmails(text) {
    // Define a regular expression pattern for matching email addresses
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    
    // Use the match method to find all matches in the text
    const emails = text.match(emailPattern);
    
    // If no matches found, return false
    if (!emails || emails.length === 0) {
        console.log("Aucune adresse e-mail trouvée.");
        return false;
    }
    
    // Display the found email addresses
    emails.forEach((email) => {
        console.log("Adresse e-mail trouvée :", email);
    });
    
    // Return true indicating email addresses were found
    return true;
}

// Example usage
const sampleText = "voici mon adresse e-mail : test@example.com et une autre : contact@domaine.fr";
const hasEmails = extractEmails(sampleText);

if (hasEmails) {
    console.log("Des adresses e-mail ont été trouvées dans le texte.");
} else {
    console.log("Aucune adresse e-mail n'a été trouvée dans le texte.");
}
