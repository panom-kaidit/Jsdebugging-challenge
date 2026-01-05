// Bug 1: Tonnage Validation (Logical Error)
function validateTonnage(tonnage) {
if (tonnage < 1000) {
return "Minimum 1000kg required";
}
return null; // changed true to null
}
// Bug 2: Phone Validation (Runtime Error)
function validatePhone(phone) {
    if (!phone) {
        return false;
    }
    return /^07\d{8}$/.test(phone);
}

// Bug 3: NIN Validation (Logical Error)
function validateNIN(nin) {
    if (!nin) {
        return false;
    }
    return nin.length === 14; //added === instade of =
}

// Bug 4: Price Validation (Syntax Error)
// apparenthesis  was mising on the price
function validatePrice(price) {
return price >= 10000;
}
// Bug 5: Empty Field Check (Logical Error)
function isNotEmpty(value) {
    if (value === null || value === undefined) {
        return false;
    }
    if (typeof value === "string") {
        return value.trim().length > 0;
    }
    return true; 
}

// Bug 6: Date Validation (Runtime Error)

function validateDate(dateString) {
    let date = new Date(dateString);
    return !isNaN(date.getTime());
}
