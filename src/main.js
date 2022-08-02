const { app, BrowserWindow, screen } = require("electron");
const ejse = require('ejs-electron')
const path = require("path");
const url = require("url");
const settings = require("./js/json/settings.json");
const ui = settings.launcher.ui;


// check if the environment is dev
if(settings.launcher.debug.environment !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    });
}

const createWindow = () => {
    
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const win = new BrowserWindow({
        width: Math.floor(width * 0.85),
        height: Math.floor(height * 0.9),
        resizable: false,
        icon: path.join(ui.assets_dir + ui.icon_name),
        webPreferences:{
            preload: path.join(__dirname, '/js/preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.removeMenu();

    if (process.env.NODE != 'production') { win.openDevTools() }

    ejse.data('title', ui.title);
    win.loadURL(url.format({
        protocol: 'file:',
        pathname: path.join(__dirname, "views", 'app.ejs'),
    }))
};

app.whenReady().then(() => {
    createWindow()  
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});