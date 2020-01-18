// elements
const buttons = document.querySelectorAll('.categories__button');
const result = document.querySelector('.result__textarea');
const counter = document.querySelector('.result__result');
const copyButton = document.querySelector('.result__copy');
const removeButton = document.querySelector('.result__remove');

// radio lang
const eng = document.getElementById("eng");
const pl = document.getElementById("pl");
const mix = document.getElementById("mix");


// db
window.polandEng = ["poland", "polandgirl", "polandball", "polandphotos", "polandisbeautiful", "polandways", "polandballs", "polandtattoos", "polandarchitecture", "polandsights", "polandboy", "polandgrams", "polandballmemes", "polandballcomics", "polandtrip", "polandspring", "polandbeautiful", "polandgirls", "Polandia", "polandgram", "polandwoman", "polandmen", "Poland2017", "polandtattoo", "polandphoto", "polandfashion", "polandman", "polandstreet", "polandballmeme", "polandart"];
window.polandPl = ["polska", "polska", "polskakobieta", "polskamama", "polskabiega", "polskamarka", "polskajestpiekna", "polskamoda", "polskablogerka", "polskazlotajesien", "polskajesie", "polskafotografia", "polskagirl", "PolskaJestPi", "polskajesien", "polskamuzyka", "polskawinnychkolorach", "polskafirma", "polskaczyta", "polskakuchnia", "polskaarchitektura", "polskamodelka", "polskabielizna", "polskaz", "polskanatura", "polskawnaturze", "polskarodzina", "polskaczarnog", "polskadziwczyna", "Polskatakapiekna", "polskamatka", "polskawie", "polskadupeczka", "polskalove", "polskaprodukcja", "polskareprezentacja", "polskailustracja", "polskadziewczynamasierozumiec", "polskablogerkamodowa", "polskawobiektywie", "polskawalczaca", "polskadzieczyna", "polskawersja", "polskadziewucha", "polskaniemcy", "polskasylwetka", "polskatravel", "polskaszkola", "polskagola", "polskaprzyroda", "polskagenetics", "polskadziewczyn", "polskArchitektura", "polskaprzezweekend", "polskawruinie", "polskajako", "polskaboy", "polskawbudowie", "polskainaczej", "polskawschodnia"];
window.polandMix = [...polandEng, ...polandPl];

window.travelEng = ["travel", "travelphotography", "photography", "nature", "travelgram", "love", "photooftheday", "instatravel", "instagood", "wanderlust", "trip", "travelblogger", "adventure", "traveling", "vacation", "picoftheday", "travelling", "explore", "instagram", "landscape", "beautiful", "ig", "holiday", "like", "beach", "summer", "naturephotography", "art", "photo", "bhfyp"];
window.travelPl = ["podroz", "podroz", "podrozemaleiduze", "podroznik", "podrozezdzieckiem", "podrozniczka", "podrozowanie", "podrozepopolsce", "podrozemaleduze", "podrozujemy", "podrozeksztalca", "podrozniczo", "podrozoholik", "podrozowac", "podrozzdzieckiem", "podrozzesmakiem", "podrozzwanazyciem", "podrozposlubna", "podrozowaniejestfajne", "podrozrowerem", "podrozujacarodzinka", "podrozujese", "podrozwglabsiebie", "podrozemotocyklowe", "podrozdoindii", "podrozeodkuchni", "podrozepoazji", "podrozepyzy", "podrozerazem", "podrozetemaleiteduze"];
window.travelMix = [...polandEng, ...polandPl];

window.photographyEng = ["photography", "photographylovers", "photographysouls", "photographyeveryday", "photographyislife", "photographylover", "photographyislifee", "photographylife", "photographyart", "photographyoftheday", "photographyy", "photographylove", "photographyaddict", "photographyskills", "photographybook", "photographyprops", "photographydaily", "photographyisart", "photographystudio", "photographyaccount", "photographyday", "photographynature", "photographysoul", "photographystudent", "photographyworkshop", "photographyindonesia", "photographyblog", "photographyig", "photographybusiness", "photography101"];
window.photographyPl = ["fotografia", "robimyzdjecia", "superzdjecie", "fajnezdjecie", "foteczki", "jestemfotografem", "fotki", "fajnezdjecie", "fotografowanko", "zdjecia", "fotografia", "robimyzdjecia", "superzdjecie", "fajnezdjecie", "foteczki", "jestemfotografem", "fotki", "fajnezdjecie", "fotografowanko", "zdjecia", "fotografia", "robimyzdjecia", "superzdjecie", "fajnezdjecie", "foteczki", "jestemfotografem", "fotki", "fajnezdjecie", "fotografowanko", "zdjecia"];
window.photographyMix = [...polandEng, ...polandPl];


function updateHashtagsCounter() {
    const numberOfHashtags = result.value.match(/#/gi).length;
    counter.innerText = numberOfHashtags;
}


function getRandomHashtags(hashtagsList, ammountOfHastags, category) {
    const randomHastags = hashtagsList.sort(() => .5 - Math.random());
    const randomHastagsAmmount = randomHastags.slice(0, ammountOfHastags);

    if (result.value === "") { }

    const newList = hashtagsList.filter(function (el) {
        return randomHastagsAmmount.indexOf(el) < 0;
    });

    window[category] = newList;

    if (hashtagsList.length === 0) { alert("ERROR: No more hashtags in database!") };

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
    const type = this.getAttribute("type");

    if (type === "get") {
        result.value = "";
        result.value = getRandomHashtags(hashtags, ammount, category);
        updateHashtagsCounter();
    }

    if (type === "add") {
        result.value += getRandomHashtags(hashtags, ammount, category);
        updateHashtagsCounter();
    }
}

function copyHashtahs() {
    result.select();
    result.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + result.value);
}

function removeHashtags() {
    result.value = "";
}


// add eventlistener for all buttons
for (const button of buttons) {
    button.addEventListener('click', showHashtags);
}

copyButton.addEventListener('click', copyHashtahs);
removeButton.addEventListener('click', removeHashtags);



