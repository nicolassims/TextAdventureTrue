/*  AUTHOR: Nicolas Sims
 *  VERSION: 1
 *  CREATED: 2.18.2016
 *  PURPOSE: Create a text adventure.
 */

'use strict';

import HideStuff from './HideStuff';
import RevealStuff from './RevealStuff';
import AddNames from './AddNames';

class main {
    constructor() {
        AddNames.addHeroName();
        AddNames.addLoserName();
        new main.playGame();
    }

    static playGame() {
        HideStuff.hideAll();
        RevealStuff.revealRestart();
        HideStuff.hideIntroItems();
        RevealStuff.revealFirstStuff();
        RevealStuff.revealCheckboxResults();
        HideStuff.hideFirstStuff();
        HideStuff.hideCheckboxResults();
        RevealStuff.revealNameInput();
        document.getElementById("loserButton").addEventListener("click", function() {
            return main.playGame();
        }, false);
        document.getElementById("heroButton").addEventListener("click", function() {
            return main.playGame();
        }, false);
    }
}

window.onload = function() {
    new main();
};