
function addTotable() {

    var date = new Date().toLocaleDateString();
    var hour = new Date().getHours();
    var min =  new Date().getMinutes(); 
    var sec =  new Date().getSeconds();   

    var d = date + " h: " + hour + min + sec
    var C = document.getElementById("myText").value;
    var F = (C * (9/5)) +32; // C to F
    
    //var table = document.getElementById("myTable");
    //var row = table.insertRow(0);
    //var cell1 = row.insertCell(0);
    //var cell2 = row.insertCell(1);
    //cell1.innerHTML = "x";
    //cell2.innerHTML = "y";
    document.getElementById("myTable")
                .innerHTML += `<tr>
                                    <td>`+C+`</td>
                                    <td>`+F+`</td>
                                    <td>`+d+`</td>
                                </tr>`

    //document.getElementById("temp").innerHTML = x;
  }