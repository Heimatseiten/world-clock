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

updateTime();
setInterval(updateTime, 1000);
