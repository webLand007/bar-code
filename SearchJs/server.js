// variables...

// input search in map
var term = document.querySelector("#term")
// icon user in header
let goToHome = document.querySelector('#goToHome')
// icon home in header
let goToInformationPage = document.querySelector('#goToInformationPage')

// events...

// switch page map to home page
goToHome.addEventListener('click', switchPageToHome)
// switch page map to user-information page
goToInformationPage.addEventListener('click', switchPageToInformationPage)
// click by input search in map
term.onclick = ShowTheListOfOffers

// show list offers by click input search 
function ShowTheListOfOffers() {
    /**
     * if value of search box be 0 so resulte div will be none but if value of search box is note 0 then search function will be called.
     * Search function call to display the marks on the map and zoom out.
     */
    term.value == 0 ? document.querySelector('#resualt').style.display = 'none' : search()

}

// switch page map to home page
function switchPageToHome() {
    window.location.href = '../index.html'
}

// switch page map to user-information page
function switchPageToInformationPage() {
    window.location.href = '../user-information-page/information page.html'
}

// functions...

//init the map
let myMap = new L.Map('map', {
    key: 'web.a1d0cdd60e584c12841a7c226540a7f7',
    maptype: 'dreamy',
    poi: true,
    traffic: true,
    center: [29.606446174640958, 52.53792787943611],
    zoom: 14,
});



