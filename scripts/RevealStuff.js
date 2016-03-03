/**
 * Created by Administrator on 2/26/2016.
 */

"use strict";

export default class RevealStuff {
    static revealFirstStuff() {
        document.getElementById("beginButton").addEventListener("click", function() {
            document.getElementById("firstText").style.display = "block";
            document.getElementById("leftInput").style.display = "block";
            document.getElementById("rightInput").style.display = "block";
            document.getElementById("secondButton").style.display = "block";
        }, false);
    }

    static revealCheckboxResults() {
        document.getElementById("secondButton").addEventListener("click", function() {
            let leftChecked = document.getElementById("firstInputLeft").checked;
            let rightChecked = document.getElementById("firstInputRight").checked;
            console.log(leftChecked);
            console.log(rightChecked);
            if (leftChecked == true && rightChecked == true) {
                document.getElementById("bothDirections").style.display = "block";
            } else if (leftChecked == true || rightChecked == true) {
                if (leftChecked == true) {
                    document.getElementById("leftDirection").style.display = "block";
                } else {
                    document.getElementById("rightDirection").style.display = "block";
                }
            } else {
                document.getElementById("noDirection").style.display = "block";
            }
            document.getElementById("continueFromCheckboxResults").style.display = "block";
        }, false);
    };

    static revealNameInput() {
        document.getElementById("continueFromCheckboxResults").addEventListener("click", function() {
            let leftChecked = document.getElementById("firstInputLeft").checked;
            let rightChecked = document.getElementById("firstInputRight").checked;
            if (leftChecked == true && rightChecked != true) {
                document.getElementById("wentLeft").style.display = "block";
                document.getElementById("heroName").style.display = "block";
                document.getElementById("heroButton").style.display = "block";
            } else {
                document.getElementById("wentElsewhere").style.display = "block";
                document.getElementById("loserName").style.display = "block";
                document.getElementById("loserButton").style.display = "block";
            }
        }, false);
    }
}
