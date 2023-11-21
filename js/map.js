const map = new nmp_mapboxgl.Map({
    mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
    container: "map",
    zoom: 11,
    pitch: 0,
    center: [51.389, 35.6892],
    minZoom: 2,
    maxZoom: 21,
    trackResize: true,
    mapKey: "web.cafb80baff4746d5b8bae527d525688d",
    poi: true,
    traffic: true,
    mapTypeControllerStatus: {
        show: true,
        position: 'bottom-left'
    }
});