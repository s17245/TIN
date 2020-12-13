// S17245
// npm init
// nmp install express --save
// node 4b.js

var express = require('express');
var app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false } );

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/formdata', (req, res) => {
  res.render('formdata',{
    imie:req.body.imie,
    nazwisko:req.body.nazwisko,
    warzywo:req.body.warzywo
  });
});

app.post('/jsondata', (req, res) => {
    res.render('formdata',{
        imie:req.body.imie,
        nazwisko:req.body.nazwisko,
        warzywo:req.body.warzywo
    });
});
app.listen(3000);

app.listen(port, () => {
    //4B_a
  console.log("apka nasłuchuje na porcie http://localhost:"+port+"/hello");
    //4B_b_i_c
  console.log("apka nasłuchuje na porcie http://localhost:"+port+"/form");
    //4B_d POSTMAN
  console.log("apka nasłuchuje na porcie http://localhost:"+port+"/jsondata");
})


/*
4B_d POSTMAN
{
http://localhost:8080/jsondata

"imie": "Kazik",
"nazwisko" : "Staszewski",
"warzywo" : "kalafior"
}
*/
