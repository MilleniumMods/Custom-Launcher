const { IpcRenderer, shell, webFrame } = require('electron');
const remote = require('@electron/remote');

// window onload preload
window.onload = () => {
    let preloader = document.getElementById('preloader');

    preloader.style.visibility = 'hidden';
    preloader.style.opacity = '0';
}

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

// Open external links in default browser
document.addEventListener('click', (e) => {   
    if (e.target.tagName === 'A' && e.target.href.startsWith('http')) {
        e.preventDefault();
        shell.openExternal(e.target.href);
    }
})
