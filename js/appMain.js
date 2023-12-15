let goToPageSetting = document.querySelector('#goToPageSetting')
let mapIcon = document.querySelector('#mapIcon')
let iconHome = document.querySelector('#icon-home')
let iconHomeActive = document.querySelector('#icon-home-active')
let mobileQR = document.querySelector('#mobile-QR')
let mobileQRActive = document.querySelector('#mobile-QR-active')
let OptionsSectionMain = document.querySelector('#OptionsSectionMain')
let slider = document.querySelector('#slider')
let qrCode = document.querySelector('#qrCode')
let loadingPage = document.querySelector('#loading-page')
let headerMain = document.querySelector('#headerMain')
let footerMain = document.querySelector('#footerMain')
let main = document.querySelector('#main')
let lineHome = document.querySelector('.line-home')
let lineQRCode = document.querySelector('.line-QR-code')
let logoTitT = document.querySelector('.logo-tit-T')



document.addEventListener('DOMContentLoaded', nextSlide)
document.addEventListener('DOMContentLoaded', loading)
mapIcon.addEventListener('click', switchPageToMap)
goToPageSetting.addEventListener('click', switchPageToSetting)
iconHome.addEventListener('click', switchValueMainToQrCode)
mobileQR.addEventListener('click', switchValueMainToOptionAndSlider)

// At the time of close from the loading-page in local storage, it should be equal to false
window.onbeforeunload = function () {
    localStorage.setItem('loading-page', 'false')
}

// show loading page
function loading() {
    let info = localStorage.getItem('loading-page')
    info = JSON.parse(info)

    if (info == null) {
        info = false
    }

    // ahow loading page
    showAndHideLoading(info)
    // hide loading page
    setTimeout(() => {
        showAndHideLoading(true)
    }, 2000);
}

// by click in mapIcon btn switch Page To Map
function switchPageToMap() {
    window.location.href = 'SearchJs/index.html'
}

function switchPageToSetting(e) {
    // window.history.pushState(state, title, url);
    window.location.href = "setting page/setting.html"
}

// by click in QR-Code btn switch Page To QR code
function switchValueMainToQrCode() {
    mobileQR.style.display = 'flex'
    iconHomeActive.style.display = 'flex'
    iconHome.style.display = 'none'
    mobileQRActive.style.display = 'none'
    main.style.display = 'inline-block'
    qrCode.style.display = 'none'
    lineHome.classList.add('line-home-A')
    lineQRCode.classList.remove('line-QR-code-A')
    console.log('QR');
}

// by click in home btn switch Page To home
function switchValueMainToOptionAndSlider() {
    mobileQR.style.display = 'none'
    iconHomeActive.style.display = 'none'
    iconHome.style.display = 'flex'
    mobileQRActive.style.display = 'flex'
    main.style.display = 'none'
    qrCode.style.display = 'flex'
    lineQRCode.classList.add('line-QR-code-A')
    lineHome.classList.remove('line-home-A')
    console.log('MAIN');
}

// show and hide for loading page
function showAndHideLoading(info) {
    switch (info) {
        case true:
            headerMain.style.display = 'inline-block'
            OptionsSectionMain.style.display = 'flex'
            slider.style.display = 'flex'
            footerMain.style.display = 'flex'
            loadingPage.style.display = 'none'
            break;
        case false:
            headerMain.style.display = 'none'
            OptionsSectionMain.style.display = 'none'
            slider.style.display = 'none'
            footerMain.style.display = 'none'
            loadingPage.style.display = 'flex'
            break;
    }
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// Select button (next slide)
let owlPrev = document.querySelector('.owl-prev span')


// Show the next slide
function nextSlide() {
    // A button (next slide) is clicked every 3 seconds
    setInterval(() => {
        owlPrev.click()
    }, 4000);

    // Run the header logo animation (T)
    // Run the header logo animation
    // Every 6 seconds
    setInterval(() => {
        logoTitT.classList.add('animate__swing')
        setTimeout(() => {
            logoTitT.classList.remove('animate__swing')
        }, 2000);
    }, 6000);
}