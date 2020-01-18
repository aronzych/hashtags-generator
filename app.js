// elements
const buttons = document.querySelectorAll('.categories__button');
const result = document.querySelector('.result__textarea');
const counter = document.querySelector('.result__result');
const copyButton = document.querySelector('.result__copy');
const removeButton = document.querySelector('.result__remove');
const popupError = document.querySelector('.popup--error');
const popupCopy = document.querySelector('.popup--copy');
const popupResetButton = document.querySelector('.popup__button--reset');
const popupCloseButton = document.querySelectorAll('.popup__button--close');

// radio lang
const eng = document.getElementById("eng");
const pl = document.getElementById("pl");
const mix = document.getElementById("mix");


// const db

const polandEngDb = ["poland", "polandgirl", "polandball", "polandphotos", "polandisbeautiful", "polandways", "polandballs", "polandtattoos", "polandarchitecture", "polandsights", "polandboy", "polandgrams", "polandballmemes", "polandballcomics", "polandtrip", "polandspring", "polandbeautiful", "polandgirls", "Polandia", "polandgram", "polandwoman", "polandmen", "Poland2017", "polandtattoo", "polandphoto", "polandfashion", "polandman", "polandstreet", "polandballmeme", "polandart"];
const polandPlDb = ["polska", "polska", "polskakobieta", "polskamama", "polskabiega", "polskamarka", "polskajestpiekna", "polskamoda", "polskablogerka", "polskazlotajesien", "polskajesie", "polskafotografia", "polskagirl", "PolskaJestPi", "polskajesien", "polskamuzyka", "polskawinnychkolorach", "polskafirma", "polskaczyta", "polskakuchnia", "polskaarchitektura", "polskamodelka", "polskabielizna", "polskaz", "polskanatura", "polskawnaturze", "polskarodzina", "polskaczarnog", "polskadziwczyna", "Polskatakapiekna", "polskamatka", "polskawie", "polskadupeczka", "polskalove", "polskaprodukcja", "polskareprezentacja", "polskailustracja", "polskadziewczynamasierozumiec", "polskablogerkamodowa", "polskawobiektywie", "polskawalczaca", "polskadzieczyna", "polskawersja", "polskadziewucha", "polskaniemcy", "polskasylwetka", "polskatravel", "polskaszkola", "polskagola", "polskaprzyroda", "polskagenetics", "polskadziewczyn", "polskArchitektura", "polskaprzezweekend", "polskawruinie", "polskajako", "polskaboy", "polskawbudowie", "polskainaczej", "polskawschodnia"];

const travelEngDb = ["travel", "travelphotography", "photography", "nature", "travelgram", "love", "photooftheday", "instatravel", "instagood", "wanderlust", "trip", "travelblogger", "adventure", "traveling", "vacation", "picoftheday", "travelling", "explore", "instagram", "landscape", "beautiful", "ig", "holiday", "like", "beach", "summer", "naturephotography", "art", "photo", "bhfyp"];
const travelPlDb = ["podroz", "podroz", "podrozemaleiduze", "podroznik", "podrozezdzieckiem", "podrozniczka", "podrozowanie", "podrozepopolsce", "podrozemaleduze", "podrozujemy", "podrozeksztalca", "podrozniczo", "podrozoholik", "podrozowac", "podrozzdzieckiem", "podrozzesmakiem", "podrozzwanazyciem", "podrozposlubna", "podrozowaniejestfajne", "podrozrowerem", "podrozujacarodzinka", "podrozujese", "podrozwglabsiebie", "podrozemotocyklowe", "podrozdoindii", "podrozeodkuchni", "podrozepoazji", "podrozepyzy", "podrozerazem", "podrozetemaleiteduze"];

