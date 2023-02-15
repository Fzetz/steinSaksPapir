// alle karakterene som man kan velge
let trekkKarakterer = ["stein", "saks", "papir", "vannpistol", "bikkje"];
let datamaskinTrekkTekst = document.getElementById("datamaskinTrekk");

let datamaskinPoengTekst = document.getElementById("datamaskin");
let degPoengTekst = document.getElementById("deg");

// alle variablene som gjelder for slutt meldingen
let endMessage = document.getElementById("endTekst");
let body = document.getElementById("body");

    let endContainer = document.getElementById("endContainer")
    let endTekst = document.getElementById("endTekst")
    let restartBtn = document.getElementById("restart");

// variablene til reglene
let reglerContainer = document.getElementById("reglerContainer");
let reglerBtn = document.getElementById("regler");
let reglerToggle = 1;

// poengsystemet
let datamaskinPoeng = 0;
let degPoeng = 0;

// stein slår saks
// stein slår bikkje
// papir slår stein
// saks slår papir
// vannpistol slår papir
// bikkje slår vannpistol

let audio = [];

audio[0] = new Audio("./onlymp3.to - Fortnite  Festive Lobby Music (Season 7)-LB_EdE8sHYg-192k-1655263890212.mp3");

// spiller av en sang på nettsiden
window.onclick = winClick;

function winClick () {

    audio[0].play();    

}

// laster opp alle funksjonene
window.onload = () => {

    document.getElementById("stein").onclick = result;
    document.getElementById("saks").onclick = result;
    document.getElementById("papir").onclick = result;
    document.getElementById("vannpistol").onclick = result;
    document.getElementById("bikkje").onclick = result;
    document.getElementById("restart").onclick = restart;
    document.getElementById("regler").onclick = regler;

}

// funksjonen som viser resultatet på skjermen
function result (e) {

    // variabler som velger et tall mellom 0 og trekkKarakterens lengde
    let mathRandom = Math.random() * trekkKarakterer.length;
    let mathFloor = Math.floor(mathRandom);

    if (datamaskinPoeng < 3 && degPoeng < 3) {

    // datamaskinen sitt trekk
    let computer = trekkKarakterer[mathFloor];

    if (computer == trekkKarakterer[1] && e.target.id == trekkKarakterer[0] || computer == trekkKarakterer[2] && e.target.id == trekkKarakterer[1] || computer == trekkKarakterer[0] && e.target.id == trekkKarakterer[2] || computer == trekkKarakterer[2] && e.target.id == trekkKarakterer[3] || computer == trekkKarakterer[3] && e.target.id == trekkKarakterer[4]) {
        
        // datamaskin taper og du vinners
        datamaskinTrekkTekst.innerHTML = "Datamaskinen valgte: <b> " + computer + " </b>";
        // legger til poeng på degTeksten
        degPoengTekst.innerHTML = "Deg: " + ++degPoeng;

    } else if (computer == trekkKarakterer[2] && e.target.id == trekkKarakterer[0] || computer == trekkKarakterer[0] && e.target.id == trekkKarakterer[1] || computer == trekkKarakterer[1] && e.target.id == trekkKarakterer[2] || computer == trekkKarakterer[4] && e.target.id == trekkKarakterer[3] || computer == trekkKarakterer[0] && e.target.id == trekkKarakterer[4]) {

        // datamaskin vinner og du taper
        datamaskinTrekkTekst.innerHTML = "Datamaskinen valgte: <b> " + computer + "</b>";
        // legger til poeng på datamaskinTeksten
        datamaskinPoengTekst.innerHTML = "Datamaskin: " + ++datamaskinPoeng;

    } else if (computer == trekkKarakterer[0] && e.target.id == trekkKarakterer[0] || computer == trekkKarakterer[1] && e.target.id == trekkKarakterer[1] || computer == trekkKarakterer[2] && e.target.id == trekkKarakterer[2] || computer == trekkKarakterer[3] && e.target.id == trekkKarakterer[3] || computer == trekkKarakterer[4] && e.target.id == trekkKarakterer[4]) {

        // det blir uavgjort mellom deg og datamaskin
        datamaskinTrekkTekst.innerHTML = "Datamaskinen valgte: <b> " + computer + " </b>";

    }

    }

    // hvis du har fått tre poeng, så skal du vinne
    if (degPoeng == 3) {

        endContainer.style.display = "block";
        endTekst.style.display= "block";
        restartBtn.style.display = "block";

        endMessage.innerHTML = "Gratulerer, du hadde flest poeng. Ta å prøv engang til";
        reglerContainer.style.display = "none";
        reglerBtn.style.display = "none";

        // hvis datamaskinen fikk tre poeng, så skal datamaskinen vinne
    } else if (datamaskinPoeng == 3) {
        
        endContainer.style.display = "block";
        endTekst.style.display= "block";
        restartBtn.style.display = "block";

        endMessage.innerHTML = "Ahhhhh! du tapte desverre, men du SKAL prøve på nytt"; 
        reglerContainer.style.display = "none";
        reglerBtn.style.display = "none";

    }
    
}

// regler er en funksjon som viser reglene til spillet, når man trykker på regel knappen
function regler () {

    // vis regler
    if (reglerToggle == 1) {

        reglerContainer.style.display = "block";

        reglerToggle = 0;

    // ikke vis regler
    } else if (reglerToggle == 0) {

        reglerContainer.style.display = "none";

        reglerToggle = 1;

    }

}

// funksjonen som tilbakestiller hele spilet
function restart () {

    // endrer poengene til 0 og teksten tilbake
    datamaskinPoeng = 0;
    degPoeng = 0;

    datamaskinPoengTekst.innerHTML = "Datamaskin: " + datamaskinPoeng;
    degPoengTekst.innerHTML = "Deg: " + degPoeng;

    datamaskinTrekkTekst.innerHTML = "Datamaskinen valgte: ";


    endContainer.style.display = "none";
    endTekst.style.display= "none";
    restartBtn.style.display = "none";

    reglerBtn.style.display = "block";

}