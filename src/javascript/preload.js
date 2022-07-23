const path = require("path");
const settings = require('../json/settings.json')
const {
    Client,
    Authenticator
} = require("minecraft-launcher-core");
const launcher = new Client();

window.addEventListener(
    "DOMContentLoaded",
    () => {
        console.log("AA");
        watchInitGameButton();
    }
)

window.addEventListener(
    "DOMContentLoaded", () => {

    // Utilizar fetch para obtener la API online de las versiones de Minecraft      
    
    const fetch = require('node-fetch');

fetch(settings.client.versions_api_url, { method: "Get" })
    .then(res => res.json())
    .then((versionesjson) => {
        
const versiones = versionesjson.versions.map((v) => v.id)
versionesjson.versions.map((version) => {
    console.log(version)
})
for (var i = 0; i < versiones.length; i++) {
    const elemento = document.getElementById("versionMC")
    const newNode = document.createElement('option');
    newNode.appendChild(document.createTextNode(versiones[i]));
    elemento.appendChild(newNode);
        }
    });
    }
)
const watchInitGameButton = () => {
    document.getElementById("init-game").addEventListener(
        'click',
        () => {
            console.log("A");
            let nickname = document.getElementById("nickname").value;
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
                                number: "1.16.5",
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