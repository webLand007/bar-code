// ---------------------Selects---------------------


// information form
let formInformation = document.querySelector('#form-information')
// input fullName
let fullName = document.querySelector('#fullName')
// input phonNumber
let phonNumber = document.querySelector('#phonNumber')
// btn signOut
let signOut = document.querySelector('#signOut')
//
let backToPageSetting = document.querySelector('#backToPageSetting')

let body = document.querySelector("body")



// ---------------------Events---------------------

// submit form
formInformation.addEventListener('submit', saveValueInformation)
// sign out in form
signOut.addEventListener('click', signOutInAccount)
// show information in form
document.addEventListener('DOMContentLoaded', loadInformationAccount)

// At the time of entering the loading - page in the local storage, it should be equal to true
backToPageSetting.addEventListener('click', switchPageToSetting)
window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('loading-page', 'true')
})
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
    if (checkValidation(getValueValidation()) == 2) {
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
        phonNumber: phonNumber.value
    }
}

// If the number of carters entered in the form is correct, it will be returned (true).
function checkValidation(UserInformation) {
    let info
    let info1
    let info2

    if (UserInformation.fullName.length <= 7) {
        // Show error for input fullName
        errorMSG(fullName)
        info1 = false
    } else {
        info1 = true
    }

    if (UserInformation.phonNumber.length != 11 || UserInformation.phonNumber.length == 0) {
        // Show error for input phonNumber
        errorMSG(phonNumber)
        info2 = false
    } else {
        info2 = true
    }
    info = info1 + info2
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
    // when usersave his information active this modal 
    const saveModal = Swal.fire({
        position: "top-end",
        icon: "success",
        title: "اطلاعات شما با موفقیعت ثبت شد",
        showConfirmButton: false,
        timer: 1500
    })

    // localStorage part
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

/**
 * show modal
 * then make addEventListener for remove or not remove account
 * @param {*} e 
 */
function signOutInAccount(e) {
    // if inputs be empty then show this modal
    if (!phonNumber.value && !fullName.value) {
        Swal.fire({
            text: "شما حساب فعال ندارید",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
    } else {
        // when user want to sign out from application active this modal
        const delteModal = Swal.fire({
            title: "ایا می خواهید خارج شوید؟",
            showCancelButton: true,
            confirmButtonColor: "rgba(49, 201, 82, 0.07)",
            cancelButtonColor: "rgba(241, 61, 61, 0.05)",
            confirmButtonText: "خیر",
            cancelButtonText: "بله",

        }).then((result) => {
            if (result.dismiss == "cancel") {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "با موفقیعت خارج شدید",
                    showConfirmButton: false,
                    timer: 1500
                })
                removeInformation();
            }
        });

    }

}
// When logging out of the user account
// 1 = Delete data from dom
// 2 = Delete data from local storage
function removeInformation() {
    // style
    let UserInformation = {
        fullName: null,
        phonNumber: null
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
            break;
        case false:
            fullName.value = null
            phonNumber.value = null
            break;
    }
}

function cancelDelet() {
    document.querySelector(".shadow-div").style.display = "none"

}

function switchPageToSetting() {
    window.location.href = "../setting page/setting.html"
}

function signOutModal(massage) {
    return `<div class="shadow-div">
    <div class="signOut">
        <div class="msg">
            <p>${massage}</p>
        </div>
        <div class="target-choose">
            <div><button class="yes">بله</button></div>
            <div><button class="no">خیر</button></div>
        </div>
    </div>
</div>`
}