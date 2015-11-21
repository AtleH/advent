var imageFolder = 'https://googledrive.com/host/0B3UhlcQhxeAkZ05OVldlbjBkNTQ/';

$(document).ready(function () {
    var day = getQueryVariable('day');
    $('#caption').text('Luke ' + day);
    var imageSource = imageFolder + + String(day) + 'des.jpg';
    console.log(imageSource);
    $('#image').attr('src', imageSource);
    $('#q1').text(content[day-1].q1);
    $('#q2').text(content[day-1].q2);
    $('#q3').text(content[day-1].q3);
});


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

var content = [
    { // 1
        q1: 'Hva heter julenissen til fornavn?',
        q2: 'Hva gjør julenissen når han er i Syden?',
        q3: 'Hvilken utdanning har julenissen?',
        img: 'images/Julebilde.jpg'
    },
    { // 2
        q1: 'Er det snø om vinteren?',
        q2: 'Hvor mye snø går det på ett kilo?',
        q3: 'Hva skjer når snøen faller på stengrunn?',
        img: 'images/Julebilde.jpg'
    }
];