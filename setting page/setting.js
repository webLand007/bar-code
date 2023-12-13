let userInformation = document.querySelector('#userInformation')
let backToPageMain = document.querySelector('#backToPageMain')
let goToPageAboutUs = document.querySelector('#goToPageAboutUs')

userInformation.addEventListener('click', switchPageToUserInformation)
backToPageMain.addEventListener('click', switchPageToMain)
goToPageAboutUs.addEventListener('click', switchPageToAboutUs)

// At the time of close from the loading-page in local storage, it should be equal to false
window.onbeforeunload = function () {
    localStorage.setItem('loading-page', 'false')
}
window.addEventListener('beforeunload', function () {
    localStorage.setItem('loading-page', 'true')
})


// At the time of entering the loading-page in the local storage, it should be equal to true
// window.addEventListener('DOMContentLoaded', () => {
// localStorage.setItem('loading-page', 'true')
// })

function switchPageToUserInformation() {
    window.location.href = "../user-information-page/information page.html"
    localStorage.setItem('loading-page', 'true')
}

function switchPageToMain() {
    window.location.href = "../index.html"
    localStorage.setItem('loading-page', 'true')
}

function switchPageToAboutUs() {
    window.location.href = "../about us-page/about-us.html"
    localStorage.setItem('loading-page', 'true')
}