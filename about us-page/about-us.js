let backToInformationPage = document.querySelector('#backToInformationPage')

// At the time of entering the loading-page in the local storage, it should be equal to true
// window.addEventListener('DOMContentLoaded', () => {
//     localStorage.setItem('loading-page', 'true')
// })

backToInformationPage.addEventListener('click', switchPageToSetting)

// At the time of close from the loading-page in local storage, it should be equal to false
window.onbeforeunload = function () {
    localStorage.setItem('loading-page', 'false')
}

function switchPageToSetting() {
    window.location.href = "../setting page/setting.html"
    localStorage.setItem('loading-page', 'true')
}

window.addEventListener('beforeunload', function () {
    localStorage.setItem('loading-page', 'true')
})