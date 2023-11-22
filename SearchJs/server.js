// variables...
var centerLat = document.getElementById("center_lat");
var centerLng = document.getElementById("center_lng");
const userBtn = document.querySelector("#userLocation")

// events...



// functions...

//init the map
var myMap = new L.Map('map', {
    key: 'web.a1d0cdd60e584c12841a7c226540a7f7',
    maptype: 'dreamy',
    poi: true,
    traffic: true,
    center: [29.606446174640958, 52.53792787943611],
    zoom: 14
});

//adding the marker to map
let marker = L.marker([29.606446174640958, 52.53792787943611]).addTo(myMap);
centerLat.value = " 29.606446174640958";
centerLng.value = " 52.53792787943611";

// get and show user location
function whereAmI() {
    // if user Devise suports geo location
    const successCallback = (position) => {
        // set marker position
        marker.setLatLng([position.coords.latitude, position.coords.longitude]);
        // change value of location
        centerLat.value = position.coords.latitude, position;
        centerLng.value = position.coords.longitude;
        // add Popun for marker position
        marker.bindPopup(`lat : ${position.coords.latitude} - lng : ${position.coords.longitude}`).openPopup();
        // change map position
        myMap.flyTo([centerLat.value, centerLng.value], 12);
    };
    // if user Devise doesn't suports geo location
    const errorCallback = (error) => {
        alert(error.message)
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

}

//on map binding
myMap.on('click', addMarkerOnMap);

var greenIcon = new L.Icon({
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


//on map click function
function addMarkerOnMap(e) {
    marker.setLatLng(e.latlng);
    marker.bindPopup(`lat : ${e.latlng.lat} - lng : ${e.latlng.lng}`).openPopup();
    centerLat.value = e.latlng.lat;
    centerLng.value = e.latlng.lng;
}

var searchMarkers = [];

//sending request to Search API
function search() {
    // restarting the markers
    for (var j = 0; j < searchMarkers.length; j++) {
        if (searchMarkers[j] != null) {
            myMap.removeLayer(searchMarkers[j]);
            searchMarkers[j] = null;
        }
    }
    marker.setLatLng([centerLat.value, centerLng.value]);
    //getting term value from input tag
    var term = document.getElementById("term").value;
    //making url 
    var url = `https://api.neshan.org/v1/search?term=${term}&lat=${centerLat.value}&lng=${centerLng.value}`;
    //add your api key
    var params = {
        headers: {
            'Api-Key': 'service.cda03e92088046d2bbfc62fb3266d2c4'
        },

    };
    //sending get request
    axios.get(url, params)
        .then(data => {
            document.getElementById("resualt").innerHTML = "";
            if (data.data.count != 0) {
                document.getElementById("panel").style = "height: 60%;"
            } else {
                document.getElementById("panel").style = "height: fit-content;"
            }
            document.getElementById("resultCount").textContent = `تعداد نتایج : ${data.data.count}`
            //set center of map to marker location
            console.log(data.data);
            myMap.flyTo([centerLat.value, centerLng.value], 12);

            //for every search resualt add marker
            var i;
            for (i = 0; i < data.data.count; i++) {
                var info = data.data.items[i];
                searchMarkers[i] = L.marker([info.location.y, info.location.x], {
                    icon: greenIcon,
                    title: info.title
                }).addTo(myMap);
                makeDiveResualt(data.data.items[i], i);
            }


        }).catch(error => {
            document.getElementById("resualt").innerHTML = "";
            document.getElementById("panel").style = "height: fit-content;"
            document.getElementById("resultCount").textContent = `تعداد نتایج : 0`
            console.log(error.response);
        });
}

function makeDiveResualt(data, index) {
    var resultsDiv = document.getElementById("resualt");
    var resultDiv = document.createElement("div");
    resultDiv.onclick = function (e) {
        myMap.flyTo([data.location.y, data.location.x], 16);
        // searchMarkers[index].setIcon(redIcon);
        // setTimeout(function(){
        //     searchMarkers[index].setIcon(greenIcon);
        // },4000);
        for (var i = 0; i < searchMarkers.length; i++) {
            if (i == index) {
                searchMarkers[i].setIcon(redIcon);
                continue;
            }
            searchMarkers[i].setIcon(greenIcon);
        }

    }
    resultDiv.dir = "ltr";
    var resultAddress = document.createElement("pre");
    resultAddress.textContent = `title : ${data.title} \n Address : ${data.address} \n type : ${data.type}`;
    resultAddress.style = `border: solid ${generateRandomColor()};`;
    resultsDiv.appendChild(resultDiv);
    resultDiv.appendChild(resultAddress);

}

//random color generator :))
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Red area on the map
var polygon = L.polygon([
    [29.619883657385166, 52.52855003268645],
    [29.605590904673548, 52.517085228188314],
    [29.597124205302865, 52.53252071867724],
    [29.60032598023533, 52.53657479058015],
    [29.603644555714503, 52.538720272952276],
    [29.603711672527506, 52.53878892734056],
    [29.608799055570728, 52.542042512611324],
    [29.610341637063463, 52.54018508862055],
    [29.612179261924993, 52.54146171792539],
    [29.613149971580423, 52.54051397630156],
    [29.613790309119878, 52.54037237449773],
    [29.614365863781373, 52.54071618808061],
    [29.615975417561312, 52.542373547168246],
    [29.61710137768525, 52.54321165813948],
    [29.617429922790105, 52.5430078373141]
],
    {
        color: 'red',
        fillColor: 'red',
    }

).addTo(myMap);


// Green area on the map
var polygon = L.polygon([
    [29.611485196721464, 52.468101407336775],
    [29.6050131178401, 52.49018382383847],
    [29.60070958018711, 52.496921952379836],
    [29.59896748390389, 52.500839210649474],
    [29.596035590213763, 52.50992645695803],
    [29.57321671597567, 52.50478342705975],
    [29.575003419736863, 52.49925404865084],
    [29.577005833643668, 52.49673879402647],
    [29.579279895890338, 52.49422265099454],
    [29.580793670190705, 52.49148056074872],
    [29.587481734614883, 52.480093318954175],
    [29.59013558764032, 52.47680451377478],
    [29.59566150631803, 52.47388316507248],
    [29.60311929207729, 52.471600578506596],
    [29.604950996647112, 52.47021674237663],
    [29.606256347898835, 52.467218643803626],
],
    {
        color: 'green',
        fillColor: 'green',
    }

).addTo(myMap);

// Yellow area on the map
var polygon = L.polygon([
    [29.617311088530325, 52.486545859329304],
    [29.615819809609274, 52.5144371301665],
    [29.607494753146092, 52.51327602792027],
    [29.604163714742302, 52.5156582195362],
    [29.61270505614918, 52.48481254993158]
],
    {
        color: 'yellow',
        fillColor: 'yellow',
    }

).addTo(myMap);