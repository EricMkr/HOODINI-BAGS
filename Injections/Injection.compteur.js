/* Code JavaScript pour compter les clics sur un bouton ou un lien
Identifie l'élément sur lequel tu veux compter les clics. Tu peux le sélectionner par son id, sa class, ou tout autre sélecteur CSS.

Ajoute l'écouteur de clics pour incrémenter le compteur chaque fois que l'élément est cliqué. */

// Sélectionne l'élément. Change `#bouton` par le sélecteur de ton élément (id, class, etc.)
const element = document.querySelector('#bouton');  // Par exemple, un id nommé 'bouton'

// Initialise le compteur
let clickCount = 0;

// Vérifie que l'élément existe sur la page
if (element) {
    // Ajoute un écouteur d'événement de clic sur l'élément
    element.addEventListener('click', function() {
        clickCount++;  // Incrémente le compteur
        console.log(`Nombre de clics : ${clickCount}`);
        
        // Optionnel : Affiche le compteur sur la page
        document.getElementById('compteur').textContent = `Nombre de clics : ${clickCount}`;
    });
} else {
    console.log("L'élément spécifié n'a pas été trouvé.");
}

/* Explication du code :
querySelector('#bouton') : Sélectionne l’élément avec l’id spécifié. Remplace #bouton par le sélecteur qui correspond à ton élément. Par exemple, pour un lien avec une classe .monLien, tu utiliserais document.querySelector('.monLien').
clickCount++ : Incrémente le compteur chaque fois que l’élément est cliqué.
console.log : Affiche le nombre de clics dans la console. Tu peux aussi afficher le nombre directement sur la page si tu as un élément dédié, en décommentant le code sous console.log.
Si tu veux que le compteur soit persistant (ne pas se réinitialiser après un rechargement de la page), tu pourrais le stocker dans le Local Storage du navigateur. */