// elements
const buttons = document.querySelectorAll(".categories__button");
const result = document.querySelector(".result__textarea");
const counter = document.querySelector(".result__result");
const copyButton = document.querySelector(".result__copy");
const removeButton = document.querySelector(".result__remove");
const popupError = document.querySelector(".popup--error");
const popupCopy = document.querySelector(".popup--copy");
const popupResetButton = document.querySelector(".popup__button--reset");
const popupCloseButton = document.querySelectorAll(".popup__button--close");

// radio lang
const eng = document.getElementById("eng");
const pl = document.getElementById("pl");
const mix = document.getElementById("mix");

// const db

// POLAND
const polandEngDb = [
  "poland",
  "polandtravel",
  "polandphotos",
  "polandisbeautiful",
  "polandways",
  "polandsights",
  "polandgrams",
  "polandtrip",
  "polandbeautiful",
  "polandnature",
  "visitpoland",
  "polandphoto",
  "discoverpoland",
  "explorepoland"
];
const polandPlDb = [
  "poska",
  "polskajestpiekna",
  "polska_w_obiektywie",
  "polska_fotografia",
  "polskawobiektywie",
  "polskamarka",
  "polskajestpiękna",
  "polskanatura",
  "polskalove",
  "polskazachwyca",
  "polskaprzyroda"
];

//TRAVEL
const travelEngDb = [
  "worldplaces",
  "travelgram",
  "discoverearth",
  "neverstopexploring",
  "stayandwander",
  "exploretocreate",
  "lovetheworld",
  "quietinthewild",
  "discovertheglobe",
  "postcardsfromtheworld",
  "aroundtheworldpix",
  "earth",
  "discovertheglobe",
  "quietinthewild",
  "earthfocus",
  "LoveTheWorld",
  "BBCtravel",
  "stayandwander",
  "exploremore",
  "exploreeverywhere",
  "adventureisoutthere",
  "awesomeearth",
  "tripadvisor",
  "natgeotravel",
  "ourlonelyplanet",
  "beautifuldestinations",
  "passionpassport"
];
const travelPlDb = [
  "podróż",
  "podroz",
  "podroze",
  "podróżemałeiduże",
  "podróżnik",
  "podróżowanie",
  "podróżnicy",
  "podrozemaleiduze",
  "podrozowanie"
];

//PHOTOGRAPHY
const photographyEngDb = [
  "picoftheday",
  "photooftheday",
  "worldtravelpics",
  "travelphotography",
  "landscapelovers",
  "mountainsphotography", //
  "trekkingandphotography",
  "moodygrams",
  "naturephotography",
  "mypixeldiary"
];
const photographyPlDb = [];

//MOUNTAINS
const mountainsEngDb = [
  "mountainscape",
  "mountains",
  "mountainadventures",
  "climbing",
  "mountainsarecalling",
  "mountainscalling",
  "lovemountains",
  "mountainstories",
  "mountainslovers",
  "mountainsports",
  "mountainside",
  "mountainsview",
  "mountainstyle",
  "mountainslife",
  "highmountains",
  "tatramountains" //
];
const mountainsPlDb = [
  "tatrypolskie",
  "polskiegóry",
  "goryponadwszystko",
  "tatromaniak",
  "wgórachjestwszystkocokocham",
  "górachnajlepiej",
  "górskiewędrówki",
  "goroholicy",
  "wgórach"
];

//CALENDAR
const calendarEngDb = [];
const calendarPlDb = [
  "terminarze",
  "terminarzetebra",
  "notes",
  "notatnik",
  "planer",
  "organizacja",
  "planowanie",
  "polskamarka",
  "notatki",
  "polskafirma",
  "polskiprodukt",
  "pasja"
];

//PCT
const pctEngDb = [];
const pctPlDb = [
  "kochamczarnkow",
  "pct",
  "mistozcharakterem",
  "miasteczko",
  "loveczarnkow"
];

// db
window.polandEng = [...polandEngDb];
window.polandPl = [...polandPlDb];
window.polandMix = [...polandEngDb, ...polandPlDb];

window.travelEng = [...travelEngDb];
window.travelPl = [...travelPlDb];
window.travelMix = [...travelEngDb, ...travelPlDb];

window.photographyEng = [...photographyEngDb];
window.photographyPl = [...photographyPlDb];
window.photographyMix = [...photographyEngDb, ...photographyPlDb];

window.mountainsEng = [...mountainsEngDb];
window.mountainsPl = [...mountainsPlDb];
window.mountainsMix = [...mountainsEngDb, ...mountainsPlDb];

window.calendarEng = [...calendarEngDb];
window.calendarPl = [...calendarPlDb];
window.calendarMix = [...calendarEngDb, ...calendarPlDb];

window.pctEng = [...pctEngDb];
window.pctPl = [...pctPlDb];
window.pctMix = [...pctEngDb, ...pctPlDb];

function updateHashtagsCounter() {
  const numberOfHashtags = result.value.match(/#/gi).length;
  counter.innerText = numberOfHashtags;
}

function getRandomHashtags(hashtagsList, ammountOfHastags, category) {
  const randomHastags = hashtagsList.sort(() => 0.5 - Math.random());
  const randomHastagsAmmount = randomHastags.slice(0, ammountOfHastags);

  const newList = hashtagsList.filter(function(el) {
    return randomHastagsAmmount.indexOf(el) < 0;
  });
  window[category] = newList;

  if (hashtagsList.length === 0) {
    popupError.style.display = "flex";
  }

  const isEmpty = result.value === "";

  const randomHastagsString = isEmpty
    ? "#" +
      randomHastagsAmmount
        .toString()
        .split(",")
        .join(" #")
    : " #" +
      randomHastagsAmmount
        .toString()
        .split(",")
        .join(" #");

  return randomHastagsString;
}

function showHashtags() {
  let lang;
  if (eng.checked) {
    lang = "Eng";
  }
  if (pl.checked) {
    lang = "Pl";
  }
  if (mix.checked) {
    lang = "Mix";
  }

  const category = this.getAttribute("category") + lang;
  const hashtags = eval(category);
  const ammount = this.getAttribute("ammount");

  result.value += getRandomHashtags(hashtags, ammount, category);
  updateHashtagsCounter();
}

function copyHashtahs() {
  result.select();
  result.setSelectionRange(0, 99999);
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

  window.mountainsEng = [...mountainsEngDb];
  window.mountainsPl = [...mountainsPlDb];
  windowmountainsyMix = [...mountainsEngDb, ...mountainsPlDb];

  window.calendarEng = [...calendarEngDb];
  window.calendarPl = [...calendarPlDb];
  windowcalendaryMix = [...calendarEngDb, ...calendarPlDb];

  window.pctEng = [...pctEngDb];
  window.pctPl = [...pctPlDb];
  window.pctMix = [...pctEngDb, ...pctPlDb];
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
  button.addEventListener("click", showHashtags);
}

copyButton.addEventListener("click", copyHashtahs);
removeButton.addEventListener("click", removeHashtags);
popupResetButton.addEventListener("click", popupReset);

for (const button of popupCloseButton) {
  button.addEventListener("click", popupClose);
}
