/*  AUTHOR: Nicolas Sims
 *  VERSION: 1
 *  CREATED: 2.18.2016
 *  PURPOSE: Create a text adventure.
 */

'use strict';

//import ClickHandler from './ClickHandler.js';

class main {
    constructor() {
        //new ClickHandler.HideButton();
        document.getElementById("beginButton").addEventListener("click", function(){ console.log("hello world")})
    }
}

window.onload = function() {
    new main();
}