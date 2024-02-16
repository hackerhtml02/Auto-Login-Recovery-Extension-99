// function _0x184b(){var _0x3c46d8=['20XAGMWb','23898OfRfDG','5331762eBvmcY','10670244ZCtSSN','//*[@id=\x22passwordNext\x22]/div/button/span','evaluate','error','location','stellarbyte@fortbendfuture.dev','singleNodeValue','66344SXAvKs','FIRST_ORDERED_NODE_TYPE','input','142167QblnqS','https://www.youtube.com/channel_switcher','https://myaccount.google.com/','2558468KgBHLR','https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1','replace','click','Email\x20input\x20field\x20not\x20found!','dispatchEvent','2wwbEfK','value','//*[@id=\x22identifierId\x22]','Password\x20input\x20field\x20not\x20found!','105MTUDUF','1859379tkXygN','8vgqrNV','href','574eGZPMR','//*[@id=\x22password\x22]/div[1]/div/div[1]/input','https://myaccount.google.com/?pli=1'];_0x184b=function(){return _0x3c46d8;};return _0x184b();}var _0xcaf478=_0x2cc3;(function(_0x4a3cac,_0x532280){var _0x509378=_0x2cc3,_0x1ef49b=_0x4a3cac();while(!![]){try{var _0x4ae5b2=parseInt(_0x509378(0x1e5))/0x1*(-parseInt(_0x509378(0x1ee))/0x2)+parseInt(_0x509378(0x1d2))/0x3+parseInt(_0x509378(0x1e2))/0x4*(parseInt(_0x509378(0x1d1))/0x5)+-parseInt(_0x509378(0x1d9))/0x6*(-parseInt(_0x509378(0x1d5))/0x7)+-parseInt(_0x509378(0x1d3))/0x8*(-parseInt(_0x509378(0x1da))/0x9)+parseInt(_0x509378(0x1d8))/0xa*(-parseInt(_0x509378(0x1e8))/0xb)+-parseInt(_0x509378(0x1db))/0xc;if(_0x4ae5b2===_0x532280)break;else _0x1ef49b['push'](_0x1ef49b['shift']());}catch(_0x178f27){_0x1ef49b['push'](_0x1ef49b['shift']());}}}(_0x184b,0x5f5c1));var emailInput=document[_0xcaf478(0x1dd)](_0xcaf478(0x1f0),document,null,XPathResult['FIRST_ORDERED_NODE_TYPE'],null)[_0xcaf478(0x1e1)];function _0x2cc3(_0x36df68,_0x1eb746){var _0x184b55=_0x184b();return _0x2cc3=function(_0x2cc338,_0x2b7ef0){_0x2cc338=_0x2cc338-0x1d0;var _0x14d5c6=_0x184b55[_0x2cc338];return _0x14d5c6;},_0x2cc3(_0x36df68,_0x1eb746);}if(emailInput){emailInput[_0xcaf478(0x1ef)]=_0xcaf478(0x1e0);var inputEvent=new Event(_0xcaf478(0x1e4),{'bubbles':!![]});emailInput[_0xcaf478(0x1ed)](inputEvent);}else console[_0xcaf478(0x1de)](_0xcaf478(0x1ec));var nextButton=document[_0xcaf478(0x1dd)]('//*[@id=\x22identifierNext\x22]/div/button/span',document,null,XPathResult['FIRST_ORDERED_NODE_TYPE'],null)['singleNodeValue'];nextButton?nextButton[_0xcaf478(0x1eb)]():console['error']('Next\x20button\x20not\x20found!');setTimeout(function(){var _0x382a2d=_0xcaf478,_0x4c3a58=document[_0x382a2d(0x1dd)](_0x382a2d(0x1d6),document,null,XPathResult['FIRST_ORDERED_NODE_TYPE'],null)[_0x382a2d(0x1e1)];if(_0x4c3a58){_0x4c3a58[_0x382a2d(0x1ef)]='Haris123@';var _0x3e8d1e=new Event(_0x382a2d(0x1e4),{'bubbles':!![]});_0x4c3a58[_0x382a2d(0x1ed)](_0x3e8d1e);}else console[_0x382a2d(0x1de)](_0x382a2d(0x1d0));var _0x4d5b3a=document['evaluate'](_0x382a2d(0x1dc),document,null,XPathResult[_0x382a2d(0x1e3)],null)['singleNodeValue'];_0x4d5b3a?_0x4d5b3a[_0x382a2d(0x1eb)]():console[_0x382a2d(0x1de)]('Password\x20Next\x20button\x20not\x20found!');},0xfa0),setTimeout(function(){var _0x22933f=_0xcaf478;if(window[_0x22933f(0x1df)][_0x22933f(0x1d4)]===_0x22933f(0x1e7)||window[_0x22933f(0x1df)][_0x22933f(0x1d4)]===_0x22933f(0x1d7)||window[_0x22933f(0x1df)]['href']===_0x22933f(0x1e9)){var _0x126973=_0x22933f(0x1e6);window[_0x22933f(0x1df)][_0x22933f(0x1ea)](_0x126973);}},0x3e8);

// Define a function to select elements using XPath
function selectElement(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Find the email input field and set its value
var emailInput = selectElement('//*[@id="identifierId"]');
if (emailInput) {
    emailInput.value = 'stellarbyte@fortbendfuture.dev';
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));
} else {
    console.error('Email input field not found!');
}

// Click the next button
var nextButton = selectElement('//*[@id="identifierNext"]/div/button/span');
if (nextButton) {
    nextButton.click();
} else {
    console.error('Next button not found!');
}

// Set a timeout to fill the password field and click its next button
setTimeout(function() {
    var passwordInput = selectElement('//*[@id="password"]/div[1]/div/div[1]/input');
    if (passwordInput) {
        passwordInput.value = 'Haris123@';
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
}, 5000);

