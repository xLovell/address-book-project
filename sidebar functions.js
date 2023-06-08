// side bar elements

function renderContacts(contacts) {
    contacts.forEach(renderContact)
}

function renderContact(contact) {
    const card = document.createElement('div')
    card.classList.add('contact-card')
    card.innerHTML = `
    <img id="contact-photo" src="${contact.photo}" alt=${contact.name} />
    <p1 id="name">${contact.name}</p1>
    `
    document.getElementById('contact-list').append(card)

    card.addEventListener('click', () => contactDetails(contact))
}

function contactDetails(contact) {
    const contactDetail = document.getElementById('contact-info')
    const detailImage = contactDetail.querySelector('.detail-image')

    detailImage.src = contact.photo
    detailImage.alt = contact.name

    contactDetail.querySelector('#name-display').textContent = contact.name
    contactDetail.querySelector('#phone-display').textContent = contact.phone
    contactDetail.querySelector('#email-display').textContent = contact.email
    contactDetail.querySelector('#address-display').textContent = `${contact.address}, ${contact.state}`

}
