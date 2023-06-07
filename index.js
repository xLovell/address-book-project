const API = "http://localhost:3000/contacts"

let contactList = []

let addContact = false

const addBtn = document.getElementById("new-contact-btn");
const contactFormContainer = document.getElementById("add-contact-form");
addBtn.addEventListener("click", () => {
    addContact = !addContact;
    if (addContact) {
        contactFormContainer.style.display = "block";
    } else {
        contactFormContainer.style.display = "none";
    }
});


fetch(API)
    .then(res => res.json())
    .then(json => {
        contactList = json
        renderContacts()
    })


function renderContacts(contacts) {
    contactList.forEach(renderContact)
}

function renderContact(contact) {
    const card = document.createElement('div')
    card.classList.add('contact-card')
    card.innerHTML = `
    <p1 id="name">${contact.name}</p1>
    <img id="contact-photo" src="${contact.photo}" alt=${contact.name} />
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
