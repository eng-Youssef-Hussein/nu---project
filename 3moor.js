const people = [
    { name: "Ahmed Salem", id: 24100 },
    { name: "Joussef Husien", id: 241001047 },
    { name: "Joliano Rafaat", id: 241001731 },
    { name: "Abdelaziz Tarek", id: 241001104 },
    { name: "Omar Ehab", id: 241000935 }
];

const container = document.getElementById('person-container');

function createPersonCard(person) {
    return `
        <div class="person">
            <h3>${person.name}</h3>
            <p>ID: ${person.id}</p>
        </div>
    `;
}

function renderPeople() {
    const personCards = people.map(createPersonCard).join('');
    container.innerHTML = personCards;
}

renderPeople();