function loadcourses(){
var basiccourse = [{
         "cellbegin": "",
         "name": "Yrittäjyys",
         "points": 3,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Työelämän englanti",
         "points": 4,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Matematiikka 1",
         "points": 5,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Fysiikan perusteet",
         "points": 3,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Digitaalitekniikka",
         "points": 3,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Tietokannat",
         "points": 5,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Työelämän ruotsi",
         "points": 4,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Matematiikka 2",
         "points": 5,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Fysiikka 1",
         "points": 3,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Kyberturvallisuus",
         "points": 4,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Tietorakenteet ja algoritmit",
         "points": 4,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Fysiikka 2",
         "points": 3,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Fysiikan laboraatiot",
         "points": 3,
         "cellend": ""
         }];
    var basicITcourse = [{
         "cellbegin": "",
         "name": "Osaajana kehittyminen",
         "points": 5,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "ICT-valmiudet",
         "points": 3,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "JAMK innovaatioviikko",
         "points": 3,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Työelämän viestintä",
         "points": 3,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Johdatus internet teknologioihin",
         "points": 4,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Ohjelmoinnin perusteet",
         "points": 5,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Käyttöjärjestelmät",
         "points": 6,
         "cellend": ""
         }, {
         "cellbegin": "",
         "name": "Web tekniikat",
         "points": 4,
         "cellend": ""
         }]; 
          
        
         for (var i=0; i < basiccourse.length; i++) {     
         var bsc = document.createElement("button");
         bsc.innerHTML = basiccourse[i].name + " " + basiccourse[i].points + "<br>";
        var element = document.getElementById("basic");
        element.appendChild(bsc);
         }  
         
        for (var j=0; i < basicITcourse.length; j++) {     
         var bscit = document.createElement("button");
         bscit.innerHTML =basicITcourse[j].name + " " + basicITcourse[j].points;
        var elementit = document.getElementById("basic-it");
        elementit.appendChild(bscit);
         }
        basiccourse = [];
         basicITcourse = [];
}

         