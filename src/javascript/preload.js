const path = require("path");
const settings = require('../json/settings.json')
const debuglog = settings.launcher.debug.debug_log_prefix
const {
    Client,
    Authenticator
} = require("minecraft-launcher-core");
const launcher = new Client();

window.addEventListener(
    "DOMContentLoaded",
    () => {
        console.log(debuglog + 'Cargado el DOM');
        watchInitGameButton();
        watchSelectedVersion();
    }
)

// Lista de versiones
window.addEventListener(
    "DOMContentLoaded", () => {

    // Utilizar fetch para obtener la API online de las versiones de Minecraft      
    
    const fetch = require('node-fetch');

fetch(settings.client.versions_api_url, { method: "Get" })
    .then(res => res.json())
    .then((versionesjson) => {
        
const versiones = versionesjson.versions.map((v) => v.id)
/*
versionesjson.versions.map((version) => {
    console.log(version)
})
*/
for (var i = 0; i < versiones.length; i++) {
    const elemento = document.getElementById("versionMC")
    const newNode = document.createElement('option');
    newNode.appendChild(document.createTextNode(versiones[i]));
    elemento.appendChild(newNode);
        }
    });
    }
)

var chosenVersion
const watchSelectedVersion = () => {
    document.getElementById("versionMC").addEventListener(
        'click',
        () => {
            if(!document.getElementById("versionMC").value.includes("Selecciona")) {
            chosenVersion = document.getElementById("versionMC").value;
            console.log(debuglog + 'Seleccionada la version: ' + chosenVersion)
            }
        }
    )
}


const watchInitGameButton = () => {
    document.getElementById("init-game").addEventListener(
        'click',
        () => {
            let nickname = document.getElementById("nickname").value;
            
            if(nickname == undefined || nickname.includes(" ")) {
                console.log(debuglog + 'El Nickname no está definido.')
            } else {
                console.log(debuglog + 'El Nickname es: ' + nickname + ', iniciando Minecraft')
            Authenticator.getAuth(
                    nickname
                )
                .then(
                    user => {
                        launcher.launch({
                            clientPackage: null,
                            authorization: user,
                            root: "./minecraft",
                            version: {
                                number: `${chosenVersion}`,
                                type: "release"
                            },
                            memory: {
                                min: "1G",
                                max: "3G"
                            }
                        })
                    }
                )
                .catch((reason) => console.log(reason))
        }
    }
    )

    launcher.on(
        "debug",
        (e) => console.log(e)
    );
    launcher.on(
        "data",
        (e) => console.log(e)
    );
    launcher.addListener(
        "arguments",
        (args) => console.log(args)
    );
    launcher.addListener(
        "progress",
        (progress) => console.log(progress)
    );
}