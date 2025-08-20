async function getWeather() {
    //criar uma variavel para pegar o valor do input cidade
    var cidade = document.getElementById('city').value
    
    //conectar com API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //variavel para conmsumir o JSON
    var tempCelsius = resposta.data.main.temp

    //imprimir no front end
    document.getElementById('temperatura').innerHTML = `a temperatura atual ${cidade} é de: ${tempCelsius.toFixed(0)} °c`;



}
//chamar a função
getWeather();