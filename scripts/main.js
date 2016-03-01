/*  AUTHOR: Nicolas Sims
 *  VERSION: 1
 *  CREATED: 2.18.2016
 *  PURPOSE: Create a text adventure.
 */

'use strict';

import HideStuff from './HideStuff.js';
import RevealStuff from './RevealStuff';

class main {
    constructor() {
        HideStuff.hideFirstText();
        HideStuff.hideBeginningItems();
        RevealStuff.revealFirstText();
    }
}

window.onload = function() {
    new main();
};