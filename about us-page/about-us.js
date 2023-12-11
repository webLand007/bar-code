let backToInformationPage = document.querySelector('#backToInformationPage')

// At the time of entering the loading-page in the local storage, it should be equal to true
window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('loading-page', 'true')
})

backToInformationPage.addEventListener('click', switchPageToSetting)

function switchPageToSetting() {
    window.location.href = "../setting page/setting.html"
}