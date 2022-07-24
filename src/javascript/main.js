const {app, BrowserWindow} = require("electron");
const path = require("path");
const settings = require('../json/settings.json');
const ui = settings.launcher.ui;

const createWindow = () => {
    const screen = require("electron").screen;
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const bWindow = new BrowserWindow({
        width: Math.floor(width * 0.85),
        height: Math.floor(height * 0.9),
        icon: path.join(ui.assets_dir + ui.icon_name),
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