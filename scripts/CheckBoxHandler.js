/**
 * Created by Owner on 2/29/2016.
 */


export default class CheckBoxHandler {
    static handleSecondCheckboxes() {
        document.getElementById("secondButton").addEventListener("click", function() {
            let x = document.getElementById("firstInputA").checked;
            let y = document.getElementById("firstInputB").checked;
            if (x == true && y == true) {
                RevealStuff.revealSecondStuff("both");
            } else if (x == true || y == true) {
                if (x == true) {
                    RevealStuff.revealSecondStuff("xChecked");
                } else {
                    RevealStuff.revealSecondStuff("yChecked");
                }
            } else {
                RevealStuff.revealSecondStuff("none");
            }
        }, false);
    };
}