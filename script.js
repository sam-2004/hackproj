

let userDetails = {};
let steps = ['income', 'creditScore', 'loanAmount'];
let currentStep = -1;

function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let response = getResponse(userInput);
    document.getElementById("chat-box").innerHTML += "<p>You: " + userInput + "</p>";
    document.getElementById("chat-box").innerHTML += "<p>FinanceBot: " + response + "</p>";
    document.getElementById("user-input").value = "";
}

function getResponse(userInput) {
    if (currentStep >= steps.length) {
        return "You have already provided all necessary details. To check your eligibility again, type 'eligibility'.";
    } else {
        userDetails[steps[currentStep]] = userInput;
        currentStep++;
        if (currentStep >= steps.length) {
            // Check eligibility and provide result
            let eligibilityResult = checkEligibility(userDetails);
            return eligibilityResult;
        } else {
            return "Please enter your " + steps[currentStep];
        }
    }
}

function checkEligibility(userDetails) {
    // Perform eligibility check based on provided details
    // This is a placeholder function, replace it with your actual eligibility check logic
    let income = parseFloat(userDetails['income']);
    let creditScore = parseFloat(userDetails['creditScore']);
    let loanAmount = parseFloat(userDetails['loanAmount']);
    
    // Example eligibility criteria: income > 50000, credit score > 600, loan amount < 100000
    if (income >= 50000 && creditScore > 600 && loanAmount < 100000) {
        return "Congratulations! You are eligible for the loan.";
    } else {
        let reasons = [];
        if (income < 50000) {
            reasons.push("Your income is too low.");
        }
        if (creditScore <= 600) {
            reasons.push("Your credit score is too low.");
        }
        if (loanAmount >= 100000) {
            reasons.push("The loan amount you requested is too high.");
        }
        return "Sorry, you are not eligible for the loan. Reasons: " + reasons.join(", ");
    }
}