const photographyEngDb = ["photography", "photographylovers", "photographysouls", "photographyeveryday", "photographyislife", "photographylover", "photographyislifee", "photographylife", "photographyart", "photographyoftheday", "photographyy", "photographylove", "photographyaddict", "photographyskills", "photographybook", "photographyprops", "photographydaily", "photographyisart", "photographystudio", "photographyaccount", "photographyday", "photographynature", "photographysoul", "photographystudent", "photographyworkshop", "photographyindonesia", "photographyblog", "photographyig", "photographybusiness", "photography101"];
const photographyPlDb = ["fotografia", "robimyzdjecia", "superzdjecie", "fajnezdjecie", "foteczki", "jestemfotografem", "fotki", "fajnezdjecie", "fotografowanko", "zdjecia", "fotografia", "robimyzdjecia", "superzdjecie", "fajnezdjecie", "foteczki", "jestemfotografem", "fotki", "fajnezdjecie", "fotografowanko", "zdjecia", "fotografia", "robimyzdjecia", "superzdjecie", "fajnezdjecie", "foteczki", "jestemfotografem", "fotki", "fajnezdjecie", "fotografowanko", "zdjecia"];


// db
window.polandEng = [...polandEngDb];
window.polandPl = [...polandPlDb];
window.polandMix = [...polandEngDb, ...polandPlDb];

window.travelEng = [...travelEngDb];
window.travelPl = [...travelEngDb];
window.travelMix = [...travelEngDb, ...travelPlDb];

window.photographyEng = [...photographyEngDb];
window.photographyPl = [...photographyPlDb];
window.photographyMix = [...photographyEngDb, ...photographyPlDb];


function updateHashtagsCounter() {
    const numberOfHashtags = result.value.match(/#/gi).length;
    counter.innerText = numberOfHashtags;
}


function getRandomHashtags(hashtagsList, ammountOfHastags, category) {
    const randomHastags = hashtagsList.sort(() => .5 - Math.random());
    const randomHastagsAmmount = randomHastags.slice(0, ammountOfHastags);

    const newList = hashtagsList.filter(function (el) {
        return randomHastagsAmmount.indexOf(el) < 0;
    });
    window[category] = newList;

    if (hashtagsList.length === 0) { popupError.style.display = "flex"; };

    const isEmpty = result.value === "";

    const randomHastagsString =
        isEmpty ? "#" + (randomHastagsAmmount.toString()).split(",").join(" #") : " #" + (randomHastagsAmmount.toString()).split(",").join(" #");

    return randomHastagsString;
}


function showHashtags() {

    let lang;
    if (eng.checked) { lang = "Eng" };
    if (pl.checked) { lang = "Pl" };
    if (mix.checked) { lang = "Mix" };

    const category = this.getAttribute("category") + lang;
    const hashtags = eval(category);
    const ammount = this.getAttribute("ammount");

    result.value += getRandomHashtags(hashtags, ammount, category);
    updateHashtagsCounter();
}


function copyHashtahs() {
    result.select();
    result.setSelectionRange(0, 99999)
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    // alert("Copied the text: " + result.value);
    popupCopy.style.display = "flex";
}


function removeHashtags() {
    result.value = "";
    counter.innerText = "0";

    window.polandEng = [...polandEngDb];
    window.polandPl = [...polandPlDb];
    window.polandMix = [...polandEngDb, ...polandPlDb];

    window.travelEng = [...travelEngDb];
    window.travelPl = [...travelEngDb];
    window.travelMix = [...travelEngDb, ...travelPlDb];

    window.photographyEng = [...photographyEngDb];
    window.photographyPl = [...photographyPlDb];
    window.photographyMix = [...photographyEngDb, ...photographyPlDb];
}

function popupReset() {
    removeHashtags();
    popupError.style.display = "none";
}

function popupClose() {
    popupError.style.display = "none";
    popupCopy.style.display = "none";
}


// add eventlistener for all buttons
for (const button of buttons) {
    button.addEventListener('click', showHashtags);
}

copyButton.addEventListener('click', copyHashtahs);
removeButton.addEventListener('click', removeHashtags);
popupResetButton.addEventListener('click', popupReset);

for (const button of popupCloseButton) {
    button.addEventListener('click', popupClose);
}


