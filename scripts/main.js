/*  AUTHOR: Nicolas Sims
 *  VERSION: 1
 *  CREATED: 2.18.2016
 *  PURPOSE: Create a text adventure.
 */

'use strict';

import HideStuff from './HideStuff.js';
import RevealStuff from './RevealStuff';
import CheckBoxHandler from './CheckBoxHandler.js';

class main {
    constructor() {
        HideStuff.hideFirstStuff();
        HideStuff.hideBeginningStuff();
        RevealStuff.revealFirstStuff();
        CheckBoxHandler.handleSecondCheckboxes();
    }
}

window.onload = function() {
    new main();
};