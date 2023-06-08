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


function renderContacts() {
    document.getElementById("contact-list").innerHTML = ""
    contactList.forEach(renderContact)
}

function renderContact(contact) {
    const card = document.createElement('div')
    card.classList.add('contact-card')
    card.innerHTML = `
    <img id="contact-photo" src="${contact.photo}" alt=${contact.name}/>
    <p1 id="name">${contact.name}</p1>
    `
    document.getElementById('contact-list').append(card)

    card.addEventListener('click', () => contactDetails(contact))
}

function contactDetails(contact) {
    const contactDetail = document.getElementById('contact-info')
    const detailImage = contactDetail.querySelector('.detail-image')
    
    detailImage.src = contact.photo
    detailImage.alt = `${contact.name}`
    
    contactDetail.querySelector('#name-display').textContent = contact.name
    contactDetail.querySelector('#phone-display').textContent = contact.phone
    contactDetail.querySelector('#email-display').textContent = contact.email
    contactDetail.querySelector('#address-display').textContent = `${contact.address}, ${contact.state}`
    
    // document.getElementById('delete').removeEventListener('click', (e) => deleteContact(e, contact))
    // document.getElementById('delete').addEventListener('click', (e) => deleteContact(e, contact))
}



// function deleteContact(event, contact)
=======
document.getElementById("new-contact-form").addEventListener("submit", addNewContact)

function addNewContact(event) {
    event.preventDefault()
    const form = event.target

    const newContact = {
        name: form.name.value,
        photo: form.photo.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value,
        state: form.state.value,
    }

    fetch(API, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        method:"POST",
        body: JSON.stringify(newContact),
    })
    .then(res => res.json())
    .then(json => {
        contactList.push(json)
        renderContacts()
    })

    form.reset()
}

