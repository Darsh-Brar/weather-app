const weatherList = {
  sunny: ['sun', 'sunny', 'sun shine'],
  cloudy: ['cloudy', 'clouds', 'over-cast'],
  rain: ['showers', 'rain', 'downpour']
}

function retrieveWeather (city) {
  const weatherAPI = 'http://api.openweathermap.org/data/2.5/weather'
  return fetch(`${weatherAPI}?q=${city}&appid=86e211b5b3483fe4d84e413d48512615`)
    .then(res => res.json())
}

const printWeather = ({main}) => {
  let result = ''
  for (let wthr in weatherList) {
    let arr = weatherList[wthr]
    arr.forEach(x => {
      if (x.includes(main.toLowerCase())) {
        result = `The weather is ${wthr}`
      }
    })
  }
  return result
}

function displayWeather (city) {
  retrieveWeather(city).then(
    (data) => {
      console.log(printWeather(data.weather[0]))
      document.querySelector('#display').innerHTML = printWeather(data.weather[0])
    })
}
