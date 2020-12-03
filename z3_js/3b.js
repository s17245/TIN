
function checkBox() {

    var x = document.getElementById("myText").value;
    var y = document.getElementById("myCheckBox").checked;
    
    if(y){ // F to C
        x = (x * (9/5)) +32;
    } else { // C to F
        x = (x - 32) * ( 5/9 );
    }

    document.getElementById("temp").innerHTML = x;
  }