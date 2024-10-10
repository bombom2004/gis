var icon_sekolah = L.icon({
    iconUrl: 'assets/images/icon.png',

    iconSize:     [38, 38], // size of the icon 
    iconAnchor:   [22, 60], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var sekolah = L.layerGroup();
var group1 = [
    L.marker([-8.71917818698257, 116.33573697479059],{icon:icon_sekolah}).bindPopup("smpn 3 prateng").addTo(sekolah),
    L.marker([-8.709049523136246, 116.34002026500718],{icon:icon_sekolah}).bindPopup("sdn dakung").addTo(sekolah),
    L.marker([-8.722201073474164, 116.3475359033256],{icon:icon_sekolah}).bindPopup("TK darujjannah esoh").addTo(sekolah)
];
var icon_masjid = L.icon({
    iconUrl: 'assets/images/masjid.png',

    iconSize:     [38, 38], // size of the icon 
    iconAnchor:   [22, 60], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var masjid = L.layerGroup();
var group2 = [
    L.marker([-8.721446129315117, 116.34013377431846],{icon: icon_masjid}).bindPopup("masjid allmujahidin nunggal").addTo(masjid),
    L.marker([-8.722564625319597, 116.3379253644876],{icon: icon_masjid}).bindPopup("masjid nurul iman nunggal lauk").addTo(masjid),
    L.marker([-8.716558488003441, 116.3325067389228],{icon: icon_masjid}).bindPopup("masjid batu tepong").addTo(masjid),
    L.marker([-8.712493205894189, 116.33726833325784],{icon: icon_masjid}).bindPopup("masjid nurul huda montong sebie").addTo(masjid),
    L.marker([-8.722519216109522, 116.34806161626452],{icon: icon_masjid}).bindPopup("masjid jamiatul kudus esoh").addTo(masjid),

];
var icon_toko = L.icon({
    iconUrl: 'assets/images/toko.png',

    iconSize:     [38, 38], // size of the icon 
    iconAnchor:   [22, 60], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var toko = L.layerGroup();
var group3 =[
    L.marker([-8.715999902193621, 116.33784391066096],{icon: icon_toko}).bindPopup("toko lampu").addTo(toko),
    L.marker([-8.717842491994757, 116.33700018636318],{icon: icon_toko}).bindPopup("toko mayapa").addTo(toko),
    L.marker([-8.719998435436265, 116.33575908070377],{icon: icon_toko}).bindPopup("toko beras H.nasrudin").addTo(toko),
    L.marker([-8.720611728151727, 116.33571233333053],{icon: icon_toko}).bindPopup("toko kaos custom").addTo(toko),

];
var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
var Stadia_AlidadeSatellite = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
});
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
const map = L.map("map",{
    center:[-8.7111953, 116.3446173],
    zoom:15,
    layers: [Stadia_AlidadeSatellite,sekolah,masjid,toko],
});
const baseLayers = {
    layer1: OpenStreetMap_Mapnik,
    layer2: Stadia_AlidadeSatellite,
    layer3: Esri_WorldImagery,
};
const overlayers ={
    pendidikan: sekolah,
    masjid: masjid,
    toko: toko,
};
const layerControl = L.control.layers(baseLayers,overlayers).addTo(map);
      //utk menampilkan data marker 
      const popup = L.popup()
        .setLatLng([-8.716958, 116.338348])
        .setContent(` <img src="assets/images/bom.jpeg"width="150px"/><p>Ini wilayah desa dakung</p>`)
        .openOn(map);


      L.geoJSON(jsonDkung, {
        style: function (feature) {
          return { color: "#9c02f5" };
        },
      }).addTo(map);