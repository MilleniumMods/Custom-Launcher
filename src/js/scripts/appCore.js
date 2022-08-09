const { IpcRenderer, shell, webFrame } = require('electron');
const remote = require('@electron/remote');

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {

        document.getElementById('frameBtn_close').addEventListener('click', () => {
            const windows = remote.getCurrentWindow();
            windows.close();
        })
        document.getElementById('frameBtn_minimize').addEventListener('click', () => {
            const windows = remote.getCurrentWindow();
            windows.minimize();
        })
    }
})
