
function validator(a,reg){
    if(a.match(reg)){
        return true;
    }else{
        return false;
    }
}

function addTotable() {

    //var date = new Date().toLocaleDateString();
    //var hour = new Date().getHours();
    //var min =  new Date().getMinutes(); 
    //var sec =  new Date().getSeconds();   

    //var d = date// + " h: " + hour + min + sec
    var C = document.getElementById("myText").value;
    var F = (C * (9/5)) +32; // C to F
    var d = document.getElementById("myDate").value;
    var regexDate = /^\d{1,2}\.\d{1,2}\.\d{4}$/
    var regexNumber = /^\d+$/;
    var dateAlertMsg= "Nieprawidłowy format daty";
    var numberAlertMsg= "wpisz liczbę w temperaturę";

    //document.getElementById("alertInvalidDate").innerHTML = dateValidator()

    if(validator(d,regexDate) && validator(C,regexNumber)){
        document.getElementById("myTable")
        .innerHTML += `<tr>
                            <td>`+C+`</td>
                            <td>`+F+`</td>
                            <td>`+d+`</td>
                        </tr>`;
    }if( !validator(d,regexDate) && validator(C,regexNumber)){
        alert(dateAlertMsg)
    }if( validator(d,regexDate) && !validator(C,regexNumber)){
        alert(numberAlertMsg)
    }
}


