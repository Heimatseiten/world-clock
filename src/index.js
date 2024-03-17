function updateTime() {
  //Hawai
  let cologneElement = document.querySelector("#hawai");
  let cologneDateElement = cologneElement.querySelector(".date");
  let cologneTimeElement = cologneElement.querySelector(".time");
  let cologneTime = moment().tz("Pacific/Honolulu");

  cologneDateElement.innerHTML = moment().format("MMMM Do YYYY");
  cologneTimeElement.innerHTML = cologneTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  //Iceland
  let romElement = document.querySelector("#iceland");
  let romDateElement = romElement.querySelector(".date");
  let romTimeElement = romElement.querySelector(".time");
  let romTime = moment().tz("Iceland");

  romDateElement.innerHTML = moment().format("MMMM Do YYYY");
  romTimeElement.innerHTML = romTime.format("h:mm:ss[<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
        </div>
    `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
//cityTimeZone.replace("_", " ").split("/")[1];
