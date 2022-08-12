const path = require("path");
const settings = require('./json/settings.json')
const axios = require('axios');
const { randomBytes } = require("crypto");
const debuglog = settings.launcher.debug.debug_log_prefix

window.addEventListener("DOMContentLoaded",() => {
    console.log(debuglog + 'Cargado el DOM');
    
    //getMinecraftVersions()
})

// Get minecraft versions
const getMinecraftVersions = () => { 
    console.log(debuglog + 'Obteniendo lista de versiones'); // Debug

    let cbVersions = document.getElementById('cbVersions') // Get select element
    
    // Get versions from api
    axios.get(settings.client.versions_api_url).then(res => {
        let versions = res.data.versions

        versions.forEach(v => { 

            // check if the type is release
            if(v.type === 'release') {
                
                // create option element
                cbVersions.innerHTML += `
                    <option value="${v.id}">${v.id}</option>
                `
            }
        })

        // remove the option with attribute "selected" 
        cbVersions.removeChild(cbVersions.querySelector('option[selected]'))
        
    }).cath(error => {
        console.log(error)
    })
}
