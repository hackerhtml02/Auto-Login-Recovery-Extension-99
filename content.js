// Define a function to select elements using XPath
function selectElement(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Find the email input field and set its value
var email = 'stellarbyte@fortbendfuture.dev';
var emailInput = selectElement('//*[@id="identifierId"]');
if (emailInput) {
    emailInput.value = email;
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));
} else {
    console.error('Email input field not found!');
}

// Click the next button for email
var nextButton = selectElement('//*[@id="identifierNext"]/div/button/span');
if (nextButton) {
    nextButton.click();
} else {
    console.error('Next button not found for email!');
}

// Set a timeout to fill the password field and click its next button
setTimeout(function() {
    var password = 'Haris123@';
    var passwordInput = selectElement('//*[@id="password"]/div[1]/div/div[1]/input');
    if (passwordInput) {
        passwordInput.value = password;
        passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
    } else {
        console.error('Password input field not found!');
    }

    var passwordNextButton = selectElement('//*[@id="passwordNext"]/div/button/span');
    if (passwordNextButton) {
        passwordNextButton.click();
    } else {
        console.error('Password next button not found!');
    }
}, 9000);

// Set a timeout to fill the recovery email field and click its next button
setTimeout(function() {
    // Evaluate the XPath expression to find the desired element
    var xpathResult = document.evaluate(
      '//*[@id="yDmH0d"]/c-wiz/div/div[2]/div/div[1]/div/form/span/section[2]/div/div/section/div/div/div/ul/li[3]/div/div[2]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );

    // Extract the node from the XPath result
    var element = xpathResult.singleNodeValue;

    // Check if the element is found
    if (element) {
      // Simulate a click event on the element
      element.click();
    } else {
      console.log("Element not found!");
    }
    // Set a timeout to fill the recovery email field and click its next button
    setTimeout(function() {
        // Find the recovery email input field using XPath
        var recoveryEmailInput = document.evaluate('//*[@id="knowledge-preregistered-email-response"]', document, null,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (recoveryEmailInput) {
            var recoveryemail = 'recovery@email.com';
            // Set the value of the recovery email input field
            recoveryEmailInput.value = recoveryemail;

            // Dispatch an 'input' event to trigger any listeners on the recovery email input field
            var inputEvent = new Event('input', { bubbles: true });
            recoveryEmailInput.dispatchEvent(inputEvent);
        } else {
            console.error('Recovery email input field not found!');
        }

        // Find the element for next button in recovery email section using XPath
        var recoveryNextButton = document.evaluate('//*[@id="yDmH0d"]/c-wiz/div/div[2]/div/div[2]/div/div[1]/div/div/button/div[3]',
            document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (recoveryNextButton) {
            recoveryNextButton.click();
        } else {
            console.error('Recovery email next button not found!');
        }

        // Find the element for next button in recovery email section using XPath
        var recoveryNextButton2 = document.evaluate('//*[@id="yDmH0d"]/c-wiz/div/div[3]/div/div[1]/div/div/button/span',
            document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (recoveryNextButton2) {
            recoveryNextButton2.click();
        } else {
            console.error('Recovery email next button not found!');
        }

        // Find the element for next button in recovery email section using XPath
        var recoveryNextButton3 = document.evaluate('//*[@id="yDmH0d"]/div[1]/div[1]/div[2]/div/div/div[3]/div/div[1]/div/div/button/span',
            document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (recoveryNextButton3) {
            recoveryNextButton3.click();
        } else {
            console.error('Recovery email next button not found!');
        }
    }, 5000); // Assuming the delay for the recovery email section is 5000 milliseconds

}, 20000); // Assuming the delay for the recovery email section is 15000 milliseconds
// Set a timeout to fill the recovery email field and click its next button
setTimeout(function() {
    // Find the element for next button in recovery email section using XPath
    var understandNextButton = document.evaluate('//*[@id="confirm"]',
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (understandNextButton) {
        understandNextButton.click();
    } else {
        console.error('Recovery email next button not found!');
    }
}, 2000); // Assuming the delay for the recovery email section is 15000 milliseconds
