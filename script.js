
let currentPage = 1;

let answers = {
    day: "",
    song: "",
    happy: ""
};

// CHANGE PAGE
function nextPage(page) {
    document.querySelectorAll(".page").forEach(section => {
        section.classList.remove("active");
    });

    const next = document.getElementById("page" + page);

    if (next) {
        next.classList.add("active");
        currentPage = page;
    }
}

// QUESTION 1
function saveAnswer(key, value) {
    answers[key] = value;
    nextPage(3);
}

// QUESTION 2 AND 3
function saveText(key, next) {
    const input = document.getElementById(key);
    const value = input.value.trim();

    if (value === "") {
        alert("Please write something first!");
        return;
    }

    answers[key] = value;
    nextPage(next);
}

// OPEN LETTER ON SAME PAGE
function openLetter() {
    document.querySelectorAll(".page").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById("page6").classList.add("active");
}

// BACK TO THANK YOU PAGE
function backToThankYou() {
    nextPage(5);
}

// MAKE FUNCTIONS AVAILABLE
window.nextPage = nextPage;
window.saveAnswer = saveAnswer;
window.saveText = saveText;
window.openLetter = openLetter;
window.backToThankYou = backToThankYou;
function letterResponse(answer) {

    if (answer === "Yes") {
        alert("Yay! I'm glad you liked it! 💖");
    } else {
        alert("That's okay! Thanks for being honest 😊");
    }

}

window.letterResponse = letterResponse;