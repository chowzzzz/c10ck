const electron = require('electron');
const { remote, ipcRenderer } = require('electron');

const Store = require('electron-store');
const settings = new Store();

//////////////////// Close button ////////////////////
const closeBtn = document.getElementById('closeBtn2');

closeBtn.addEventListener('click', function (event) {
    var window = remote.getCurrentWindow();
    window.close();
});

//////////////////// Settings ////////////////////
//////////////////// Colours ////////////////////
const pink = document.getElementById('pink');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const violet = document.getElementById('violet');

pink.addEventListener('click', function() {
    console.log("pink");    
    settings.set('color', "Pink");

    ipcRenderer.send('update-colour', "Pink");

    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #ff0080, 0 0 20px #ff0080, 0 0 40px #ff0080'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#ff9ece')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff');
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #ff0080");
    });
    
    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })
    $('#pink').css({
        textShadow: "0 0 5px #fff, 0 0 15px #ff0080, 0 0 20px #ff0080"
    })

    $('#am, #b').hover(function() {
        $(this).css('color', '#ff9ece');
    }, function() {
        $(this).css('color', '#fff');
    });
});
blue.addEventListener('click', function() {
    console.log("blue");
    settings.set('color', "Blue");
    ipcRenderer.send('update-colour', "Blue");

    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #0198E1, 0 0 20px #0198E1, 0 0 40px #0198E1'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#1ad1ff')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #0198E1");
    });
    
    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })
    $('#blue').css({
        textShadow: "0 0 5px #fff, 0 0 15px #0198E1, 0 0 20px #0198E1, 0 0 40px #0198E1"
    })

    $('#am, #b').hover(function() {
        $(this).css('color', '#1ad1ff');
    }, function() {
        $(this).css('color', '#fff');
    });
    
});
green.addEventListener('click', function() {
    console.log("green");
    settings.set('color', "Green");
    ipcRenderer.send('update-colour', "Green");
    
    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #00FF00, 0 0 20px #00FF00, 0 0 40px #00FF00'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#00FF00')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #00FF00");
    });
    
    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })
    $('#green').css({
        textShadow: "0 0 5px #fff, 0 0 15px #00FF00, 0 0 20px #00FF00"
    })
    
    $('#a, #b').hover(function() {
        $(this).css('color', '#00FF00');
    }, function() {
        $(this).css('color', '#fff');
    });

});
yellow.addEventListener('click', function() {
    console.log("yellow");
    settings.set('color', "Yellow");
    ipcRenderer.send('update-colour', "Yellow");
    
    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #Faed27, 0 0 20px #Faed27, 0 0 40px #Faed27'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#Faed27')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #Faed27");
    });
    
    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })
    $('#yellow').css({
        textShadow: "0 0 5px #fff, 0 0 15px #Faed27, 0 0 20px #Faed27"
    })
    
    $('#a, #b').hover(function() {
        $(this).css('color', '#Faed27');
    }, function() {
        $(this).css('color', '#fff');
    });
});
violet.addEventListener('click', function() {
    console.log("violet");
    settings.set('color', "Violet");
    ipcRenderer.send('update-colour', "Violet");
    
    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #9400D3, 0 0 20px #9400D3, 0 0 40px #9400D3'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#cc66ff')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #9400D3");
    });
    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })

    $('#violet').css({
        textShadow: "0 0 5px #fff, 0 0 15px #9400D3, 0 0 20px #9400D3"
    })
    
    $('#a, #b').hover(function() {
        $(this).css('color', '#cc66ff');
    }, function() {
        $(this).css('color', '#fff');
    });
});


if (settings.get('color') == 'Pink') {
    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #ff0080, 0 0 20px #ff0080, 0 0 40px #ff0080'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#ff9ece00FF00')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #ff0080");
    });
    
    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })
    $('#pink').css({
        textShadow: "0 0 5px #fff, 0 0 15px #ff0080, 0 0 20px #ff0080"
    })
    
    $('#a, #b').hover(function() {
        $(this).css('color', '#ff9ece');
    }, function() {
        $(this).css('color', '#fff');
    });

} else if (settings.get('color') == 'Blue') {
    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #0198E1, 0 0 20px #0198E1, 0 0 40px #0198E1'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#1ad1ff')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #0198E1");
    });
    
    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })
    $('#blue').css({
        textShadow: "0 0 5px #fff, 0 0 15px #0198E1, 0 0 20px #0198E1, 0 0 40px #0198E1"
    })
    
    $('#a, #b').hover(function() {
        $(this).css('color', '#1ad1ff');
    }, function() {
        $(this).css('color', '#fff');
    });
} else if (settings.get('color') == 'Green') {
    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #00FF00, 0 0 20px #00FF00, 0 0 40px #00FF00'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#00FF00')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #00FF00");
    });
    
    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })
    $('#green').css({
        textShadow: "0 0 5px #fff, 0 0 15px #00FF00, 0 0 20px #00FF00"
    })
    
    $('#a, #b').hover(function() {
        $(this).css('color', '#00FF00');
    }, function() {
        $(this).css('color', '#fff');
    });
} else if (settings.get('color') == 'Yellow') {
    
    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #Faed27, 0 0 20px #Faed27, 0 0 40px #Faed27'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#Faed27')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #Faed27");
    });
    
    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })
    $('#yellow').css({
        textShadow: "0 0 5px #fff, 0 0 15px #Faed27, 0 0 20px #Faed27"
    })
    
    $('#a, #b').hover(function() {
        $(this).css('color', '#Faed27');
    }, function() {
        $(this).css('color', '#fff');
    });
} else if (settings.get('color') == 'Violet') {
    $("#closeBtn2").css({
        textShadow: '0 0 5px #fff, 0 0 15px #9400D3, 0 0 20px #9400D3, 0 0 40px #9400D3'
    });

    $('#closeBtn2').hover(function () {
        $(this).css('color', '#cc66ff')
        $(this).css('textShadow', "none");
    }, function () {
        $(this).css('color', '#fff')
        $(this).css('textShadow', "0 0 5px #fff, 0 0 13px #9400D3");
    });

    $('#pink, #blue, #green, #yellow, #violet').css({
        textShadow: 'none'
    })
    
    $('#violet').css({
        textShadow: "0 0 5px #fff, 0 0 15px #9400D3, 0 0 20px #9400D3"
    })
    
    $('#a, #b').hover(function() {
        $(this).css('color', '#cc66ff');
    }, function() {
        $(this).css('color', '#fff');
    });
}

//////////////////// Settings ////////////////////
//////////////////// Time Format ////////////////////
const a = document.getElementById('a');
const b = document.getElementById('b');

a.addEventListener('click', function() {
    console.log("12");
    ipcRenderer.send('change-time-12', '12-hr');
})

b.addEventListener('click', function() {
    console.log("24");
    ipcRenderer.send('change-time-24', '24-hr');
})

//////////////////// auto launch ////////////////////
function autoLaunch() {
    const selectedValue = $("input[name=start]:checked").val();

    if (selectedValue == "yes") {
        settings.set('launch', 'yes');
        ipcRenderer.send('auto-launch', 'yes');
    } else if (selectedValue == "no") {
        settings.set('launch', 'no');
        ipcRenderer.send('auto-launch', 'no');
    }
}



if (settings.get('launch') == "yes") {
    $("#y").prop("checked", true);

} else if (settings.get('launch') == "no") {
    $("#n").prop("checked", true);

}

console.log(settings.store);
