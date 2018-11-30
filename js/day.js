var imageFolder = 'img/';

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
        q1: 'Ingeborg 15 år – 2007. Siste år med tradisjonell sykkeltur. Hvor gikk turen?',
        q2: 'Stor familiebegivenhet i mai – hvilken?',
        q3: 'Hva er en velosiped?'
    },
    { // 2
        q1: 'Fortsatt 2007. Utenlandstur til sørlige strøk – både hovedstad, biltur og badeferie. Hvor reiste vi?',
        q2: 'Avslutningen på hyttepåska var litt spesiell i 2007 – hvordan?',
        q3: 'Hvor langt er et maratonløp?'
    },
    { // 3
        q1: '2008. Hvor ble dette bildet tatt? Tips: Ferietur',
        q2: 'Sykkelturen 2008 ble til en dagstur til fots. Hvor gikk vi?',
        q3: 'Fra hvilken by er handlingen i Anne Franks dagbok?'
    },
    { // 4
        q1: 'Fortsatt 2008. Fjellturen ble lang – med både fint vær og dårlig vær, men hvor?',
        q2: 'Sannelig ble det utenlandstur i år også, men hvor? Tips: Ingeborg feiret 16 årsdagen på ferieturen.',
        q3: 'Hvilken planet blir kalt den røde planeten?'
    },
    { // 5
        q1: '2009 - Fia – Sweet painted Lady: Når var hun fødd?',
        q2: 'Enn Demi?',
        q3: 'Hva kalles korsang uten akkompagnement?'
    },
    { // 6
        q1: 'Fortsatt 2009: Hvor i all verden er dette bildet tatt?',
        q2: 'Det ble fjelltur i år også – men vi endret rute underveis på grunn av været. Hvor gikk turen?',
        q3: 'Norgesferie ble det også – langs kysten fra Hafslo. Vi besøkte fire av de seks byene i Møre og Romsdal. Hva heter de og hva heter den siste?'
    },
    { // 7
        q1: '2010: Et avslutta kapittel for Anne. Hvor/når er dette bildet tatt?',
        q2: 'Atle og Ingrid hadde 20 års bryllupsdag. Men hva kalles det?',
        q3: 'Hva kalles 30 års bryllupsdag?'
    },
    { // 8
        q1: 'Fortsatt 2010: På sensommeren var det et større arrangement i Trondheim som vi damene var en del involvert i – spesielt Ingeborg. Hva var det?',
        q2: 'Ingeborg var ellers veldig aktiv dette året, med reiser både hit og dit og to utenlandsturer. Hvor gikk turene?',
        q3: 'Anne ga Ingeborg en spesiell bursdagsgave i 2010. Hva var det?'
    },
    { // 9
        q1: '2011: Ingeborg avslutta et kapittel i livet sitt i 2011. Hvor er dette bildet fra?',
        q2: 'Vi reiste langt i påskeferien – hvor?',
        q3: 'Hva er en Stradivarius?'
    },
    { // 10
        q1: 'Fortsatt 2011: Norgesferie i sommer. Hvor er dette bildet tatt?',
        q2: 'På heimturen kjørte vi gjennom to av de store turistattraksjonene i Norge. Hvor var vi da?',
        q3: 'Hva er crépe suzettes?'
    },
    { // 11
        q1: 'Vi har kommet til 2012. Anne spilte KM Futsal for første gang. Hvilket lag spilte hun for?',
        q2: 'Siste halvdel av 2012 ble et krevende år for Ingrid. Hvorfor?',
        q3: 'Hva er kallenavnet til golfspilleren Suzann Pedersen?'
    },
    { // 12
        q1: 'Sommeren 2012. Ingeborg avslutta året på Øvrevoll. Hva het sjefen hennes på Øvrevoll?',
        q2: 'To uker i «Syden». Hva het byen?',
        q3: 'Vi tok en biltur til nabolandet og en berømt by der også. Hva heter landet og byen?'
    },
    { // 13
        q1: '',
        q2: '',
        q3: ''
    },
    { // 14
        q1: '',
        q2: '',
        q3: ''
    },
    { // 15
        q1: '',
        q2: '',
        q3: ''
    },
    { // 16
        q1: '',
        q2: '',
        q3: ''
    },
    { // 17
        q1: '',
        q2: '',
        q3: ''
    },
    { // 18
        q1: '',
        q2: '',
        q3: ''
    },
    { // 19
        q1: '',
        q2: '',
        q3: ''
    },
    { // 20
        q1: '',
        q2: '',
        q3: ''
    },
    { // 21
        q1: '',
        q2: '',
        q3: ''
    },
    { // 22
        q1: '',
        q2: '',
        q3: ''
    },
    { // 23
        q1: '',
        q2: '',
        q3: ''
    },
    { // 24
        q1: '',
        q2: '',
        q3: ''
    }
];




