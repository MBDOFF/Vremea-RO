function getData() {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?lat=45.7538355&lon=21.2257474&appid=d844ff38165a265c87991893a6ca3c42&units=metric"
    )
    .then(function (response) {
      // handle success
      const data = response.data;
      console.log(data);
      document.getElementById("name").innerText = data.name+", "+data.sys.country;
      document.getElementById("vreme1").innerText = data.main.temp;
      document.getElementById("vreme2").innerText = data.main.feels_like;

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
getData();
