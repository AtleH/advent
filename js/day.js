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
        q1: 'I 2007 var vi i Portugal. Hva heter hovedstaden i landet?',
        q2: 'Vi (i alle fall de fleste av oss) prøvde en sport for første gang - hvilken?',
        q3: 'Hvilket annet land i verden har portugisisk som språk?'
    },
    { // 2
        q1: 'Hvem var kjøkkenhjelp i Ingeborgs konfirmasjon?',
        q2: 'Hvem var fotograf?',
        q3: 'En kjent norsk ektepar fylte 70 år i 2007 - hvem?'
    },
    { // 3
        q1: 'I 2007 arrangerte vi den siste sykkelturen for familiene Venås-Flægstad-Haugan. Hvem var ikke med på hele turen? ',
        q2: 'Hvor gikk turen?',
        q3: 'Hvem vant 4. etappe i Tour de France i 2007?'
    },
    { // 4
        q1: 'Hvor gikk utenlandsturen i 2008?',
        q2: 'Hva het hunden på bildet?',
        q3: 'Hva heter dronninga landet?'
    },
    { // 5
        q1: 'Hvem er dette?',
        q2: 'Hvem vant seriemesterskapet i herrefotball for første gang på 44 år dette året (2007)? (Nei, det var ikke Rosenborg...)',
        q3: 'Hvem har skrevet «Vi ere en nasjon vi med---? Og hva kalles sangen?'
    },
    { // 6
        q1: 'Hvem gifta seg sommeren 2008?',
        q2: 'Emma Tallulah Behn ble født i september 2008 - hvem er foreldrene hennes?',
        q3: 'Hva betyr det at 2008 var skuddår?'
    },
    { // 7
        q1: 'Høstferien 2009 var vi i Hellas - men hva het øya?',
        q2: 'Hva heter hovedstaden i Hellas?',
        q3: 'Har vi vært på andre greske øyer, ev hvilke?'
    },
    { // 8
        q1: 'Hvor er Ingrid og Atle her?',
        q2: 'Hva skjer?',
        q3: 'Hvor mange ganger har Anne og Ingeborg vært i denne byen?'
    },
    { // 9
        q1: 'Hvor mange ganger har Ingeborg og Anne deltatt i isbadinga ved Børsjøen?',
        q2: 'Hvor feiret vi påska i 2011?',
        q3: 'Når er 1. påskedag? Første søndag etter.....?'
    },
    { // 10
        q1: 'Hvor er dette?',
        q2: 'Hvor gammel ble Bestemor?',
        q3: 'Hva var pikenavnet hennes?'
    },
    { // 11
        q1: 'Hva het de to franske guttene som bodde hos oss ei uke høsten 2010?',
        q2: 'Vi hadde også besøk av ei fransk jente i 2009, hva het hun?',
        q3: 'Hva heter den franske nasjonalsangen?'
    },
    { // 12
        q1: 'Hvem var kjøkkenhjelp i Annes konfirmasjon?',
        q2: 'Hvem tok de «offisielle» konfirmasjons-bildene?',
        q3: 'Hva fikk dere i konfirmasjonsgave fra Steinkjergjengen? Enn fra Hafslo?'
    },
    { // 13
        q1: 'Sommeren 2010 jobbet Ingeborg på Øvrevoll. I hvilken kommune ligger Øvrevoll?',
        q2: 'Hva heter kommunesenteret?',
        q3: 'Hva heter det mest kjente fengslet som ligger i kommunen?'
    },
    { // 14
        q1: 'Sommeren 2010 var vi i Frankrike - igjen. Hvilken by reiste vi til først?',
        q2: 'Vi kom dit på nasjonaldagen, når er den?',
        q3: 'Vi besøkte en by i Pyreneene som er hjembyen til en kjent skiskytter - hvem?'
    },
    { // 15
        q1: 'Hytte til hytte i Sylan - hvor startet vi fra?',
        q2: 'Hvem ble syk og måtte dra hjem?',
        q3: 'Hvilke hytter i Sylan har Anne og Ingeborg vært på?'
    },
    { // 16
        q1: 'Påskeferie 2011 - hvor?',
        q2: 'Hva het de to karene som satt sammen med Atle på flyet sørover?',
        q3: 'I hvilket land ligger Grand Canaria?'
    },
    { // 17
        q1: 'Kjent vei i Møre og Romsdal - hva heter den?',
        q2: 'Hva slags hunder har Astrid og Olaf?',
        q3: 'I hvilket fylke ligger Svatsum og Gausdal?'
    },
    { // 18
        q1: 'Hvor gikk turen dette året (2012) - by og land?',
        q2: 'Vi besøkte også nabolandet og en kjent by med ei kjent bru, navn på land og by?',
        q3: 'Hvilket land var disse to landene og flere til en del av før Balkankrigene på 90-tallet?'
    },
    { // 19
        q1: 'Høstferie 2012: Hva heter toppen i Bymarka som dette bildet er tatt?',
        q2: 'Hvor ble Fia født?',
        q3: 'Hva het mora til Fia?'
    },
    { // 20
        q1: 'Hvem er dette?',
        q2: 'Vi var i konfirmasjon til Even i 2012 - hvor bor Even (eller egentlig Brage)?',
        q3: 'I hvilket fylke ligger Mysen?'
    },
    { // 21
        q1: 'Når kom Demi til oss?',
        q2: 'Hva het eieren vi overtok henne etter?',
        q3: 'Hva heter korthåret Vorsteh på engesk?'
    },
    { // 22
        q1: 'Når ble Martine konfirmert?',
        q2: 'Hva heter «huset» der selskapet var?',
        q3: 'Hvor kommer May-Trude fra? (by)'
    },
    { // 23
        q1: 'Hvem var julenisse for oss da dere var yngre?',
        q2: 'Hva er hovedingrediensene i marsipan?',
        q3: 'Hvor mange søndager er det i advent?'
    },
    { // 24
        q1: 'Hvem har produsert Julebrus fram til i år?',
        q2: 'Hva heter favorittjulesangen til Ingrid?',
        q3: 'Hvem har skrevet «Nu har vi vaska golvet»?'
    }
];




