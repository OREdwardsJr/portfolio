/* 
    • Page Loads
    • | blinks 3 times
    • Typing commences
    • Add typo where it goes back to fix itself
    • Launches "Hello World"
    • Transitions into website
*/
const introContent = document.querySelector("#intro-content");
const introTextContent = document.querySelector("#intro-text-content");
const introHello = document.querySelector("#intro-hello");
const enterSite = document.querySelector("#enter-site");

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

