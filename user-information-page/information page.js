// ---------------------Selects---------------------


// information form
let formInformation = document.querySelector('#form-information')
// input fullName
let fullName = document.querySelector('#fullName')
// input phonNumber
let phonNumber = document.querySelector('#phonNumber')
// input nationalCode
let nationalCode = document.querySelector('#nationalCode')
// input trafficCode
let trafficCode = document.querySelector('#trafficCode')
// btn signOut
let signOut = document.querySelector('#signOut')
// 
let backToPageSetting = document.querySelector('#backToPageSetting')




// ---------------------Events---------------------

// submit form
formInformation.addEventListener('submit', saveValueInformation)
// sign out in form
signOut.addEventListener('click', signOutInAccount)
// show information in form 
document.addEventListener('DOMContentLoaded', loadInformationAccount)
// 
backToPageSetting.addEventListener('click', switchPageToSetting)

// Functions


// show information in form 
function loadInformationAccount() {
    // get key (information) in local storage
    let loadLS = JSON.parse(localStorage.getItem('information'))

    // If there is no template for entering user information in the
    // local storage key with the name (information), create a template
    if (loadLS == null) {
        // create new key in local storage with name (information)
        loadOfLS()
        // Creating a template in local storage to enter user information
        signOutInAccount()
    } else {
        // Calling the function to display user information
        showAndHideInformationPerson(true)
    }
}

// Checking and calling the user information storage function
function saveValueInformation(event) {
    // Do not refresh the page during submission
    event.preventDefault()

    // Check the correctness of the entered information
    // Parameter (input information)
    if (checkValidation(getValueValidation()) == true) {
        // If the information is correct (save the information)
        // Parameter (input information)
        saveInformationInLS(getValueValidation())
    }
}

// Get the information entered by the user, in the form
function getValueValidation() {
    // Return to receive the information entered by the user, in the form
    return {
        fullName: fullName.value,
        phonNumber: phonNumber.value,
        nationalCode: nationalCode.value,
        trafficCode: trafficCode.value
    }
}

// If the number of carters entered in the form is correct, it will be returned (true).
function checkValidation(UserInformation) {
    let info = false

    if (UserInformation.fullName.length < 7) {
        // Show error for input fullName
        errorMSG(fullName)
        info = false
    } else {
        info = true
    }

    if (UserInformation.phonNumber.length != 11 || UserInformation.phonNumber.length == 0) {
        // Show error for input phonNumber
        errorMSG(phonNumber)
        info = false
    } else {
        info = true
    }

    if (UserInformation.nationalCode.length != 10 || UserInformation.nationalCode.length == 0) {
        // Show error for input nationalCode
        errorMSG(nationalCode)
        info = false
    } else {
        info = true
    }

    if (UserInformation.trafficCode.length < 8) {
        // Show error for input trafficCode
        errorMSG(trafficCode)
        info = false
    } else {
        info = true
    }

    return info
}

// Show error for input
// Get the location of the error display
function errorMSG(location) {
    location.style.border = '0.2vh solid red'
    location.style.transitionDuration = '0.05s'

    // Hide error after 4 seconds
    setTimeout(() => {
        location.style.border = 'none'
    }, 4000);
}

// Save user information in browser memory
function saveInformationInLS(UserInformation) {
    let getInformationInLS = loadOfLS()

    getInformationInLS = JSON.stringify(UserInformation)
    localStorage.setItem('information', getInformationInLS)
}

// 1 = Load local storage ('information')
// 2 = If there is no ('information') in the local storage, create a key named ('information')
// 3 = return ('information') received from local storage
function loadOfLS() {
    let LSNotes = JSON.parse(localStorage.getItem('information'))

    if (LSNotes == null) {
        localStorage.setItem('information', '[]')
        LSNotes = JSON.parse(localStorage.getItem('information'))
    }

    return LSNotes
}

// When logging out of the user account
// 1 = Delete data from dom
// 2 = Delete data from local storage
function signOutInAccount() {
    let UserInformation = {
        fullName: ' ',
        phonNumber: ' ',
        nationalCode: ' ',
        trafficCode: ' '
    }

    // remove information from the local storage
    UserInformation = JSON.stringify(UserInformation)
    localStorage.setItem('information', UserInformation)

    // remove information from the DOM
    showAndHideInformationPerson(false)
}

// true = show Information from local storage
// false = remove Information in input
function showAndHideInformationPerson(info) {
    let lsInfo = loadOfLS()

    switch (info) {
        case true:
            fullName.value = lsInfo.fullName
            phonNumber.value = lsInfo.phonNumber
            nationalCode.value = lsInfo.nationalCode
            trafficCode.value = lsInfo.trafficCode
            break;
        case false:
            fullName.value = ''
            phonNumber.value = ''
            nationalCode.value = ''
            trafficCode.value = ''
            break;
    }
}

function switchPageToSetting() {
    window.location.href = "../setting page/setting.html"
}