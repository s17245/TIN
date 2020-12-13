//S17245

//  terminal, new terminal
//  wywołanie NODE:    node 4a.js
//  komenta w przeglądarce:    http://localhost:8080/mul?liczba1=3&liczba2=5



var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html'});

  var q = url.parse(req.url, true).query;

  if(q.liczba1 && q.liczba2){
    if(req.url.includes("/add?")){
      var result = (parseInt(q.liczba1) + parseInt(q.liczba2)).toString();
      res.end("wynik dodawania: " + q.liczba1 + " + " + q.liczba2 + " wynik: " + result);
    }else if(req.url.includes("/sub?")){
      var result = (parseInt(q.liczba1) - parseInt(q.liczba2)).toString();
      res.end("wynik odejmowania: " + q.liczba1 + " - " + q.liczba2 + " wynik: " + result);
    }else if(req.url.includes("/mul?")){
      var result = (parseInt(q.liczba1) * parseInt(q.liczba2)).toString();
      res.end("wynik mnozenia: " + q.liczba1 + " * " + q.liczba2 + " wynik: " + result);
    }else if(req.url.includes("/div?")){
      var result = (parseInt(q.liczba1) / parseInt(q.liczba2)).toString();
      res.end("wynik dzielenia: " + q.liczba1 + " / " + q.liczba2 + " wynik: " + result);
    }
  }else{
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.end("popraw liczby");
  }

  
}).listen(8080);



