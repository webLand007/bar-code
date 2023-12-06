let goToPageSetting = document.querySelector('#goToPageSetting')
let mapIcon = document.querySelector('#mapIcon')
let iconHome = document.querySelector('#icon-home')
let iconHomeActive = document.querySelector('#icon-home-active')
let mobileQR = document.querySelector('#mobile-QR')
let mobileQRActive = document.querySelector('#mobile-QR-active')
let OptionsSectionMain = document.querySelector('#OptionsSectionMain')
let slider = document.querySelector('#slider')
let qrCode = document.querySelector('#qrCode')

document.addEventListener('DOMContentLoaded', nextSlide)
mapIcon.addEventListener('click', switchPageToMap)
goToPageSetting.addEventListener('click', switchPageToSetting)
iconHome.addEventListener('click', switchValueMainToQrCode)
mobileQR.addEventListener('click', switchValueMainToOptionAndSlider)

// by click in mapIcon btn switch Page To Map
function switchPageToMap() {
    window.location.href = 'SearchJs/index.html'
}

function switchPageToSetting() {
    window.location.href = "setting page/setting.html"
}

// by click in QR-Code btn switch Page To QR code
function switchValueMainToQrCode() {
    OptionsSectionMain.style.display = 'flex'
    slider.style.display = 'flex'
    mobileQR.style.display = 'flex'
    iconHomeActive.style.display = 'flex'
    iconHome.style.display = 'none'
    mobileQRActive.style.display = 'none'
    qrCode.style.display = 'none'
}

// by click in home btn switch Page To home
function switchValueMainToOptionAndSlider() {
    OptionsSectionMain.style.display = 'none'
    slider.style.display = 'none'
    mobileQR.style.display = 'none'
    iconHomeActive.style.display = 'none'
    iconHome.style.display = 'flex'
    mobileQRActive.style.display = 'flex'
    qrCode.style.display = 'flex'

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
}