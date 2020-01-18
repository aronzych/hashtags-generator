// elements
const buttons = document.querySelectorAll('.categories__button');
const result = document.querySelector('.result__textarea');
const counter = document.querySelector('.result__result');
const copyButton = document.querySelector('.result__copy');

// radio lang
const eng = document.getElementById("eng");
const pl = document.getElementById("pl");
const mix = document.getElementById("mix");


// db
window.polandEng = ["poland", "cracov", "visitpoland"];
window.polandPl = ["polska1", "polska2", "polska3"];
window.polandMix = [...polandEng, ...polandPl];

window.dupaEng = ["asd", "dgfd", "fhgf"];
window.dupaPl = ["jhgjhg", "fhgf", "hgjft"];
window.dupaMix = [...dupaEng, ...dupaPl];

// check is first generate
let firstGenerate = true;

function updateHashtagsCounter() {
    const numberOfHashtags = result.value.match(/#/gi).length;
    counter.innerText = numberOfHashtags;
}


function getRandomHashtags(hashtagsList, ammountOfHastags, category) {
    const randomHastags = hashtagsList.sort(() => .5 - Math.random());
    const randomHastagsAmmount = randomHastags.slice(0, ammountOfHastags);

    console.log(randomHastags);
    console.log(randomHastagsAmmount);

    const newList = hashtagsList.filter(function (el) {
        return randomHastagsAmmount.indexOf(el) < 0;
    });

    window[category] = newList;

    if (hashtagsList.length === 0) { alert("ERROR: No more hashtags in database!") };

    const randomHastagsString =
        firstGenerate ? "#" + (randomHastagsAmmount.toString()).split(",").join(" #") : " #" + (randomHastagsAmmount.toString()).split(",").join(" #");


    return randomHastagsString;
}


function showHashtags(e) {
    let lang;
    if (eng.checked) { lang = "Eng" };
    if (pl.checked) { lang = "Pl" };
    if (mix.checked) { lang = "Mix" };


    const category = e.target.getAttribute("category") + lang;

    console.log(lang);

    const hashtags = eval(category);
    const ammount = e.target.getAttribute("ammount");
    const type = e.target.getAttribute("type");

    if (type === "get") {
        result.value = getRandomHashtags(hashtags, ammount, category);
        updateHashtagsCounter();
    }

    if (type === "add") {
        result.value += getRandomHashtags(hashtags, ammount, category);
        updateHashtagsCounter();
        firstGenerate = false;
    }
}

function copyHashtahs() {
    result.select();
    result.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + result.value);
}


// add eventlistener for all buttons
for (const button of buttons) {
    button.addEventListener('click', showHashtags);
}

copyButton.addEventListener('click', copyHashtahs);



