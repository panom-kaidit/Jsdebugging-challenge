
let data = {
    tonnage: 50000,
    dealer: { name: "AJ" },
    cost: 3000,
    type: ""
};


// // Procurement Form Validation (BUGGY VERSION)
// function validateProcurement(formData) {
//     // Bug 1: Syntax error
//     let errors = []
//     // Bug 2: Logical error
//     if (formData.tonnage < 1000) {
//     errors.push("Tonnage must not be less than 1000kg");
//     }
//     // Bug 3: Runtime error
//     if (formData.dealer.name.length < 2) {
//     errors.push("Dealer name too short");
//     }
//     // Bug 4: Logical error
//     if (formData.cost.length > 5) {
//     errors.push("Cost must be at least 5 digits");
//     }
//     // Bug 5: Syntax error
//     if (formData.type = "") {
//     errors.push("Type cannot be empty")
//     }
//     return errors;
//     }


// Procurement Form Validation fixed
function validateProcurement(formData) {
    // Bug1: the issue was with semicolon which can lead to syntax error
    let errors = [];

    // safty check
    if (!formData.tonnage || formData.tonnage < 1000) {
        errors.push("Tonnage must not be less than 1000kg");
    }

    //Bug 3
    if (!formData.dealer || !formData.dealer.name || formData.dealer.name.length < 2){
        errors.push("Dealer name too short");
    }

    //Bug 4 cost is a number not a string hence no .length
    if (!formData.cost || formData.cost < 10000) {
        errors.push("Cost must be at least 5 digits");
    }

    //Bug 5 uses single equal sign instate of 3. causing a Syntax error
    if (formData.type === "") {
        errors.push("Type cannot be empty");
    }

    return errors;
}

console.log(validateProcurement(data));
