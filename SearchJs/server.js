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

//adding the marker to map => base marker
let marker = L.marker([29.606446174640958, 52.53792787943611]).addTo(myMap);
centerLat.value = " 29.606446174640958";
centerLng.value = " 52.53792787943611";

// location of Shiraz cargo terminal => show it with marker
const LeafIcon = L.Icon.extend({
    options: {
        iconSize: [28, 65],
        shadowSize: [50, 64],
        iconAnchor: [12, 64],
        shadowAnchor: [4, 62],
        popupAnchor: [0, -50]
    }
});
// choose icons
var greenIcon = new LeafIcon({
    iconUrl: 'icon/location-pin-svgrepo-com.svg',
    // shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
})
// location of icon01
L.marker([29.68218188708475, 52.53309502488736], {
    icon: greenIcon
}).addTo(myMap).bindPopup("پایانه حمل بار شیراز");
// location of icon02
L.marker([29.545853949560765, 52.589737662746444], {
    icon: greenIcon
}).addTo(myMap).bindPopup(" فرودگاه بین المللی شهید دستغیب شیراز");
// // location of icon03
L.marker([29.655353264688696, 52.48390338181354], {
    icon: greenIcon
}).addTo(myMap).bindPopup("پایانه حمل بار شیراز ");








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