function gpspin(){
    console.log("ggggggggggggggggggg");

let latText = document.getElementById("mat");
let longText = document.getElementById("matt");

  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    latText.innerText = lat;
    longText.innerText = long;


    document.getElementById("gpsmodel").setAttribute('gps-entity-place', {
        latitude: lat,
        longitude: long
        
    });
  });

   
}