// location of Shiraz cargo terminal => show it with marker
const LeafIcon = L.Icon.extend({
    options: {
        iconSize: [20, 30],
        shadowSize: [50, 64],
        iconAnchor: [12, 64],
        shadowAnchor: [4, 62],
        popupAnchor: [0, -50]
    }
});
// choose icons
let tIcon = new LeafIcon({
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
    radius: 25
    // shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
})
// tIcons...
let customMarkers = []
// location of icon + Popup
customMarkers.push(L.circle([29.601881, 52.525726], {
    icon: tIcon
}) /*.bindPopup("ضلع شرقی- حدفاصل کوچه 1تا 3 کالای برق صنعتی تسلا الکتریکی")*/ )
// location of icon + Popup
customMarkers.push(L.circle([29.602326, 52.526147], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی- حدفاصل کوچه 5تا 7 مقابل فروشگاه لوله و اتصالات رییسی");
// location of icon + Popup
customMarkers.push(L.circle([29.602626, 52.526403], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی- حدفاصل کوچه 7تا 9 مقابل ابزار الات ترکمن");
// location of icon + Popup
customMarkers.push(L.circle([29.603307, 52.527038], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی- حدفاصل کوچه 11تا 13 مقابل فروشگاه قفسه")
// location of icon + Popup
customMarkers.push(L.circle([29.603307, 52.528251], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی- حدفاصل کوچه 19 تا خیابان شهید طبری - مقابل رنگ سرای ماهور")
// location of icon + Popup
customMarkers.push(L.circle([29.606106, 52.529547], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی- حدفاصل خیابان شهید ظبری تا 25 مقبال لوله و اتصالات پیمان جنب ظروف یکبار مصرف ارتاپلاس(از لوله و اتصالات پیمان تا بازرگانی فرش موکن توافق)")
// location of icon + Popup
customMarkers.push(L.circle([29.606562, 52.529971], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی- حد فاصل کوچه 27تا 29 مثابل ابزار و یراق سعدی")
// location of icon + Popup
customMarkers.push(L.circle([29.607243, 52.530596], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی- حدفاصل کوچه 31تا 33 مقابل فروشگاه لوازم خانگی پارس")
// location of icon + Popup
customMarkers.push(L.circle([29.608193, 52.531449], {
    icon: tIcon
})) //.bindPopup("ضلع غربی- حدفاصل کوچه 32تا 30 مقابل ابزار قدس")
// location of icon + Popup
customMarkers.push(L.circle([29.607594, 52.530835], {
    icon: tIcon
})) //.bindPopup("ضلع غربی- حدفاصل کوچه 30تا 28 مقابل لوله و اتصالات خاتم الانبیاء")
// location of icon + Popup
customMarkers.push(L.circle([29.607344, 52.530587], {
    icon: tIcon
})) //.bindPopup("ضلع غربی- حدفاصل کوچه 26تا 28 مقابل صنعت برق حسینی")
// location of icon + Popup
customMarkers.push(L.circle([29.606811, 52.530108], {
    icon: tIcon
})) //.bindPopup("ضلع غربی- مقابل کوچه 24تا 26 مقابل لوله و اتصالات احسان")
// location of icon + Popup
customMarkers.push(L.circle([29.606609, 52.529915], {
    icon: tIcon
})) //.bindPopup("ضلع غربی- حدفاصل کوچه 22تا 20 مقابل فروشگاه ایران لوازم آشپزخانه")
// location of icon + Popup
customMarkers.push(L.circle([29.605729, 52.529135], {
    icon: tIcon
})) //.bindPopup("ضلع غربی- حدفاصل کوچه 18تا 16 مقابل شیرالات هود, سینک توکلی")
// location of icon + Popup
customMarkers.push(L.circle([29.604707, 52.528207], {
    icon: tIcon
})) //.bindPopup("ضلع غربی- حدفاصل کوچه 14تا 12 مقابل ابزار الات زراعتی")
// location of icon + Popup
customMarkers.push(L.circle([29.602971, 52.526640], {
    icon: tIcon
})) //.bindPopup("ضلع غربی- حدفاصل کوچه 10تا 8 مقابل لوله ساختمانی و بهداشتی قدوسی تا نرده استیل")
// location of icon + Popup
customMarkers.push(L.circle([29.621784, 52.525436], {
    icon: tIcon
})) //.bindPopup("خیابان صورتگرد- ضلع غربی- مقابل پاساژ ولیعصر")
// location of icon + Popup
customMarkers.push(L.circle([29.622326, 52.525855], {
    icon: tIcon
})) //.bindPopup("خیابان صورتگرد- ضلع غربی- حدفاصل کوچه 12تا 14- مقابل تجهیزات پزشکی بابک")
// location of icon + Popup
customMarkers.push(L.circle([29.62341, 52.52699], {
    icon: tIcon
})) //.bindPopup("خیابان صورتگرد- ضلع شرقی- مقابل تجهیزات صنعتی پاسارگاد")
// location of icon + Popup
customMarkers.push(L.circle([29.62514, 52.52812], {
    icon: tIcon
})) //.bindPopup("خیابان صورتگرد- ضلع شرقی- مقابل لوازم پزشکی خردمند- حدفاصل اردیبهشت تا کوچه3")
// location of icon + Popup
customMarkers.push(L.circle([29.62357, 52.52696], {
    icon: tIcon
})) //.bindPopup("خیابان صورتگرد- ضلع غربی- مقابل تجهیزات پزشکی مسعود")
// location of icon + Popup
customMarkers.push(L.circle([29.62554, 52.52835], {
    icon: tIcon
})) //.bindPopup("خیابان صورتگرد- ضلع شرقی- حدفاصل کوچه 3تا 1 -مقابل کفش تبریز")
// location of icon + Popup
customMarkers.push(L.circle([29.60789, 52.54153], {
    icon: tIcon
})) //.bindPopup("خیابان حضرتی- مقابل مجتمع تجاری میلاد نور ضلع غربی")
// location of icon + Popup
customMarkers.push(L.circle([29.60680, 52.54081], {
    icon: tIcon
})) //.bindPopup("خیابان حضرتی- روبرو مرکز تجاری سینا روبرو بانک صادرات بعد از پارکینگ حضرتی ضلع غربی")
// location of icon + Popup
customMarkers.push(L.circle([29.60606, 52.54034], {
    icon: tIcon
})) //.bindPopup("خیابان حضرتی- مقابل مجتمع تجاری آریانا روبرو مجتمع هدیش و مجتمع تجاری پارسیان")
// location of icon + Popup
customMarkers.push(L.circle([29.60723, 52.54108], {
    icon: tIcon
})) //.bindPopup("خیابان حضرتی- مقابل مجتمع جاری شهر")
// location of icon + Popup
customMarkers.push(L.circle([29.61323, 52.52813], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- وصال شمالی بعد از کوچه2- مقابل فروشگاه هوم دیزاین")
// location of icon + Popup
customMarkers.push(L.circle([29.614097, 52.52860], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- ضلع شرقی- مقابل مبلمان میرداماد حدفاصل کوچه1تا 3")
// location of icon + Popup
customMarkers.push(L.circle([29.61496, 52.52910], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- ضلع شرقی- بعد از کوچه 3 به سمت منوچهری مقابل گالری آوا")
// location of icon + Popup
customMarkers.push(L.circle([29.61496, 52.52911], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- ضلع شرقی- بعد از کوچه3 به سمت منوچهری مقابل نمایشگاه مبل کورش")
// location of icon + Popup
customMarkers.push(L.circle([29.615425, 52.52960], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- ضلع شرقی- حدفاصل کوچه 3تا 5مقابل تشک رویال")
// location of icon + Popup
customMarkers.push(L.circle([29.615768, 52.529991], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- ضلع شرقی- حدفاصل کوچه 5تا 7")
// location of icon + Popup
customMarkers.push(L.circle([29.616085, 52.53019], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- ضلع شرقی- حدفاصل کوچه 7تا9 مقابل فروشگاه آیسان")
// location of icon + Popup
customMarkers.push(L.circle([29.616500, 52.530600], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- ضلع شرقی- حدفاصل کوچه 9تا11 مقابل گالری ترنج نرسیده به حائری")
// location of icon + Popup
customMarkers.push(L.circle([29.617395, 52.531244], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- ضلع شرقی- حدفاصل کوچه 11تا 13 مقابل گالری مبله")
// location of icon + Popup
customMarkers.push(L.circle([29.617837, 52.531594], {
    icon: tIcon
})) //.bindPopup("خیابان وصال شمالی- ضلع شرقی- حدفاصل کوچه 13تا 15مقابل کاور مبل عدلو")
// location of icon + Popup
customMarkers.push(L.circle([29.613352, 52.555362], {
    icon: tIcon
})) //.bindPopup("مقابل گروە صنعتی ابزار سازان حدفاصل کوچه ٢ تا ۴")
// location of icon + Popup
customMarkers.push(L.circle([29.615713, 52.554132], {
    icon: tIcon
})) //.bindPopup("مقابل لوازم کشاورزی آبفشان بعد از اداره برق منطقه یک")
// location of icon + Popup
customMarkers.push(L.circle([29.616937, 52.553541], {
    icon: tIcon
})) //.bindPopup("حدفاصل فروشگاه سیهر ابزار تا ابزار جهان")
// location of icon + Popup
customMarkers.push(L.circle([29.616957, 52.553565], {
    icon: tIcon
})) //.bindPopup("مقابل ابزار مهدی حدفاصل کوچه ١٧ تا ١٩")
// location of icon + Popup
customMarkers.push(L.circle([29.619247, 52.551357], {
    icon: tIcon
})) //.bindPopup("مقابل دنیای موتور سیکلت حدفاصل خیابان مولی الموحدین تا چهاررراه دروازه اصفهان")
// location of icon + Popup
customMarkers.push(L.circle([29.621497, 52.522629], {
    icon: tIcon
})) //.bindPopup("بعد از کوچه ٢٢ - مقابل پاساژ رستگار")
// location of icon + Popup
customMarkers.push(L.circle([29.620798, 52.522089], {
    icon: tIcon
})) //.bindPopup("حدفاصل کوچه ٢٠ و ١٨ - مقابل تشک لیلیان")
// location of icon + Popup
customMarkers.push(L.circle([29.620638, 52.522007], {
    icon: tIcon
})) //.bindPopup("حدفاصل كوچه ١٧ و ١٩ - ضلع شرقی - مقابل موسسه چاپ شقایق")
// location of icon + Popup
customMarkers.push(L.circle([29.618682, 52.520405], {
    icon: tIcon
})) //.bindPopup("حدفاصل کوچه ١٢ و ١٠ - روبروی فروشگاه جامبو ضلع غربی")
// location of icon + Popup
customMarkers.push(L.circle([29.617315, 52.519356], {
    icon: tIcon
})) //.bindPopup("کوچه ٩ ضلع شرقی مقابل میوە فروشی")
// location of icon + Popup
customMarkers.push(L.circle([29.618690, 52.551149], {
    icon: tIcon
})) //.bindPopup("مقابل کالای خانگی جهانگیر، نبش کوچه ٣۴")
// location of icon + Popup
customMarkers.push(L.circle([29.618136, 52.551512], {
    icon: tIcon
})) //.bindPopup("مقابل خشکبار شفیعی خان ( فروشگاہ اسباب بازی نورانی) حدفاصل کوچه ٣٠ تا ٣٢")
// location of icon + Popup
customMarkers.push(L.circle([29.617544, 52.551971], {
    icon: tIcon
})) //.bindPopup("مقابل زورخانه بنی فاطمه - ظروف یکبار مصرف کاظمی حدفاصل کوچه ٢۶ تا ٣٠")
// location of icon + Popup
customMarkers.push(L.circle([29.617041, 52.552330], {
    icon: tIcon
})) //.bindPopup("مقابل خشكبار بانشی حدفاصل کوچه ٢۴ تا ٢۶")
// location of icon + Popup
customMarkers.push(L.circle([29.616119, 52.552784], {
    icon: tIcon
})) //.bindPopup("مقابل مواد غنایی لوتوس حدفاصل کوچه ٢٠ تا ٢٢")
// location of icon + Popup
customMarkers.push(L.circle([29.614033, 52.553270], {
    icon: tIcon
})) //.bindPopup("روبروی فروشگاہ جعفریان (بیرون بر آراس) حدفاصل کوچه ١٠ تا ١٢")
// location of icon + Popup
customMarkers.push(L.circle([29.605063, 52.537241], {
    icon: tIcon
})) //.bindPopup("ضلع شمالی مقابل ماهی و میگو مروارید قبل از پارکینگ سیبویه")
// location of icon + Popup
customMarkers.push(L.circle([29.605518, 52.536680], {
    icon: tIcon
})) //.bindPopup("ضلع شمالی قبل از سرای برنج و حبوبات شاليزار مقابل فروشگاه حقیقی (فروشگاه كوشت)")
// location of icon + Popup
customMarkers.push(L.circle([29.606501, 52.535587], {
    icon: tIcon
})) //.bindPopup("مقابل پیتزا همبر گر ویژه")
// location of icon + Popup
customMarkers.push(L.circle([29.607248, 52.534831], {
    icon: tIcon
})) //.bindPopup("ضلع شمالی روبروی مجموعه ورزشی دستغیب - فروشگاه سوپری دنا")
// location of icon + Popup
customMarkers.push(L.circle([29.607904, 52.534254], {
    icon: tIcon
})) //.bindPopup("قبل از ماهی و میگو جنوب مقابل نایلکس فارس")
// location of icon + Popup
customMarkers.push(L.circle([29.608880, 52.532975], {
    icon: tIcon
})) //.bindPopup("حدفاصل ماهی و میگو صیادان تا فرآروده های گوشتی جمشیدی نرسیده به قانى كهنه (ضلع شمالی)")
// location of icon + Popup
customMarkers.push(L.circle([29.608584, 52.532944], {
    icon: tIcon
})) //.bindPopup("ضلع جنوبی مقابل فروشگاه مر کزی مرغ و گوشت بالپا جنب پل هوایی")
// location of icon + Popup
customMarkers.push(L.circle([29.621548, 52.545290], {
    icon: tIcon
})) //.bindPopup("فردوسى شرقى- مقابل تسمه چالاک قسمت كندرو")
// location of icon + Popup
customMarkers.push(L.circle([29.622679, 52.543248], {
    icon: tIcon
})) //.bindPopup("فردوسی غربی- مقابل درب هتل تالار")
// location of icon + Popup
customMarkers.push(L.circle([29.609829, 52.531497], {
    icon: tIcon
})) //.bindPopup("ضلع شمالی مقابل فروشگاه دروازه نرسیده به هفته به هفته")
// location of icon + Popup
customMarkers.push(L.circle([29.610596, 52.530402], {
    icon: tIcon
})) //.bindPopup("ضلع شمالی مقابل فروشگاه جعفرزاده روپروی پار کینگ طبقاتی فخرآباد")
// location of icon + Popup
L.circle([29.611063, 52.529745], {
    icon: tIcon
}) //.bindPopup("ضلع شمالی مقابل فروشگاہ قنادی قلع روبروی مجتمع تجاری مشیر (روپروی پارک)")
// location of icon + Popup
customMarkers.push(L.circle([29.611402, 52.529257], {
    icon: tIcon
})) //.bindPopup("ضلع شمالی روبروی مجتمع مشیر مقابل بازر گانی ابزار ارگ")
// location of icon + Popup
customMarkers.push(L.circle([29.615618, 52.537284], {
    icon: tIcon
})) //.bindPopup("مقابل پاساژ مهتاب شب حدفاصل کوچه ١٨ تا ١۶")
// location of icon + Popup
customMarkers.push(L.circle([29.615344, 52.537205], {
    icon: tIcon
})) //.bindPopup("حدفاصل کوچه ١۶ تا ١٨ مقابل مجتمع تجاری مشيریه")
// location of icon + Popup
customMarkers.push(L.circle([29.614439, 52.536659], {
    icon: tIcon
})) //.bindPopup("مقابل فروشگاه پارس ملل حدفاصل کوچه ١۶ تا ١۴")
// location of icon + Popup
customMarkers.push(L.circle([29.614012, 52.536290], {
    icon: tIcon
})) //.bindPopup("حدفاصل کوچه ١۴ تا خیابان حاتری شیرازی مقابل مر کز خدمات صوتی، تصویری، کامپیوتری هلند")
// location of icon + Popup
customMarkers.push(L.circle([29.612847, 52.535342], {
    icon: tIcon
})) //.bindPopup("حدفاصل كوچه ١٢ تا ١٠ مقابل ابزار سپه")
// location of icon + Popup
customMarkers.push(L.circle([29.611588, 52.534267], {
    icon: tIcon
})) //.bindPopup("حدفاصل خیابان منوچهری تا کوچه ٨ مقابل ابزار یزاف")
// location of icon + Popup
customMarkers.push(L.circle([29.620967, 52.546135], {
    icon: tIcon
})) //.bindPopup("مقابل گاو صندوق نسوز کاوه نرسیده به پارکینگ عمومی ضلع غربی دست راست ساختمان هجرت ٢")
// location of icon + Popup
customMarkers.push(L.circle([29.614012, 52.541316], {
    icon: tIcon
})) //.bindPopup("مقابل پاساژ کویتی ها حدفاصل کوچه ۵٣ تا ۵۵")
// location of icon + Popup
customMarkers.push(L.circle([29.612763, 52.543441], {
    icon: tIcon
})) //.bindPopup("نبش کوچه ۵١ مقابل پاساژ ایران زر")
// location of icon + Popup
customMarkers.push(L.circle([29.612711, 52.543548], {
    icon: tIcon
})) //.bindPopup("مقابل فروشگاه سعیدیان حدفاصل کوچه ۴٩ تا ۵١")
// location of icon + Popup
customMarkers.push(L.circle([29.611785, 52.545037], {
    icon: tIcon
})) //.bindPopup("سه راه احمدی به طرف مصدق مقابل فروشگاه لوازم خانگی سید هاشمی")
// location of icon + Popup
customMarkers.push(L.circle([29.611589, 52.545405], {
    icon: tIcon
})) //.bindPopup("مقابل گالری فرش قاسمی حدفاصل کوچه ۴٩ تا ۴٧")
// location of icon + Popup
customMarkers.push(L.circle([29.611390, 52.545763], {
    icon: tIcon
})) //.bindPopup("مقابل بازار حاجی حدفاصل کوچه ۴٧ تا ۴۵")
// location of icon + Popup
customMarkers.push(L.circle([29.608813, 52.550103], {
    icon: tIcon
})) //.bindPopup("مقابل فروشگاه جامبو حدفاصل کوچه ٣١تا ٣٣")
// location of icon + Popup
customMarkers.push(L.circle([29.626891, 52.526501], {
    icon: tIcon
})) //.bindPopup("ابتدای خیابان هفت تیر از سمت بلوار زند-مقابل شب چره")
// location of icon + Popup
customMarkers.push(L.circle([29.626238, 52.525976], {
    icon: tIcon
})) //.bindPopup("از سمت بلوار زند قبل از تقاطع ارديبهشت مقابل کبابی مرشد")
// location of icon + Popup
customMarkers.push(L.circle([29.624881, 52.525081], {
    icon: tIcon
})) //.bindPopup("بعد از تقاطع معدل به سمت هدایت سمت راست مقابل فروشگاه ساحل چوب")
// location of icon + Popup
customMarkers.push(L.circle([29.623571, 52.524063], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی - حدفاصل فروشگاه پاناسونیک تا داروخانه - حدفاصل تقاطع هدایت تا سینما سعدی")
// location of icon + Popup
customMarkers.push(L.circle([29.626067, 52.521867], {
    icon: tIcon
})) //.bindPopup("مقابل قنادى رضا - ضلع شرقى - حدفاصل هدایت تا فلسطین")
// location of icon + Popup
customMarkers.push(L.circle([29.626545, 52.522190], {
    icon: tIcon
})) //.bindPopup("روبروی کوچه ١ - مقابل فروشگاہ آب پارس")
// location of icon + Popup
customMarkers.push(L.circle([29.678309, 52.455356], {
    icon: tIcon
})) //.bindPopup("ضلع شرقى : از سمت ميدان احسان جنب تيرازيس و ايستكاه مترو")
// location of icon + Popup
customMarkers.push(L.circle([29.678837, 52.456484], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی : ٢٠ متر بعد از خیابان دنا مقابل داروخانه دکتر دانیالی")
// location of icon + Popup
customMarkers.push(L.circle([29.679678, 52.458202], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی : بعد از پل هوایی قبل از خیابان پزشکان مقابل میوه و تره بار پزشكان")
// location of icon + Popup
customMarkers.push(L.circle([29.68099, 52.461368], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی : مقابل مجتمع تجاری الوند- نرسیده به بلوار دوستان")
// location of icon + Popup
customMarkers.push(L.circle([29.682240, 52.464169], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی : مقابل مجتمع تجاری نغمه حدفاصل کوچه ١٧ و ١۵")
// location of icon + Popup
customMarkers.push(L.circle([29.683461, 52.466929], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی: حدفاصل کوچه ١١ و ٩- بین مجتمع تجاری افتاب و مجتمع تجاری یونیک")
// location of icon + Popup
customMarkers.push(L.circle([29.684448, 52.469177], {
    icon: tIcon
})) //.bindPopup("ضلع شرقى : حدفاصل كوچه ۵ و ٣ - مقابل لبنیات سنتى سانو")
// location of icon + Popup
customMarkers.push(L.circle([29.684821, 52.469535], {
    icon: tIcon
})) //.bindPopup("ضلع غربی : مقابل پلاسکو حافظ (ظروف یکبار مصرف) روپروی کوچە ٣ - سمت چپ")
// location of icon + Popup
customMarkers.push(L.circle([29.685526, 52.471675], {
    icon: tIcon
})) //.bindPopup("ضلع شرقى : جنب خيابان رهبرماه - مقابل مجتمع تجارى آفتاب فارس")
// location of icon + Popup
customMarkers.push(L.circle([29.621018, 52.544350], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی : مقابل فروشگاه حاجیان نبش خیابان داوری - محصولات کشاورزی و صنعتی")
// location of icon + Popup
customMarkers.push(L.circle([29.620183, 52.543143], {
    icon: tIcon
})) //.bindPopup("ضلع غربی : حد فاصل خیابان مکتبی و ایزدی مقابل فروشگاه شجاعی")
// location of icon + Popup
customMarkers.push(L.circle([29.619409, 52.542332], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی : مقابل فروشگاه امير تاير و لاستیک فروشی بارز")
// location of icon + Popup
customMarkers.push(L.circle([29.619931, 52.542982], {
    icon: tIcon
})) //.bindPopup("ضلع شرقى : مقابل پاساژ سعدى روبروى خيابان مكتبى")
// location of icon + Popup
customMarkers.push(L.circle([29.620662, 52.543880], {
    icon: tIcon
})) //.bindPopup("ضلع شرقی : مقابل پاساژ ایران ماشین - روبروی خیابان داوری")
// location of icon + Popup
customMarkers.push(L.circle([29.617598, 52.546206], {
    icon: tIcon
})) //.bindPopup("ضلع غربی : مقابل ساندویج و فست فود كریمخان")
// location of icon + Popup
customMarkers.push(L.circle([29.618629, 52.547007], {
    icon: tIcon
})) //.bindPopup("ضلع غربی : مقابل مهمانپذیر پیام - روبروی هتل پارس (تابلو ساز زمانی)")
// location of icon + Popup
customMarkers.push(L.circle([29.619963, 52.548029], {
    icon: tIcon
})) //.bindPopup("ضلع غربی : روبروی فروشگاه پلاستیک صنعت")
// location of icon + Popup
customMarkers.push(L.circle([29.613261, 52.543335], {
    icon: tIcon
})) //.bindPopup("ضلع شرقى : مابین مجتمع تجاری شادی و پاساز مرمر")
// location of icon + Popup
customMarkers.push(L.circle([29.613616, 52.54377], {
    icon: tIcon
})) //.bindPopup("ضلع شرقى : مقابل فروشگاه بزرک كلباران مقابل مركز خريد مادر")
// location of icon + Popup
customMarkers.push(L.circle([29.615435, 52.545356], {
    icon: tIcon
})) //.bindPopup("انتهاى طالقانى ضلع شرقى مقابل فروشكاه فرش پارس (حق نكهدار)")
// location of icon + Popup
customMarkers.push(L.circle([29.618328, 52.541012], {
    icon: tIcon
})) //.bindPopup("روبروی مجتمع موبایل")
// location of icon + Popup
customMarkers.push(L.circle([29.61809, 52.540689], {
    icon: tIcon
})) //.bindPopup("روبروی پاساژ فکری")
// location of icon + Popup
customMarkers.push(L.circle([29.617839, 52.540191], {
    icon: tIcon
})) //.bindPopup("روبروی پاساژ وحدت و پردیس")
// location of icon + Popup
customMarkers.push(L.circle([29.61761, 52.53993], {
    icon: tIcon
})) //.bindPopup("پاساژ بوشهری روبروی لوازم خانگی چابهار تجاری شهر")
// location of icon + Popup
customMarkers.push(L.circle([29.617228, 52.53926], {
    icon: tIcon
})) //.bindPopup("روبروی خیابان اهلی حدفاصل بازار دشتی")
// location of icon + Popup
customMarkers.push(L.circle([29.617086, 52.538945], {
    icon: tIcon
})) //.bindPopup("مقابل پاساژ كازرونيها")
// location of icon + Popup
customMarkers.push(L.circle([29.617491, 52.538842], {
    icon: tIcon
})) //.bindPopup("مقابل ساختمان حافظ")
// location of icon + Popup
customMarkers.push(L.circle([29.617691, 52.538547], {
    icon: tIcon
})) //.bindPopup("مابین كوچه ١٠ و ١٣ اهلى مقابل لوازم خانكی")
// location of icon + Popup
customMarkers.push(L.circle([29.617937, 52.538087], {
    icon: tIcon
})) //.bindPopup("مقابل فروشگاه زنجیرە ای جانبو جنب پارکینگ طبقاتی اهلی روبروی هتل آریانا")
// location of icon + Popup
customMarkers.push(L.circle([29.618536, 52.536717], {
    icon: tIcon
})) //.bindPopup("مقابل مجتمع تجاری اهلی روپروی همبر گر ١١٠")
// location of icon + Popup
customMarkers.push(L.circle([29.617321, 52.53579], {
    icon: tIcon
})) //.bindPopup("مقابل مركز تجارى انورى (ابتداى لطفعلى خان زند)")
// location of icon + Popup
customMarkers.push(L.circle([29.619565, 52.537317], {
    icon: tIcon
})) //.bindPopup("مقابل مجتمع تجارى مهستان")
// location of icon + Popup
customMarkers.push(L.circle([29.622267, 52.541122], {
    icon: tIcon
})) //.bindPopup("مقابل درب هتل آریو برزن حدفاصل کوچه ۶ تا ٨")
// location of icon + Popup
customMarkers.push(L.circle([29.621144, 52.540714], {
    icon: tIcon
})) //.bindPopup("مقابل فروشكاه استخرى جنب هتل هديش")
// location of icon + Popup
customMarkers.push(L.circle([29.620349, 52.540514], {
    icon: tIcon
})) //.bindPopup("حدفاصل کوچہ ٢ تا درب ورودی مجتمع رضا روپروی میوە مار کت رود کی")

// add markers to map
customMarkers.forEach(item => {
    item.addTo(myMap)
})

// condition for zoom out + zoom in
myMap.on("zoom", () => {
    if (myMap.getZoom() <= 12) {
        // remove icons if zoom is less than 12 || zoom is be 12
        customMarkers.forEach(item => {
            myMap.removeLayer(item)
        })
        // add icons to the map if zoom is more than 12
    } else {
        customMarkers.forEach(item => {
            item.addTo(myMap)
        })
    }
})


//adding the marker to map => base marker
let marker = L.marker([29.606446174640958, 52.53792787943611])
let centerLat = " 29.606446174640958";
let centerLng = " 52.53792787943611";

// get and show user location
function whereAmI() {
    // if user Devise suports geo location
    const successCallback = (position) => {
        // set marker position
        marker.setLatLng([position.coords.latitude, position.coords.longitude]).addTo(myMap);;
        // change value of location
        centerLat = position.coords.latitude, position;
        centerLng = position.coords.longitude;
        // add Popun for marker position
        // marker.bindPopup(`lat : ${position.coords.latitude} - lng : ${position.coords.longitude}`) //.openPopup();
        // change map position
        myMap.flyTo([centerLat, centerLng], 12);
    };
    // if user Devise doesn't suports geo location
    const errorCallback = (error) => {
        alert(error.message)
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

//on map binding
myMap.on('click', addMarkerOnMap);

let greenIcon = new L.Icon({
    iconUrl: `icon/marker-icon-2x-green.png`,
    shadowUrl: 'icon/shadow/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: 'icon/marker-icon-2x-red.png',
    shadowUrl: 'icon/shadow/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


/**
 * 
 * @param {*} e - defualt param for find user location
 */
function addMarkerOnMap(e) {
    marker.addTo(myMap);
    // set marker on user clicked
    marker.setLatLng(e.latlng);
    marker.bindPopup(`lat : ${e.latlng.lat} - lng : ${e.latlng.lng}`) //.openPopup();
    // change latitude and longitude in varibles
    centerLat = e.latlng.lat;
    centerLng = e.latlng.lng;
    document.querySelector('#resualt').style.display = 'none'
    document.querySelector('#searchBox').style.height = '6vh'
    document.querySelector('#inputSearch').style = ' margin-bottom:0;'
}

let searchMarkers = [];

//sending request to Search API
function search() {
    // restarting the markers
    for (let j = 0; j < searchMarkers.length; j++) {
        if (searchMarkers[j] != null) {
            myMap.removeLayer(searchMarkers[j]);
            searchMarkers[j] = null;
        }
    }
    marker.setLatLng([centerLat, centerLng]);
    //getting term value from input tag
    let term = document.getElementById("term").value;
    //making url 
    let url = `https://api.neshan.org/v1/search?term=${term}&lat=${centerLat}&lng=${centerLng}`;
    //add your api key
    const params = {
        headers: {
            'Api-Key': 'service.cda03e92088046d2bbfc62fb3266d2c4'
        },

    };
    //sending get request
    axios.get(url, params)
        .then(data => {
            document.getElementById("resualt").innerHTML = "";

            // If a city is not found in the search
            // (cheange the style search box in footer)
            if (data.data.count != 0) {
                document.querySelector('#resualt').style.display = 'flex'
                document.querySelector('#searchBox').style.height = '30vh'
                document.querySelector('#inputSearch').style = ' margin-bottom: 1.5vh;'
            } else {
                document.querySelector('#resualt').style.display = 'none'
                document.querySelector('#searchBox').style.height = '6vh'
                document.querySelector('#inputSearch').style = ' margin-bottom:0;'
            }


            document.querySelector('#searchBox').style.marginBottom = '1.5vh'

            //set center of map to marker location
            console.log(data.data.count);
            myMap.setZoom(13)

            //for every search resualt add marker
            let i;
            for (i = 0; i < data.data.count; i++) {
                let info = data.data.items[i];
                searchMarkers[i] = L.marker([info.location.y, info.location.x], {
                    icon: greenIcon,
                    title: info.title
                }).addTo(myMap);
                makeDiveResualt(data.data.items[i], i);
            }

        }).catch(error => {
            document.getElementById("resualt").innerHTML = "";
            document.getElementById("resualt").style.display = "none";
            document.querySelector('#searchBox').style.height = '6vh'
            console.log(error);
        });

}

/**
 * get address by user search and add green markers to each address and then when user click on target address add red marker(this marker is the user target address) and then remove all extra green markers
 * 
 * @param {object} data - information of address (title/address/type/lacation/neighbourhood/region/type/category)
 * @param {number} index - each div of user target address has number(number are index of array)
 */
function makeDiveResualt(data, index) {
    console.log(data.title)
    const resultsDiv = document.getElementById("resualt");
    const resultDiv = document.createElement("div");
    // active function when user click on one address
    resultDiv.onclick = function (e) {
        // fly map to user target addresslocation
        myMap.flyTo([data.location.y, data.location.x], 16);
        // searchMarkers[index].setIcon(redIcon);
        // setTimeout(function () {
        //     searchMarkers[index].setIcon(greenIcon);
        // }, 4000);
        // loop in search markers until user click on one address and return address location
        for (let i = 0; i < searchMarkers.length; i++) {
            if (i == index) {
                searchMarkers[i].setIcon(redIcon);
                continue;
            }
            // remove extra markers (greenn  markers)
            searchMarkers[i].remove(greenIcon);

        }
        // Hide list of suggestions
        document.querySelector('#resualt').style.display = 'none'
        document.querySelector('#searchBox').style.height = '6vh'
        document.querySelector('#inputSearch').style = ' margin-bottom:0;'
    }
    resultDiv.dir = "ltr";
    let location = document.createElement("pre");
    let resultTilte = document.createElement("div");
    let resultAddress = document.createElement("div");
    resultTilte.textContent = data.title
    resultAddress.textContent = data.address
    // resultAddress.style = `border: solid ${generateRandomColor()};`;
    location.appendChild(resultAddress);
    location.appendChild(resultTilte);
    resultDiv.appendChild(location);
    resultsDiv.appendChild(resultDiv);
}

// //random color generator :))
// function generateRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// Red area on the map
let polygonR = L.polygon([
        [29.63224268288644, 52.51155887399805],
        [29.632183027956078, 52.51208706414943],
        [29.632266086801376, 52.5122815379551],
        [29.632225273533486, 52.514359214489865],
        [29.633198280089964, 52.51760537535741],
        [29.633260237026747, 52.51837148453763],
        [29.633210500959816, 52.51892914183325],
        [29.632950891992643, 52.519866433317276],
        [29.63045210925426, 52.52495475511163],
        [29.630089990255836, 52.525771839299345],
        [29.629102326790086, 52.52761065026119],
        [29.627770934443532, 52.53123210819165],
        [29.6269614755012, 52.53375705009829],
        [29.626519685817346, 52.53640626713942],
        [29.62639007476295, 52.53723418789514],
        [29.6230514014352, 52.54744040350827],
        [29.62143601147854, 52.55144566080521],
        [29.62049360792273, 52.55325823652241],
        [29.61800365832895, 52.55545287676615],
        [29.613596544831115, 52.55889695266894],
        [29.61172054349949, 52.55920568103425],
        [29.611344388933556, 52.559661396220434],
        [29.610985394619348, 52.561095777216735],
        [29.61022596569201, 52.561775544675015],
        [29.60899892973198, 52.560101052545384],
        [29.608537776335876, 52.559328671315846],
        [29.608625028283907, 52.558215722913374],
        [29.610353912589925, 52.55535413313356],
        [29.610241183177585, 52.55507824889974],
        [29.61005207610998, 52.55498146715887],
        [29.6073659235267, 52.5553871192685],
        [29.606601160455966, 52.55535386606747],
        [29.605407886463052, 52.55501894217365],
        [29.603671876306862, 52.55439139709831],
        [29.601192880276315, 52.55353745438769],
        [29.599934217640023, 52.55314019022923],
        [29.599072336653176, 52.552907068803144],
        [29.59801649288497, 52.55281432365767],
        [29.599696751785658, 52.54597081824115],
        [29.600197218239238, 52.54420220860165],
        [29.60041373086332, 52.543139231287405],
        [29.602141986635043, 52.54058010541307],
        [29.603601739875725, 52.53885851946682],
        [29.605440891462177, 52.53662079272756],
        [29.60792078539074, 52.53401525988612],
        [29.608666839424874, 52.53321522069795],
        [29.609441939754873, 52.53151568169433],
        [29.621260960229645, 52.514668943476444],
        [29.62102760008177, 52.51405372902346],
        [29.62488395228294, 52.51126129124973],
        [29.625185259529758, 52.51104953385847],
        [29.625660769158962, 52.51084830979905],
        [29.627118621990792, 52.51052147201294],
        [29.627812005141088, 52.50986571482591],
        [29.629155577882468, 52.50928159992126],
        [29.63039141472681, 52.51121079212537],
        [29.631545711118406, 52.51174336567942]
    ], {
        color: '#ff5a5a',
        fillColor: '#ff5a5a',
    }

).addTo(myMap);


// yllow area on the map
let polygonY = L.polygon([
        [29.697005062747078, 52.46411638722892],
        [29.69645518615554, 52.465017747454894],
        [29.69106823412858, 52.46938119212476],
        [29.689355896405043, 52.47084567643675],
        [29.68855236987735, 52.47220958202537],
        [29.687918040911015, 52.473142444273584],
        [29.68729178068553, 52.47370084869068],
        [29.687171470209076, 52.47461193185616],
        [29.687338210047617, 52.475912050801256],
        [29.687168083408018, 52.476953673107545],
        [29.686795479595087, 52.47756025218228],
        [29.685396601909133, 52.47880572396194],
        [29.679978222090423, 52.482313243128615],
        [29.678502732996094, 52.48288664160404],
        [29.676708259760197, 52.483315582743366],
        [29.67557571592204, 52.48408840923968],
        [29.67317976862456, 52.486390250563346],
        [29.672736748710857, 52.48709857640166],
        [29.670828626114737, 52.48737341583555],
        [29.666599027400604, 52.48801732012639],
        [29.66330151116133, 52.487785868784506],
        [29.662510937059896, 52.487998549840945],
        [29.65914479498469, 52.490123811206],
        [29.658772212237313, 52.49056301057635],
        [29.656420368775372, 52.49243039747071],
        [29.654827663056153, 52.4934500968863],
        [29.65101376255643, 52.495811254647684],
        [29.64986333272806, 52.49727947071428],
        [29.648944852036923, 52.49893211130487],
        [29.64819443817738, 52.49971483511699],
        [29.646861253806296, 52.500216727420586],
        [29.645527532183678, 52.50065377457626],
        [29.641232483870784, 52.50381500880872],
        [29.64100043835028, 52.504317686244114],
        [29.640930471085287, 52.50479543436495],
        [29.63921912618294, 52.505530317174426],
        [29.637949283328616, 52.50693370927544],
        [29.63675273366292, 52.50852895608541],
        [29.635352660737926, 52.51190440597033],
        [29.63446209426365, 52.51511079309629],
        [29.634063712395953, 52.52015323232459],
        [29.634187038195364, 52.520865547688274],
        [29.63451021528046, 52.52145915471317],
        [29.63526088005383, 52.52221331739839],
        [29.636484902612416, 52.523097956713634],
        [29.63811464719358, 52.52470284982599],
        [29.6385553184782, 52.525699805496814],
        [29.640357354473863, 52.53017908393654],
        [29.640738539608357, 52.5318603916585],
        [29.640385299607015, 52.53404689479613],
        [29.639804429125757, 52.53581872339865],
        [29.639475890368445, 52.53874270476708],
        [29.63882554660906, 52.541686275704755],
        [29.637635399823434, 52.545226834065005],
        [29.636859397256508, 52.54782507647052],
        [29.635981035197467, 52.54914185253274],
        [29.635447249156208, 52.54973312173986],
        [29.63486881945793, 52.550948377501754],
        [29.63423297730581, 52.55301663740942],
        [29.633797288520498, 52.55397482370009],
        [29.6330832314199, 52.55502760418575],
        [29.63303741759631, 52.556033284635554],
        [29.634394432963806, 52.56051225617277],
        [29.63556005226116, 52.562030985359144],
        [29.635447387275153, 52.56249369520898],
        [29.63258415676341, 52.56098702324211],
        [29.631996829165686, 52.56078863884975],
        [29.62975847078952, 52.561169728371254],
        [29.628903294298507, 52.56157102852728],
        [29.625493668847422, 52.56661009188463],
        [29.62349868873663, 52.56873941050825],
        [29.623001950360372, 52.569157283126714],
        [29.61885019578703, 52.57239419596816],
        [29.61319845352686, 52.58016573262269],
        [29.61144332245094, 52.58170854480282],
        [29.61143613736161, 52.58224969100276],
        [29.611383155394332, 52.58252658205012],
        [29.611067069790998, 52.58302350269627],
        [29.611076937766722, 52.583326404017335],
        [29.610772147589458, 52.58335586999372],
        [29.610070498855357, 52.5825692284772],
        [29.60927666285004, 52.58315387932273],
        [29.606436223785042, 52.587165743882814],
        [29.60441541189157, 52.58963619214597],
        [29.60072667970302, 52.59351867972096],
        [29.60003662280289, 52.59447322059894],
        [29.59965745315399, 52.59518783513705],
        [29.59935816576341, 52.59532584985394],
        [29.59787361416918, 52.59565405393582],
        [29.594323519296832, 52.59551796255741],
        [29.59323658462001, 52.59545913795501],
        [29.592896296091695, 52.595378714145205],
        [29.59116989354125, 52.59457395590436],
        [29.58954571692715, 52.593810986664565],
        [29.589182795972906, 52.59397862226973],
        [29.588800110985357, 52.5942792278289],
        [29.588489295293506, 52.594315712175046],
        [29.58829619516873, 52.59400002686606],
        [29.588281261244287, 52.59354052984624],
        [29.588255126586393, 52.59316369924048],
        [29.587881167771954, 52.59285219001981],
        [29.58239446393781, 52.58999960026313],
        [29.581695573556043, 52.58948151733509],
        [29.581233617277302, 52.58888247821718],
        [29.57740184782196, 52.58265819354502],
        [29.577098464674453, 52.58234148411662],
        [29.576679632612393, 52.58241725960419],
        [29.575049016951525, 52.583630766934924],
        [29.57484405672294, 52.58314113140005],
        [29.575358418920356, 52.58275141777261],
        [29.575509174450314, 52.58172631979678],
        [29.575547447968525, 52.58125716035708],
        [29.575759352751543, 52.5806538019251],
        [29.57576588722559, 52.580169612272975],
        [29.57501919897679, 52.57900107513255],
        [29.57440332183094, 52.57801405406057],
        [29.573736097390807, 52.57687660282712],
        [29.573171860814668, 52.57571205880008],
        [29.572678958886318, 52.57449460635099],
        [29.572538929458155, 52.57375382836591],
        [29.57265625588922, 52.572450386828166],
        [29.57355999362586, 52.569730285333996],
        [29.57823600934148, 52.56010351436518],
        [29.578967303626236, 52.55878797700692],
        [29.57919460369229, 52.558165809328116],
        [29.57939725510191, 52.557944133071956],
        [29.579948189471892, 52.556958702778545],
        [29.580966124021298, 52.55493397606506],
        [29.58452631377607, 52.54778617564764],
        [29.58483221259091, 52.5470355321169],
        [29.585396927987162, 52.54553803881066],
        [29.585926574370355, 52.54361530438139],
        [29.58689429732726, 52.53986979915789],
        [29.587391659672466, 52.5376866871126],
        [29.587961027541766, 52.53543937438485],
        [29.588352374245936, 52.53420600311608],
        [29.588791997033788, 52.5332094621925],
        [29.589257408734944, 52.53221052906114],
        [29.590005039844296, 52.530581093266086],
        [29.591137334488614, 52.52801546019193],
        [29.5922803438216, 52.52547827930726],
        [29.59442589067763, 52.5203551507584],
        [29.594876570623757, 52.51916865118137],
        [29.595248789687357, 52.512135947690886],
        [29.59567413541767, 52.51021546531963],
        [29.59563120337621, 52.509503190335764],
        [29.595831017977737, 52.50912081141084],
        [29.596229079133845, 52.50884356786036],
        [29.59912995359386, 52.49958067653415],
        [29.600116597934324, 52.49759386723035],
        [29.602952179420342, 52.4929160549519],
        [29.60451030003471, 52.49079722819609],
        [29.60496634784674, 52.49009849933776],
        [29.60689321238525, 52.48321098857192],
        [29.608068136333927, 52.47963828616408],
        [29.611158348911825, 52.46848120582143],
        [29.61141310482045, 52.4681379408952],
        [29.61186849090299, 52.46782900242883],
        [29.6132596769286, 52.467976885470556],
        [29.615602347887727, 52.46806287337796],
        [29.616487886054664, 52.46813903518526],
        [29.62208184961727, 52.47081237899102],
        [29.623401967745135, 52.47132367889144],
        [29.62482947735734, 52.472696284683465],
        [29.625426091263975, 52.473547190302476],
        [29.626630551818092, 52.474032885532715],
        [29.627599891198788, 52.47463409752458],
        [29.627972714127054, 52.47484878899749],
        [29.62839910213669, 52.47483806196855],
        [29.629027951203714, 52.47540015821981],
        [29.629317436679738, 52.475348424766864],
        [29.63843317244456, 52.46445064889367],
        [29.638270679547052, 52.46425886797928],
        [29.638164792806464, 52.46387001317999],
        [29.63827161238346, 52.46343556850772],
        [29.63852816555817, 52.463228000513965],
        [29.639140595710458, 52.46288127664835],
        [29.640003984347146, 52.46262648034529],
        [29.64295879421741, 52.45928581788551],
        [29.64672768760485, 52.45763961552272],
        [29.663190578569846, 52.455776774683976],
        [29.667228034599415, 52.45536286309877],
        [29.66911570783308, 52.45525773867345],
        [29.67496105094593, 52.45404520786812],
        [29.677223611705188, 52.453326702612436],
        [29.6816569077073, 52.45108046248932],
        [29.6830759856667, 52.4503272406141],
        [29.687408335976485, 52.44646446122922],
        [29.688075441791394, 52.44630996490597],
        [29.68847546645497, 52.44624238459086],
        [29.68889587458635, 52.44820649994358],
        [29.689235082178346, 52.45174302688516],
        [29.6905482281368, 52.45780224195229],
        [29.691744341692115, 52.46031848287104],
        [29.694533295312617, 52.46289620860949],
        [29.6955638621414, 52.4634889206914]
    ], {
        color: '#ffff9b',
        fillColor: '#ffff9b'
    }

).addTo(myMap);


// green area on the map
let polygonG = L.polygon([
        [29.77066647289751, 52.42980393903026],
        [29.76133607973495, 52.45113754927683],
        [29.710639518746273, 52.57017969709148],
        [29.69569971823202, 52.56716858695042],
        [29.68446382640253, 52.576525957576855],
        [29.66214310734951, 52.58507272430164],
        [29.64301121261508, 52.60494890903624],
        [29.64217430221736, 52.61787515357844],
        [29.63993535172539, 52.62929475044192],
        [29.636163081938015, 52.629558712935065],
        [29.621051653706118, 52.61053551750061],
        [29.608161242855143, 52.60261793253663],
        [29.602066670632873, 52.60043266711209],
        [29.59893844091082, 52.61350903656329],
        [29.56999106396646, 52.64394564976813],
        [29.56277485979153, 52.68743334421401],
        [29.544020450853512, 52.71668038481861],
        [29.512687437271776, 52.70545475385034],
        [29.48303508056662, 52.687779390945344],
        [29.476638145484003, 52.65464845751863],
        [29.483814202559213, 52.61758033290528],
        [29.506295885150305, 52.56959769864896],
        [29.550963468278166, 52.524061254618715],
        [29.556412018863085, 52.5029395202589],
        [29.571971440602876, 52.46356672656562],
        [29.58299950027453, 52.45522420593015],
        [29.592697840651816, 52.44474278555788],
        [29.60147835678799, 52.42926341444038],
        [29.61425950615318, 52.4205112183511],
        [29.632045044613218, 52.42414844414245],
        [29.645373394977526, 52.43615961733235],
        [29.664452595259164, 52.4329030749892],
        [29.681173052082364, 52.42311638370855],
        [29.69498838075915, 52.402042470514004],
        [29.717407154238515, 52.38826673911852],
        [29.737808347388164, 52.38723324294288],
        [29.757042947133527, 52.390493865015344]

    ], {
        color: '#c8ffc8',
        fillColor: '#c8ffc8'
    }

).addTo(myMap);