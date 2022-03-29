const introContent = document.querySelector("#intro-content");
const introTextContent = document.querySelector("#intro-text-content");
const introHello = document.querySelector("#intro-hello");
const enterSite = document.querySelector("#enter-site");
const introSection = document.querySelectorAll(".intro-section");
const skipIntro = document.querySelector("#skip-intro");
const masterContainer = document.querySelector("#master-container");

var timePerLetter = 35,
    text = document.createTextNode('')
    textContentCopy = introTextContent.textContent,
    siteOpened = false;

introTextContent.textContent = ""

function printOut(str) {
  var i = 0;
  (function main() {
    var char = str[i++]
    introTextContent.textContent += char;
    if (char === "|") {
        setTimeout(() => {introTextContent.textContent = introTextContent.textContent.slice(0, -1)}, 30)
    }
    if (i < str.length) {
      setTimeout(main, timePerLetter);
    }
    if (i == str.length - 1) {
        siteOpened = true;
    }
  }
  )();
}

printOut(textContentCopy);

const entryError = document.getElementById("intro-footer"),
    runScript = document.getElementById("intro-run-script");

function enterPortfolio(siteOpened=siteOpened) {
    if (siteOpened) {
        introContent.style = "visibility: hidden";
        introHello.style = "visibility: normal";
        enterSite.style = "visibility: normal";
        document.body.style = "background-image: url(../imgs/intro-bg.png);"
    } else {
        entryError.style = "visibility: normal";
    };
}

runScript.addEventListener("click", () => {
    enterPortfolio(siteOpened);
});

function hideIntro() {
    for (let i = 0; i < introSection.length; i++) {
        introSection[i].style = "visibility: hidden;";
    }
    document.body.style = "background-image: none;";
    masterContainer.style = "visibility: normal;"
}

enterSite.addEventListener("click", () => hideIntro());
skipIntro.addEventListener("click", () => hideIntro());

// Testing - Hides intro
let testing = false;
if (testing) hideIntro();