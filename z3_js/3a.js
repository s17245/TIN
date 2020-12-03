
setTimeout(forecast,3000);

function forecast(){

    var pogoda = ['Słonecznie', 'Przejaśnienia', 'Pochmurno']
    var pogodaRes = pogoda[randVal(0,2)]
    var text = ", temperatura "
    var temperatura = randVal(-40,40)
    var text2 = " stopni "

    var result = pogodaRes + text + temperatura+ text2

    document.getElementById("temp").innerHTML = result;  
}

function randVal(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


