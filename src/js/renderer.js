const {Client, Authenticator} = require("minecraft-launcher-core");
const launcher = new Client();

module.exports.renderer = () => {

document.getElementById("init-game").addEventListener(
    'click',
    () => {
        console.log("A");
        let nickname = document.getElementById("nickname").getAttribute();
        Authenticator.getAuth(
            nickname
        )
        .then(
            user => {
                launcher.launch(
                    {
                        clientPackage:null,
                        authorization:user,
                        root:"./minecraft",
                        version:{
                            number:"1.16.5",
                            type:"release"
                        },
                        memory:{
                            min:"1G",
                            max:"3G"
                        }
                    }
                )
            }
        )
        .catch(reason => console.log(reason))
    }
)

launcher.on(
    "debug",
    e => console.log(e)
);
launcher.on(
    "data",
    e => console.log(e)
);
}