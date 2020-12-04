var tempRandomTab = [];

for (i = 1; i <= 8; i++) {
    tempRandomTab.push(randVal(-40,40));
  }



class Prognoza {
    constructor(miejscowosc, dzienTygodnia, tempTab) {
      this.miejscowosc = miejscowosc;
      this.dzienTygodnia = dzienTygodnia;
      this.tempTab=tempTab;
    }

    sredniaTemp(){
        var suma = 0;

        for (i = 0; i < this.tempTab.length; i++){
            suma += this.tempTab[i];
        }
        return suma/this.tempTab.length;
    }
}

function randVal(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//var p;
function addTotable() {

    p = new Prognoza();
    p.miejscowosc = m;
    p.dzienTygodnia = d;
    p.tempTab = []

    var m = document.getElementById("miejscowosc").value;
    var d = document.getElementById("dzienTygodnia").value;
    var temp1 = parseInt(document.getElementById("temp1").value);
    var temp2 = parseInt(document.getElementById("temp2").value);
    var temp3 = parseInt(document.getElementById("temp3").value);
    var temp4 = parseInt(document.getElementById("temp4").value);
    var temp5 = parseInt(document.getElementById("temp5").value);
    var temp6 = parseInt(document.getElementById("temp6").value);
    var temp7 = parseInt(document.getElementById("temp7").value);
    var temp8 = parseInt(document.getElementById("temp8").value);
    
    p.tempTab.push(temp1);
    p.tempTab.push(temp2);
    p.tempTab.push(temp3);
    p.tempTab.push(temp4);
    p.tempTab.push(temp5);
    p.tempTab.push(temp6);
    p.tempTab.push(temp7);
    p.tempTab.push(temp8);

    var sredniaTemp = p.sredniaTemp();

    document.getElementById("myTable")
                .innerHTML += `<tr>
                                    <td>`+m+`</td>
                                    <td>`+d+`</td>
                                    <td id="sredniatemp">`+sredniaTemp+`°C</td>
                                    <td><p id="tempo1">`+temp1+`°C</p><br><div id="div1">zmień:<input type="number" id="1"><button onclick="zapiszEdycje(1)">Zapisz</button></div></td>
                                    <td><p id="tempo2">`+temp2+`°C</p><br><div id="div2">zmień:<input type="number" id="2"><button onclick="zapiszEdycje(2)">Zapisz</button></div></td>
                                    <td><p id="tempo3">`+temp3+`°C</p><br><div id="div3">zmień:<input type="number" id="3"><button onclick="zapiszEdycje(3)">Zapisz</button></div></td>
                                    <td><p id="tempo4">`+temp4+`°C</p><br><div id="div4">zmień:<input type="number" id="4"><button onclick="zapiszEdycje(4)">Zapisz</button></div></td>
                                    <td><p id="tempo5">`+temp5+`°C</p><br><div id="div5">zmień:<input type="number" id="5"><button onclick="zapiszEdycje(5)">Zapisz</button></div></td>
                                    <td><p id="tempo6">`+temp6+`°C</p><br><div id="div6">zmień:<input type="number" id="6"><button onclick="zapiszEdycje(6)">Zapisz</button></div></td>
                                    <td><p id="tempo7">`+temp7+`°C</p><br><div id="div7">zmień:<input type="number" id="7"><button onclick="zapiszEdycje(7)">Zapisz</button></div></td>
                                    <td><p id="tempo8">`+temp8+`°C</p><br><div id="div8">zmień:<input type="number" id="8"><button onclick="zapiszEdycje(8)">Zapisz</button></div></td>
                                </tr>`
  }
        
// function edytuj(id) {
//     if (id === 1) document.getElementById("div1").style.display = "block";
//     if (id === 2) document.getElementById("div2").style.display = "block";
//     if (id === 3) document.getElementById("div3").style.display = "block";
//     if (id === 4) document.getElementById("div4").style.display = "block";
//     if (id === 5) document.getElementById("div5").style.display = "block";
//     if (id === 6) document.getElementById("div6").style.display = "block";
//     if (id === 7) document.getElementById("div7").style.display = "block";
//     if (id === 8) document.getElementById("div8").style.display = "block";
// }

function zapiszEdycje(id) {
    var newValue = parseInt(document.getElementById(id).value);
    p.tempTab[id-1] = newValue;
    for (i = 0; i < p.tempTab.length; i++){
        console.log(p.tempTab[i]);
    }
    // console.log(p.tempTab[0])
    var srednia = p.sredniaTemp();
    document.getElementById("sredniatemp").innerHTML = srednia + `°C`;
    
    if (id === 1) document.getElementById("tempo1").innerHTML = `${newValue}` + `°C`;
    if (id === 2) document.getElementById("tempo2").innerHTML = `${newValue}` + `°C`;
    if (id === 3) document.getElementById("tempo3").innerHTML = `${newValue}` + `°C`;
    if (id === 4) document.getElementById("tempo4").innerHTML = `${newValue}` + `°C`;
    if (id === 5) document.getElementById("tempo5").innerHTML = `${newValue}` + `°C`;
    if (id === 6) document.getElementById("tempo6").innerHTML = `${newValue}` + `°C`;
    if (id === 7) document.getElementById("tempo7").innerHTML = `${newValue}` + `°C`;
    if (id === 8) document.getElementById("tempo8").innerHTML = `${newValue}` + `°C`;
}