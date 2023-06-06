// side bar elements

function renderContacts(contacts) {
    contacts.forEach(renderContact)
}

function renderContact(contact) {
    const card = document.createElement('div')
    card.classList.add(/* css class */)
    const cardId = `card-${contact.id}`
    card.innerHTML = `
    <p1 id="name">${contact.name}</p1>
    <img id="contact-photo" src="${contact.photo}" alt=${contact.name} />
    `
    // .append(card)

    // card.addEventListener('click', () => contactDetails(contact))
}

