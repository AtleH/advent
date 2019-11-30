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
        q1: 'Anne i Ghana i januar. Hva heter det viktigste stammespråket i Ghana?',
        q2: 'Hva heter hovedstaden i Ghana?',
        q3: 'Hvem ble ny landbruksminister i Norge i januar 2019?'
    },
    { // 2
        q1: 'Bymarka i januar. Nevn tre serveringshytter i Bymarka',
        q2: 'Hvem er kommunaldirektør for kultur og næring i Trondheim?',
        q3: 'Hvem vant Tour de Ski for herrer 2018/2019?'
    },
    { // 3
        q1: 'Bursdag Atle, februar. Hvilket stjernetegn er Atle født i?',
        q2: 'Det var VM i alpint i Åre i februar 2019. Hvem vant gull og sølv i VM i herrenes utfor?',
        q3: 'En tidligere stor skihopper fra Finland døde i februar, bare 55 år gammel. Hva het han?'
    },
    { // 4
        q1: 'Vinterferie på hytta, februar. VM på ski i Seefeld 2019 - seks øvelser for herrer, hvor mange gull tok Norge?',
        q2: 'Hvem ga ut EP-en Sas Plus/Sas Pussy 22. februar?',
        q3: 'Når har Martine bursdag og hvilket år er hun født?'
    },
    { // 5
        q1: 'Skitur i mars. Hvor er Atle og Demi her?',
        q2: 'Sigrid ga ut debutalbumet sitt i mars 2019 - hva het det?',
        q3: 'VM på ski i Seefeld 2019 - hvilken plass havnet de norske damene på i stafetten?'
    },
    { // 6
        q1: 'Ridetur på Byåsen i mars. Hva heter de tre andre "gamle" islandshestene på Torshaug?',
        q2: 'Anne er fortsatt i Ghana. Nevn to av nabolandene til Ghana.',
        q3: 'Hvem overtok som justisminister etter Tor Mikkel Wara?'
    },
    { // 7
        q1: 'April - Atle, Demi og Ingrid på skitur før påske. Hvordan bestemmes dato for 1. påskedag?',
        q2: 'Hvem skrev "Jeg velger meg april?"',
        q3: 'Hvilken hytte i Sylan har både Åsta og Helge hatt sommerjobb på?'
    },
    { // 8
        q1: 'Påske i april, Anne og Atle på fjelltur. Nevn tre hytter i Sylan som dere har vært på.',
        q2: 'Hvilket kjent bygg brant 15. april?',
        q3: 'Ingrid og Atle reiste med Hurtigruten til Bodø i slutten av april. Men hva er sørligste og nordligste anløp for Hurtigruten?'
    },
    { // 9
        q1: 'Ingrid feiret bursdag i mai. Hvilket stjernetegn er hun født i?',
        q2: 'Hvem ble ny eldre- og folkehelseminister i Norge?',
        q3: 'Rosenborg spilte 16. mai-kamp mot Haugesund. Hva ble resultatet?'
    },
    { // 10
        q1: '17. mai-middag i Smiskaret. Hvem har skrevet teksten til "Ja vi elsker"?',
        q2: 'Vi feiret 17. mai i utlandet i 2005. Hvor var vi da?',
        q3: 'Hvor mange dager er det i mai?'
    },
    { // 11
        q1: 'Juni - Atle, Demi og Ingrid på fjelltur - navn og høyde vises på bildet, men hvilken kommune?',
        q2: 'Hvem vant finalen i Champions League (2018/2019)?',
        q3: 'Ingrid ble pensjonist 1. juni - 64 år gammel, men hva er den "normale" pensjonsalderen i Norge?'
    },
    { // 12
        q1: '6. juni og avslutning for Anne & co. Hva het "The Lady with the Lamp" som var en pioner i moderne sykepleie?',
        q2: 'Hva heter de to hjerneforskerne ved NTNU som fikk nobelprisen i medisin i 2014?',
        q3: 'Hva heter adm.dir. ved St. Olavs Hospital?'
    },
    { // 13
        q1: 'Juli og hyttetur for Ingeborg, Demi og Ingrid. Hvor høyt ligger Børsjøen (50 m over/under godtas)?',
        q2: 'Hva het mormor og morfar Melan til fornavn',
        q3: 'Hva het den nye statsministeren i Storbritannia som tiltrådte 24. juli?'
    },
    { // 14
        q1: 'Sommerferie på hytta i juli med besøk av fam Venås-Flægstad. Hvor jobber Helge?',
        q2: 'Hvor kommer Johan fra?',
        q3: 'Hva het foreldrene til Sveinung?'
    },
    { // 15
        q1: 'Ingeborg fylte 27 år 3. august. Hvilket stjernetegn er hun født under?',
        q2: 'Samme dag skjedde en stor transport- eller kommunikasjonsbegivenhet i Trondheim - hvilken?',
        q3: 'Hva heter Norges sandvolleyballpar som har vunnet det meste av det som er å vinne det siste året?'
    },
    { // 16
        q1: 'Demi og Ingrid på tur i nærområdet - hva er Chaussé 1859?',
        q2: 'Hvor går Chaussé 1859?',
        q3: 'Hve betyr chaussé?'
    },
    { // 17
        q1: 'Trolsk stemning i september. Hvor kan dette være, mon tro? Turterreng i Trondheim kommune',
        q2: '9. september var det kommune- og fylkestingvalg i Norge. Hvem ble ny ordfører i Malvik?',
        q3: 'Og hvem er fylkesordfører i Trøndelag?'
    },
    { // 18
        q1: '26. september fylte Anne 25 år. Hvilket stjernetegn er hun født under?',
        q2: 'Hvor mange stjernetegn er det i Dyrekretsen',
        q3: 'En av de fire som ble dømt for Orderuddrapene, døde i september. Hva het han?'
    },
    { // 19
        q1: 'Atle og Ingrid var på fottur i Provence i oktober. Hele familien var i Frankrike i 2010 - hva het landsbyen der vi så Tour de France-etappen?',
        q2: 'Både morfar Johan og bestefar Magnus hadde geburtsdag i oktober, men hva var datoene?',
        q3: 'I dag blir Oktoberfest arrangert både i Norge og andre land, men i hvilket land ble den opprinnelige Oktoberfesten arrangert? '
    },
    { // 20
        q1: 'På tur til Skarpåsen i oktober. På veien dit går vi forbi Gapberget. Hvorfor har det fått det navnet?',
        q2: 'Hva heter arbeids- og sosialministeren vår som var mye i  mediene i oktober pga NAV-skandalen? ',
        q3: 'Og hva heter NAV-sjefen (arbeids- og velferdsdirektøren)?'
    },
    { // 21
        q1: 'November-bildet er fra Trollheimen i august: Anne, Atle og Demi spiller Backgammon. Hvor mange brikker har hver spiller i backgammon?',
        q2: 'Hvem vant VM i Fischersjakk i månedsskiftet oktober-november?',
        q3: 'Hvor mange bønder er det på et sjakkbrett?'
    },
    { // 22
        q1: 'November-bilde nr 2 fra Selbu: Hvordan ser kommunevåpenet til Selbu ut?',
        q2: 'Enn kommunevåpenet til Malvik?',
        q3: 'Hva heter kulturhuset i Malvik (Hommelvik)?'
    },
    { // 23
        q1: 'Desember-bildet er fra våren 2019 - hva heter den store hvite planten/busken framfor dukkestua?',
        q2: 'Nevn ti spiselige "ting" vi (dvs Ingrid) dyrker i hagen',
        q3: 'På latin heter denne vanlige vårblomsten Tussilago farfara, men hva heter den på norsk?'
    },
    { // 24
        q1: 'Desember - et trivelig bilde fra jula i fjor: Hva er forskjellen på champagne og andre musserende drikker?',
        q2: 'Hvorfor startet en Government shutdown i USA i desember 2018?',
        q3: 'Hvilken plass kom Norge på under håndball-EM 2018?'
    }
];
