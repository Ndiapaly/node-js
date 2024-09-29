const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("Fichier creer et sauvegarder!");
});
// The fs.writeFile() method is used to write data to a file.
// la methode fs.writeFile() est utilisée pour écrire des données dans un fichier.
