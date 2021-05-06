let entries = []
const entriesWrapper = document.querySelector('#entries');

function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);

    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry);
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem);
}

function handleSubmit(event) {
    event.preventDefault() // To stop reloading the browser
    const entry = Number(document.querySelector('#entry').value);
    if (!entry) return;
    document.querySelector('form').reset();
    entries.push(entry);
    addNewEntry(entry);
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);
