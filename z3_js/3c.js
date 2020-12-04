
function addTotable() {

    //var date = new Date().toLocaleDateString();
    //var hour = new Date().getHours();
    //var min =  new Date().getMinutes(); 
    //var sec =  new Date().getSeconds();   

    //var d = date// + " h: " + hour + min + sec
    var C = document.getElementById("myText").value;
    var F = (C * (9/5)) +32; // C to F
    var d = document.getElementById("myDate").value;
    
    document.getElementById("myTable")
                .innerHTML += `<tr>
                                    <td>`+C+`</td>
                                    <td>`+F+`</td>
                                    <td>`+d+`</td>
                                </tr>`
  }