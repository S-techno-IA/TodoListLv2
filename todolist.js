const monInput = document.querySelector("input");
const AddBouton = document.querySelector("button");
const AddListe = document.querySelector("#AjtListe");


function creerTache(taskText) {
  //Ajout des éléments de la Liste
  const li = document.createElement("li");


  const texte1 = document.createElement('span');
  texte1.innerText = taskText + "";
  li.appendChild(texte1);

  texte1.addEventListener('click', function () {
    li.classList.toggle("completed");
  })


  const validateButton = document.createElement('button');
  validateButton.innerText = "Validate";
  validateButton.type = "button";
  li.appendChild(validateButton);

  validateButton.addEventListener('click', function () {
    li.classList.toggle("completed");
  });

  // créer bouton supprimer
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "supprimer";
  deleteButton.type = "button";
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', function () {
    li.remove();
  });

  return li;

};

function ajouterTache() {
  const taskText = monInput.value.trim();

  if (taskText === "") {
    return;
  }

  const li = creerTache(taskText);
  AddListe.appendChild(li);

  monInput.value = "";
  monInput.focus();
}

// Clic sur le bouton Ajouter
AddBouton.addEventListener('click', function (event) {
  event.preventDefault();
  ajouterTache();
});

// Touche Entrée dans le champ
monInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    ajouterTache();
  }


});
