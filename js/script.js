var grille = [["","","","","","",""],
              ["","","","","","",""],
              ["","","","","","",""],
              ["","","","","","",""],
              ["","","","","","",""],
              ["","","","","","",""],
            ];

var table = document.getElementById("grid");
var dzone = document.getElementById("dropzone")
var jetonJaune = document.createElement('jetonJaune');
var jetonRouge = document.createElement('jetonRouge');

for (var i = 0; i < 7; i++) {
var zoneDeDrop = document.createElement('button');
dzone.appendChild(zoneDeDrop);
var boutonId = "bouton"+i;
zoneDeDrop.id = boutonId;
}

for (var i = 0; i < grille.length; i++) {
    var ligne = document.createElement('tr');
    table.appendChild(ligne);
    for (var j = 0; j < grille[i].length; j++) {
        var colonne = document.createElement('td');
        var monId = "cell"+i+j;
        colonne.id = monId;
        ligne.appendChild(colonne);
    }

button.addEventListener("click",function(){
    if(this)

    


// si la i+1 = "vide" alors jetonPosition =  i+1
// sinon jeton = ligne
}
