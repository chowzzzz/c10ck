const electron = require('electron');
const { app, BrowserWindow, ipcMain } = require('electron');
require('electron-reload')(__dirname);
const AutoLaunch = require('auto-launch');

let win

function createWindow() {
    win = new BrowserWindow({
        width: 200,
        height: 90,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        resizable: false
    })

    win.loadFile('src/index.html')

    // win.webContents.openDevTools()

    // win.setIgnoreMouseEvents(true);

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

//////////////////// AUTO-LAUNCH ////////////////////
const auto = new AutoLaunch({
    name: 'c10ck'
});

auto.enable();
//auto.disable();

auto.isEnabled()
    .then(function (isEnabled) {
        if (isEnabled) {
            return;
        console.log("yas");
        }
        auto.enable();
    })
    .catch(function (err) {
        // handle error
    });

//////////////////// SETTINGS - COLOURS ////////////////////
ipcMain.on('update-colour', function (event, arg) {
    win.webContents.send('newColour', arg);
});

ipcMain.on('settings-colour', function (event, arg) {
    win.webContents.send('changeColour', arg);
});

//////////////////// SETTINGS - TIME ////////////////////
ipcMain.on('change-time-12', function (event, arg) {
    win.webContents.send('time12', arg);
})

ipcMain.on('change-time-24', function (event, arg) {
    win.webContents.send('time24', arg);
})

//////////////////// SETTINGS - LAUNCH ////////////////////
ipcMain.on('auto-launch', function (event, arg) {
    if (arg == "yes") {
        console.log("hai");
        auto.enable();
    } else if (arg == "no") {
        console.log("ani");
        auto.disable();
    }
    /* win.webContents.send('autolaunch', arg); */
})