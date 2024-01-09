// Simulation de données de billets
const ticketsData = [
    { destination: 'Paris', date: '2023-12-31', price: 200 },
    { destination: 'New York', date: '2024-01-15', price: 500 },
    // Ajoutez plus de données selon vos besoins
];

// Fonction pour afficher une alerte
function showAlert() {
    alert("Ceci est une alerte !");
}

// Fonction pour écrire dans le document
function writeToDocument() {
    document.write("Ceci est écrit dans le document.");
}

// Fonction pour demander à l'utilisateur son nom et l'afficher
function promptAndDisplay() {
    const userName = prompt("Quel est votre nom ?");
    alert(`Bienvenue, ${userName} !`);
}

// Fonction pour rechercher les billets
function searchTickets() {
    // Récupérer les valeurs du formulaire
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    // Filtrer les billets en fonction de la destination et de la date
    const filteredTickets = ticketsData.filter(ticket =>
        ticket.destination.toLowerCase().includes(destination.toLowerCase()) &&
        ticket.date === date
    );

    // Afficher les résultats
    displayResults(filteredTickets);
}

// Fonction pour afficher les résultats de la recherche
function displayResults(tickets) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (tickets.length === 0) {
        resultsContainer.innerHTML = '<p>Aucun résultat trouvé.</p>';
        return;
    }

    tickets.forEach(ticket => {
        const ticketCard = document.createElement('div');
        ticketCard.classList.add('ticket-card');
        ticketCard.innerHTML = `
            <h3>${ticket.destination}</h3>
            <p>Date: ${ticket.date}</p>
            <p>Prix: ${ticket.price} $</p>
        `;
        resultsContainer.appendChild(ticketCard);
    });
}

// Événement à la fin du chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    // Appeler la fonction hostProject lorsque la page est chargée
    hostProject();

    // Intégrer des événements supplémentaires selon vos besoins
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function (event) {
        // Empêcher le rechargement de la page lors de la soumission du formulaire
        event.preventDefault();
        // Appeler la fonction searchTickets lors de la soumission du formulaire
        searchTickets();
    });
});