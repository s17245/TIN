var tempTab = [];

var tempRandomTab = [];

for (i = 1; i <= 8; i++) {
    tempRandomTab.push(randVal(-40,40));
  }



class Prognoza {
    constructor(miejscowość, dzieńTygodnia, tempTab) {
      this.miejscowość = miejscowość;
      this.dzieńTygodnia = dzieńTygodnia;
      this.tempTab=tempTab;
    }

    średniaTemp(){
        var suma = 0;
        this.tempTab = tempTab;

        for (i = 1; i <= tempTab.length; i++){
            suma += tempTab[i];
        }
        return suma/tempTab.length;
    }
}

function randVal(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function addTotable() {

    this.tempTab=tempTab;
    p = new Prognoza(m, d, tempTab);

    var m = document.getElementById("miejscowość").value;
    var d = document.getElementById("dzieńTygodnia").value;
    var temp1 = parseInt(document.getElementById("temp1").value);
    var temp2 = parseInt(document.getElementById("temp2").value);
    var temp3 = parseInt(document.getElementById("temp3").value);
    var temp4 = parseInt(document.getElementById("temp4").value);
    var temp5 = parseInt(document.getElementById("temp5").value);
    var temp6 = parseInt(document.getElementById("temp6").value);
    var temp7 = parseInt(document.getElementById("temp7").value);
    var temp8 = parseInt(document.getElementById("temp8").value);
    
    tempTab.push(temp1);
    tempTab.push(temp2);
    tempTab.push(temp3);
    tempTab.push(temp4);
    tempTab.push(temp5);
    tempTab.push(temp6);
    tempTab.push(temp7);
    tempTab.push(temp8);

    

    var średniaTemp = p.średniaTemp();

    document.getElementById("myTable")
                .innerHTML += `<tr>
                                    <td>`+m+`</td>
                                    <td>`+d+`</td>
                                    <td>`+średniaTemp+`</td>
                                    <td>`+temp1+`</td>
                                    <td>`+temp2+`</td>
                                    <td>`+temp3+`</td>
                                    <td>`+temp4+`</td>
                                    <td>`+temp5+`</td>
                                    <td>`+temp6+`</td>
                                    <td>`+temp7+`</td>
                                    <td>`+temp8+`</td>
                                </tr>`
  }
        