const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const locationMessage = document.querySelector('#location')
const forecastMessage = document.querySelector('#forecast')

locationMessage.textContent = ''

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value
  locationMessage.textContent = 'loading...'

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      locationMessage.textContent = data.error
    } else {
      locationMessage.textContent = data.location
      forecastMessage.textContent = data.forecast
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
});
