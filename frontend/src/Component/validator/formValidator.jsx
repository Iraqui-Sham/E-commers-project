import passwordValidator from "password-validator"

// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(1)                              // Must have 1 uppercase letters
    .has().lowercase(1)                              // Must have 1 lowercase letters
    .has().digits(1)                                // Must have 1 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

export default function formValidator(e) {
    let { name, value } = e.target
    switch (name) {
        case 'name':
        case 'username':
        case 'color':
            if (!value && value.length === 0)
                return name + " Field is Mandatory"
            else if (value.length < 3 || value.length > 50)
                return name + " Field length Must be 3-50 Character"
            else
                return ""

        case 'email':
            if (!value && value.length === 0)
                return name + " Field is Mandatory"
            else if (value.length < 13 || value.length > 100)
                return name + " Field length Must be within 13-100 Character"
            else
                return ""

        case 'subject':
            if (!value && value.length === 0)
                return name + " Field is Mandatory"
            else if (value.length < 10 || value.length > 200)
                return name + " Field length Must be within 10-200 Character"
            else
                return ""

        case 'password':
            if (!value && value.length === 0)
                return name + " Field is Mandatory"
            else if (!schema.validate(value))
                return name + " Invalid Password! its Length Must be within 8-100 Characters, Must Contains atleast 1 Upper case Character,1 Lower case Character and 1 Digit and it Should not Contains any Spaces"
            else
                return ""

        case 'phone':
            if (!value && value.length === 0)
                return name + " Field is Mandatory"
            else if (value.length !== 10)
                return name + " Field length Must be 10"
            else if (!(value.startsWith("6") || value.startsWith("7") || value.startsWith("8") || value.startsWith("9")))
                return name + " Invalid Phone Number"
            else
                return ""

        case 'size':
            if (!value && value.length === 0)
                return name + " Field is Mandatory"
            else if (value.length > 50)
                return name + " Field length Must be less than 50 Character"
            else
                return ""

        case 'basePrice':
            if (!value && value.length === 0)
                return name + " Field is Mandatory"
            else if (parseInt(value) < 1)
                return "Base Price Field value Must be grater than 0"
            else
                return ""

        case 'discount':
            if (!value && value.length === 0)
                return name + " Field is Mandatory"
            else if (parseInt(value) < 0 || parseInt(value) > 100)
                return "Discount Field Must be 0-100"
            else
                return ""

        case 'stockQuantity':
            if (!value && value.length === 0)
                return name + " Field is Mendatory"
            else if (parseInt(value) < 0)
                return "Price Must be Positive Value"
            else
                return ""

        case 'message':
            if (!value && value.length === 0)
                return name + " Field is Mandatory"
            else if (value.length < 50 || value.length > 2000)
                return name + " Field Length Must be 50-2000 Character"
            else
                return ""
        default:
            return ""
    }
}