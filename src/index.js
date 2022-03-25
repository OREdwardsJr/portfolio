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
    enterSite = document.getElementById("enter-site");

enterSite.addEventListener("click", () => {
    if (siteOpened) {
        introContent.style = "visibility: hidden";
    } else {
        entryError.style = "visibility: normal";
    };
});

