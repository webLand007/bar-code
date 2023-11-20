let backToInformationPage = document.querySelector('#backToInformationPage')

backToInformationPage.addEventListener('click', switchPageToSetting)

function switchPageToSetting() {
    window.location.href = "../setting page/setting.html"
}