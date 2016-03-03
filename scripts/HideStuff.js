/**
 * Created by Owner on 2/28/2016.
 */

export default class HideStuff {
    static hideAll() {
        document.getElementById("firstText").style.display = "none";
        document.getElementById("leftInput").style.display = "none";
        document.getElementById("rightInput").style.display = "none";
        document.getElementById("secondButton").style.display = "none";
        document.getElementById("bothDirections").style.display = "none";
        document.getElementById("rightDirection").style.display = "none";
        document.getElementById("leftDirection").style.display = "none";
        document.getElementById("noDirection").style.display = "none";
        document.getElementById("heroName").style.display = "none";
        document.getElementById("loserName").style.display = "none";
        document.getElementById("heroButton").style.display = "none";
        document.getElementById("loserButton").style.display = "none";
        document.getElementById("wentLeft").style.display = "none";
        document.getElementById("wentElsewhere").style.display = "none";
        document.getElementById("continueFromCheckboxResults").style.display = "none";
    }

    static hideIntroItems() {
        document.getElementById("beginButton").addEventListener("click", function () {
            document.getElementById("beginButton").style.display = "none";
            document.getElementById("prompt").style.display = "none";
        }, false);
    }

    static hideFirstStuff() {
        document.getElementById("secondButton").addEventListener("click", function() {
            document.getElementById("firstText").style.display = "none";
            document.getElementById("leftInput").style.display = "none";
            document.getElementById("rightInput").style.display = "none";
            document.getElementById("secondButton").style.display = "none";
        }, false);
    }

    static hideCheckboxResults() {
        document.getElementById("continueFromCheckboxResults").addEventListener("click", function () {
            document.getElementById("bothDirections").style.display = "none";
            document.getElementById("rightDirection").style.display = "none";
            document.getElementById("leftDirection").style.display = "none";
            document.getElementById("noDirection").style.display = "none";
            document.getElementById("continueFromCheckboxResults").style.display = "none";
        }, false);
    }

}