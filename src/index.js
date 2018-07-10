const electron = require('electron');
const { remote, ipcRenderer } = require('electron');
const { Menu, MenuItem, app } = remote;
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
const shell = require('electron').shell;
const Store = require('electron-store');
const settings = new Store();

//////////////////// Contextual Menu ////////////////////
const ctxMenu = new Menu();
ctxMenu.append(new MenuItem({ role: 'minimize' }));
ctxMenu.append(new MenuItem(
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click() { shell.openExternal('http://xiaofan.azurewebsites.net/') }
            }
        ]
    }));
ctxMenu.append(new MenuItem({ type: 'separator' }))
ctxMenu.append(new MenuItem(
    {
        role: 'close',
        accelerator: 'CmdOrCtrl+W'
    }
));

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    ctxMenu.popup({ window: remote.getCurrentWindow() });
}, false);

var currTime = setInterval(function () {
    document.getElementById('clock').innerHTML = (new Date()).toLocaleTimeString('en-US', { hour12: false });
}, 200);

//////////////////// Settings ////////////////////
const setBtn = document.getElementById('setBtn');

setBtn.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'settings.html');

    let win = new BrowserWindow({
        frame: false,
        alwaysOnTop: true,
        width: 400,
        height: 300,
        backgroundColor: '#000000'
    });

    win.on('close', function () { win = null });
    win.loadURL(modalPath);
    win.show();
})

//////////////////// Close button ////////////////////
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function (event) {
    var window = remote.getCurrentWindow();
    window.close();
})

//////////////////// Settings ////////////////////
//////////////////// Colours ////////////////////
ipcRenderer.on('newColour', function (event, arg) {
    if (arg !== undefined || arg !== null || arg !== '') {
        console.log(arg);
        settings.set('color', arg);

        ipcRenderer.send('settings-colour', arg);
    }

    console.log("settings.get is " + settings.get('color', 'Pink'))
    if (settings.get('color') == 'Pink') {
        $("#clock").css({
            textShadow: '0 0 5px #fff, 0 0 15px #ff0080, 0 0 20px #ff0080, 0 0 40px #ff0080'
        });
        $("#closeBtn, #setBtn").css({
            textShadow: '0 0 5px #fff, 0 0 13px #ff0080'
        });
        $('#closeBtn, #setBtn').hover(function () {
            $(this).css('color', '#ff9ece')
            $(this).css('textShadow', "none");
        }, function () {
            $(this).css('color', '#fff')
            $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #ff0080");
        });
    } else if (settings.get('color') == 'Blue') {
        $("#clock").css({
            textShadow: '0 0 5px #fff, 0 0 15px #0198E1, 0 0 20px #0198E1, 0 0 40px #0198E1'
        });
        $("#closeBtn, #setBtn").css({
            textShadow: '0 0 5px #fff, 0 0 13px #0198E1'
        });
        $('#closeBtn, #setBtn').hover(function () {
            $(this).css('color', '#1ad1ff')
            $(this).css('textShadow', "none");
        }, function () {
            $(this).css('color', '#fff')
            $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #0198E1");
        });
    } else if (settings.get('color') == 'Green') {
        $("#clock").css({
            textShadow: '0 0 5px #fff, 0 0 15px #00FF00, 0 0 20px #00FF00, 0 0 40px #00FF00'
        });
        $("#closeBtn, #setBtn").css({
            textShadow: '0 0 5px #fff, 0 0 13px #00FF00'
        });
        $('#closeBtn, #setBtn').hover(function () {
            console.log("hover")
            $(this).css('color', '#00FF00')
            $(this).css('textShadow', "none");
        }, function () {
            $(this).css('color', '#fff')
            $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #00FF00");
        });
    } else if (settings.get('color') == 'Yellow') {
        $("#clock").css({
            textShadow: '0 0 5px #fff, 0 0 15px #Faed27, 0 0 20px #Faed27, 0 0 40px #Faed27'
        });
        $("#closeBtn, #setBtn").css({
            textShadow: '0 0 5px #fff, 0 0 13px #Faed27'
        });
        $('#closeBtn, #setBtn').hover(function () {
            console.log("hover")
            $(this).css('color', '#Faed27')
            $(this).css('textShadow', "none");
        }, function () {
            $(this).css('color', '#fff')
            $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #Faed27");
        });
    } else if (settings.get('color') == 'Violet') {
        $("#clock").css({
            textShadow: '0 0 5px #fff, 0 0 15px #9400D3, 0 0 20px #9400D3, 0 0 40px #9400D3'
        });
        $("#closeBtn, #setBtn").css({
            textShadow: '0 0 5px #fff, 0 0 13px #9400D3'
        });
        $('#closeBtn, #setBtn').hover(function () {
            console.log("hover")
            $(this).css('color', '#cc66ff')
            $(this).css('textShadow', "none");
        }, function () {
            $(this).css('color', '#fff')
            $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #9400D3");
        });
    }
    console.log(settings.store);
})



