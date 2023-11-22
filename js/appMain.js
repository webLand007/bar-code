let goToPageSetting = document.querySelector('#goToPageSetting')
let mapIcon = document.querySelector('#mapIcon')


document.addEventListener('DOMContentLoaded', nextSlide)
mapIcon.addEventListener('click', switchPageToMap)
goToPageSetting.addEventListener('click', switchPageToSetting)

// by click in mapIcon btn switch Page To Map
function switchPageToMap() {
    window.location.href = '../SearchJs/index.html'
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

function switchPageToSetting() {
    window.location.href = "setting page/setting.html"
}