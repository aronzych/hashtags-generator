const buttons = document.querySelectorAll('.categories__button');
const result = document.querySelector('.result__textarea');
let firstGenerate = true;

window.poland = ["polska1", "polska2", "polska3"];

function getRandomHashtags(hashtagsList, ammountOfHastags) {
    const randomHastags = hashtagsList.sort(() => .5 - Math.random()).slice(0, ammountOfHastags);
    const randomHastagsAmmount = randomHastags.slice(0, ammountOfHastags);

    const newList = hashtagsList.filter(function (el) {
        return randomHastagsAmmount.indexOf(el) < 0;
    });

    window.poland = newList;
    console.log(hashtagsList.length)

    if (hashtagsList.length === 0) { alert("ERROR: No more hashtags in database!") };


    const randomHastagsString =
        firstGenerate ? "#" + (randomHastagsAmmount.toString()).split(",").join(" #") : " #" + (randomHastagsAmmount.toString()).split(",").join(" #");


    return randomHastagsString;
}

function showHashtags(e) {

    const category = e.target.getAttribute("category");
    const hashtags = eval(category);
    const ammount = e.target.getAttribute("ammount");
    const type = e.target.getAttribute("type");

    if (type === "get") {
        result.value = getRandomHashtags(hashtags, ammount);
    }

    if (type === "add") {
        result.value += getRandomHashtags(hashtags, ammount);
        firstGenerate = false;
    }


}


for (const button of buttons) {
    button.addEventListener('click', showHashtags);
}



