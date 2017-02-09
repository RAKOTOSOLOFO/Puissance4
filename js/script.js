var grille = [["","","","","","",""],
              ["","","","","","",""],
              ["","","","","","",""],
              ["","","","","","",""],
              ["","","","","","",""],
              ["","","","","","",""],
              ["","","","","","",""],
            ];

var table = document.getElementById("grid");

for (var i = 0; i < grille.length; i++) {
    var ligne = document.createElement('tr');
    table.appendChild(ligne);
    for (var j = 0; j < grille[i].length; j++) {
        var colonne = document.createElement('td');
        var monId = "cell"+i+j;
        colonne.id = monId;
        ligne.appendChild(colonne);
    }
}
