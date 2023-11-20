let goToPageSetting = document.querySelector('#goToPageSetting')

goToPageSetting.addEventListener('click', switchPageToSetting)

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

document.addEventListener('DOMContentLoaded', nextSlide)

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