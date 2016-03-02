/**
 * Created by Owner on 2/29/2016.
 */

import RevealStuff from './RevealStuff';

export default class CheckBoxHandler {
    static handleCheckboxes() {
        document.getElementById("secondButton").addEventListener("click", function() {
            let leftChecked = document.getElementById("firstInputLeft").checked;
            let rightChecked = document.getElementById("firstInputRight").checked;
            console.log(leftChecked);
            console.log(rightChecked);
            if (leftChecked == true && rightChecked == true) {
                new RevealStuff("bothDirections").revealSecondStuff("bothDirections");
            } else if (leftChecked == true || rightChecked == true) {
                if (leftChecked == true) {
                    new RevealStuff('leftDirection').revealSecondStuff("leftDirection");
                } else {
                    new RevealStuff("rightDirection").revealSecondStuff("rightDirection");
                }
            } else {
                new RevealStuff("noDirection").revealSecondStuff("noDirection");
            }
        }, false);
    };
}