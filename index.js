function getData(pos) {
  axios
    .get(
      //"https://api.openweathermap.org/data/2.5/weather?lat=45.7538355&lon=21.2257474&appid=d844ff38165a265c87991893a6ca3c42&units=metric"
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        pos.lat +
        "&lon=" +
        pos.lon +
        "&appid=d844ff38165a265c87991893a6ca3c42&units=metric"
    )
    .then(function (response) {
      // handle success
      const data = response.data;
      console.log(data);
      document.getElementById("name").innerText =
        data.name + ", " + data.sys.country;
      document.getElementById("vreme0").innerText =
        data.weather[0].main + ", " + data.main.temp + "°C";
      document.getElementById("vreme1").innerText = data.main.feels_like + "°C";
      //document.getElementById("vreme2").innerText = data.main.feels_like;
      document.getElementById("vreme3").innerText = data.main.humidity + "%";
      document.getElementById("vreme4").innerText = data.main.pressure + "atm";
      document.getElementById("imgvreme").src =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

function getLocation() {
  getData({ lat: 45.7538355, lon: 21.2257474 });

  const successCallback = (position) => {
    console.log(position);
    getData({ lat: position.coords.latitude, lon: position.coords.longitude });
  };

  const errorCallback = () => {};
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

getLocation();

function refreshTimer() {
  setTimeout("location.reload(true);", 60000);
}

refreshTimer();
