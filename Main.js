// ==UserScript==
// @name         GoGoAnime.io - Costum Style
// @namespace    https://github.com/Diablosito33/GoGoAnime.Io-CustomStyle
// @version      1.0.2
// @description  Made with CSS+JS to alternatively custom web page style
// @author       Diablosito33
// @homepageURL  https://github.com/Diablosito33/GoGoAnime.Io-CustomStyle
// @updateURL    https://raw.githubusercontent.com/Diablosito33/GoGoAnime.Io-CustomStyle/master/Main.js
// @downloadURL  https://raw.githubusercontent.com/Diablosito33/GoGoAnime.Io-CustomStyle/master/Main.js
// @match        https://www9.gogoanime.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var flotta = document.getElementsByClassName('favorites_book')[0].parentNode;

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});

var elementA = document.createElement("input");
    elementA.setAttribute("type", "button");
    elementA.setAttribute("value", "invert");
    elementA.setAttribute("name", "button3");
    elementA.setAttribute("onclick", "foo()");
    flotta.appendChild(elementA);

/* Read
YESSSSSSSSSSSSSSSSS
https://css-tricks.com/use-button-element/
*/
    // Your code here...
})();
