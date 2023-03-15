
var c = Math.floor(100000 + Math.random()*900000)
document.getElementById("captchaimage").setAttribute("src", "./img/" + c + ".png")
document.getElementById("captchaimage").setAttribute("alt", "Captcha: " + c + ".png")

function validate() {
    let fname = document.getElementById("fname")
    let lname = document.getElementById("lname")
    let pass = document.getElementById("pass")
    let cpass = document.getElementById("cpass")
    let cpt = document.getElementById("captcha")
    let email = document.getElementById("emailid")

    if (fname.value.match("[A-Z][a-zA-Z]+") == null || fname.value.match("[A-Z][a-zA-Z]+")[0] !== fname.value || fname.value.length < 4 || fname.value.length > 25 ) {
        alert("First Name needs to be between 4 to 25 characters and must begin with a capital letter and may only contain alphabets")
        return
    }

    if (lname.value.match("[A-Z][a-zA-Z]+") == null || lname.value.match("[A-Z][a-zA-Z]+")[0] !== lname.value || lname.value.length < 4 || lname.value.length > 25 ) {
        alert("Last Name needs to be between 4 to 25 characters and must begin with a capital letter and may only contain alphabets")
        return
    }

    if (pass.value.match("[a-z]") == null ||
    pass.value.match("[A-Z]") == null ||
    pass.value.match("[0-9]") == null ||
    pass.value.match("[@#$%^&*]") == null ||
    pass.value.length < 8 ) {
        alert("Password must contain at least one lower case, one upper case, one digit, one special character and must have more than 8 characters")
        return
    }

    if (email.validity["typeMismatch"]) {
        alert("Please enter a valid email ID")
        return
    }

    if(cpass.value !== pass.value) {
        alert("Passwords do not match!")
        return
    }

    if(cpt.value != c) {
        alert("Invalid Captcha")
        return
    }

    document.getElementById("form").submit()
}
