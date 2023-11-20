let userInformation = document.querySelector('#userInformation')
let backToPageMain = document.querySelector('#backToPageMain')
let goToPageAboutUs = document.querySelector('#goToPageAboutUs')

userInformation.addEventListener('click', switchPageToUserInformation)
backToPageMain.addEventListener('click', switchPageToMain)
goToPageAboutUs.addEventListener('click', switchPageToAboutUs)

function switchPageToUserInformation() {
    window.location.href = "../user-information-page/information page.html"
}

function switchPageToMain() {
    window.location.href = "../index.html"
}

function switchPageToAboutUs() {
    window.location.href = "../about us-page/about-us.html"
}