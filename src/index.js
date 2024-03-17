function updateTime() {
  //Hawai
  let hawaiElement = document.querySelector("#hawai");
  let hawaiDateElement = hawaiElement.querySelector(".date");
  let hawaiTimeElement = hawaiElement.querySelector(".time");
  let hawaiTime = moment().tz("Pacific/Honolulu");

  hawaiDateElement.innerHTML = moment().format("MMMM Do YYYY");
  hawaiTimeElement.innerHTML = hawaiTime.format("h:mm:ss [<small>]A[</small>]");

  //Iceland
  let icelandElement = document.querySelector("#iceland");
  let icelandDateElement = icelandElement.querySelector(".date");
  let icelandTimeElement = icelandElement.querySelector(".time");
  let icelandTime = moment().tz("Iceland");

  icelandDateElement.innerHTML = moment().format("MMMM Do YYYY");
  icelandTimeElement.innerHTML = icelandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Maledives
  let maledivesElement = document.querySelector("#maledives");
  let maledivesDateElement = maledivesElement.querySelector(".date");
  let maledivesTimeElement = maledivesElement.querySelector(".time");
  let maledivesTime = moment().tz("Indian/Maldives");

  maledivesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  maledivesTimeElement.innerHTML = maledivesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //New Zealand
  let newZealandElement = document.querySelector("#newZealand");
  let newZealandDateElement = newZealandElement.querySelector(".date");
  let newZealandTimeElement = newZealandElement.querySelector(".time");
  let newZealandTime = moment().tz("Pacific/Auckland");

  newZealandDateElement.innerHTML = moment().format("MMMM Do YYYY");
  newZealandTimeElement.innerHTML = newZealandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ");
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
        <a href="/">Refresh / Back</a>
    `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
//
