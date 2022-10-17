const { Client, Authenticator } = require("minecraft-launcher-core");
const launcher = new Client()
const settings = require('../js/json/settings.json')

const combobox = document.getElementById('combobox')
const selectedItem = document.getElementById('combobox-selected-item')
const combobox_menu = document.getElementById('combobox-list')

document.body.addEventListener('click', (e) => {
    if (e.target.id === 'combobox-selected-item') {
        console.log('click')
        combobox_menu.classList.add('combobox-list--open')
    } else {
        combobox_menu.classList.remove('combobox-list--open')
    }

})
