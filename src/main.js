const remoteMain = require('@electron/remote/main')
remoteMain.initialize()

const { app, BrowserWindow, IpcMain, screen } = require("electron");
const ejse = require('ejs-electron')
const path = require("path");
const url = require("url");
const settings = require("./js/json/settings.json");
const ui = settings.launcher.ui;
const lang = require(`./assets/lang/${settings.launcher.ui.default_lang}.json`);  // Get lang file based on what languaje is set in settings.json


// check if the environment is dev
if(settings.launcher.debug.environment !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    });
}

const createWindow = () => {
    
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    let win = new BrowserWindow({
        width: Math.floor(width * 0.85),
        height: Math.floor(height * 0.9),
        title: ui.title,
        resizable: false,
        frame: false,
        icon: path.join(ui.assets_dir + ui.icon_name),
        webPreferences:{
            preload: path.join(__dirname, '/js/preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    remoteMain.enable(win.webContents)
    win.removeMenu();

    if (process.env.NODE != 'production') { win.openDevTools() }

    ejse.data('title', ui.title);
    ejse.data('srcIcon', path.join(__dirname, 'assets', ui.icon_name))
    ejse.data('bgId', path.join(__dirname, 'assets', 'backgrounds', `${ui.default_background}`)) // Get background based on what background is set in settings.json
    ejse.data('helloworld', lang.frontend.buttons.test_text) // Prueba
    
    win.loadURL(url.format({
        protocol: 'file:',
        pathname: path.join(__dirname, "views", 'app.ejs'),
    }))

    win.on('closed', () => { 
        win = null;
    })
};

app.whenReady().then(() => {
    createWindow()  
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});