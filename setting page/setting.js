let userInformation = document.querySelector('#userInformation')
let backToPageMain = document.querySelector('#backToPageMain')
let goToPageAboutUs = document.querySelector('#goToPageAboutUs')

userInformation.addEventListener('click', switchPageToUserInformation)
backToPageMain.addEventListener('click', switchPageToMain)
goToPageAboutUs.addEventListener('click', switchPageToAboutUs)

// At the time of entering the loading-page in the local storage, it should be equal to true
window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('loading-page', 'true')
})

function switchPageToUserInformation() {
    window.location.href = "../user-information-page/information page.html"
}

function switchPageToMain() {
    window.location.href = "../index.html"
}

function switchPageToAboutUs() {
    window.location.href = "../about us-page/about-us.html"
}