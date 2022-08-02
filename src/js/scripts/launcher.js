const { Client, Authenticator } = require("minecraft-launcher-core");
const launcher = new Client()
const settings = require('../js/json/settings.json')

const inputNickname = document.getElementById('Nickname')

document.getElementById('btnLaunch').addEventListener('click', (e) => { 
    let nick = document.getElementById('Nickname').value
    let version = document.getElementById('cbVersions').value

    e.target.classList.add('btn-danger')
    e.target.classList.add('disabled')
    e.target.innerHTML = 'Launching...'

    if(nick.length > 0) { 

        Authenticator.getAuth(nick).then(user => {
            launcher.launch({
                clientPackage: null,
                authorization: user,
                root: './minecraft',
                version: {
                    number: version,
                    type: "release"
                },
                memory: {
                    min: "1G",
                    max: "3G"
                }
            })
        }).catch(error => { 
            console.log(error)
        })
    }
})

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