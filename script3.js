fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById("valorDolar").innerHTML = economia.USDBRL.bid
    document.getElementById("valorDolarMenor").innerHTML = economia.USDBRL.low
    document.getElementById("valorDolarMaior").innerHTML = economia.USDBRL.high

})