if (settings.get('color') == 'Pink') {
    $("#clock").css({
        textShadow: '0 0 5px #fff, 0 0 15px #ff0080, 0 0 20px #ff0080, 0 0 40px #ff0080'
    });
    $("#closeBtn, #setBtn").css({
        textShadow: '0 0 5px #fff, 0 0 13px #ff0080'
    });
    $('#closeBtn, #setBtn').hover(function () {
        $(this).css('color', '#ff9ece')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #ff0080");
    });
} else if (settings.get('color') == 'Blue') {
    $("#clock").css({
        textShadow: '0 0 5px #fff, 0 0 15px #0198E1, 0 0 20px #0198E1, 0 0 40px #0198E1'
    });
    $("#closeBtn, #setBtn").css({
        textShadow: '0 0 5px #fff, 0 0 13px #0198E1'
    });
    $('#closeBtn, #setBtn').hover(function () {
        $(this).css('color', '#1ad1ff')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #0198E1");
    });
} else if (settings.get('color') == 'Green') {
    $("#clock").css({
        textShadow: '0 0 5px #fff, 0 0 15px #00FF00, 0 0 20px #00FF00, 0 0 40px #00FF00'
    });
    $("#closeBtn, #setBtn").css({
        textShadow: '0 0 5px #fff, 0 0 13px #00FF00'
    });
    $('#closeBtn, #setBtn').hover(function () {
        console.log("hover")
        $(this).css('color', '#00FF00')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #00FF00");
    });
} else if (settings.get('color') == 'Yellow') {
    $("#clock").css({
        textShadow: '0 0 5px #fff, 0 0 15px #Faed27, 0 0 20px #Faed27, 0 0 40px #Faed27'
    });
    $("#closeBtn, #setBtn").css({
        textShadow: '0 0 5px #fff, 0 0 13px #Faed27'
    });
    $('#closeBtn, #setBtn').hover(function () {
        console.log("hover")
        $(this).css('color', '#Faed27')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #Faed27");
    });
} else if (settings.get('color') == 'Violet') {
    $("#clock").css({
        textShadow: '0 0 5px #fff, 0 0 15px #9400D3, 0 0 20px #9400D3, 0 0 40px #9400D3'
    });
    $("#closeBtn, #setBtn").css({
        textShadow: '0 0 5px #fff, 0 0 13px #9400D3'
    });
    $('#closeBtn, #setBtn').hover(function () {
        console.log("hover")
        $(this).css('color', '#cc66ff')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #9400D3");
    });
}

//////////////////// SETTINGS - TIME ////////////////////
ipcRenderer.on('time12', function (event, arg) {
    if (arg !== undefined || arg !== null || arg !== '') {
        console.log(arg);
        settings.set('time-format', arg);
    }
    console.log(settings.store);
    if (settings.get('time-format') == '12-hr') {
        clearInterval(currTime);
        currTime = setInterval(function () {
            console.log("hello");
            document.getElementById('clock').innerHTML = (new Date()).toLocaleTimeString();
        }, 100);
    }
})

ipcRenderer.on('time24', function (event, arg) {
    if (arg !== undefined || arg !== null || arg !== '') {
        console.log(arg);
        settings.set('time-format', arg);
    }
    console.log(settings.store);
    if (settings.get('time-format') == '24-hr') {
        clearInterval(currTime);
        currTime = setInterval(function () {
            document.getElementById('clock').innerHTML = (new Date()).toLocaleTimeString('en-US', { hour12: false });
        }, 100);
    }
})

if (settings.get('time-format') == '12-hr') {
    clearInterval(currTime);
    currTime = setInterval(function () {
        console.log("hello");
        document.getElementById('clock').innerHTML = (new Date()).toLocaleTimeString();
    }, 100);
} else if (settings.get('time-format') == '24-hr') {
    clearInterval(currTime);
    currTime = setInterval(function () {
        document.getElementById('clock').innerHTML = (new Date()).toLocaleTimeString('en-US', { hour12: false });
    }, 100);
}

$('#setBtn').on({
    click: function () {
        $(this).addClass('no-hover');
    }
})

