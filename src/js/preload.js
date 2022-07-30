const path = require("path");
const settings = require('./json/settings.json')
const debuglog = settings.launcher.debug.debug_log_prefix

window.addEventListener("DOMContentLoaded",() => {
    console.log(debuglog + 'Cargado el DOM');
})