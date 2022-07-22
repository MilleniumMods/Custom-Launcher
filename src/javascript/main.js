const {app, BrowserWindow} = require("electron");
const path = require("path");

const createWindow = () => {
    const bWindow = new BrowserWindow({
        with: 800,
        height: 600,
        webPreferences:{
            preload: path.join(app.getAppPath(), "src/javascript/preload.js")
        }
    });
    bWindow.loadFile('src/html/index.html')
};

app.whenReady().then(
    () => createWindow()
);

app.on(
    'window-all-closed',
    () => {
        if (process.platform !== 'darwin') app.quit()
    }
);