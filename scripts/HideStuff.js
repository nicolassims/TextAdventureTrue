/**
 * Created by Owner on 2/28/2016.
 */

export default class HideStuff {
    static hideBeginningStuff() {
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("beginButton").style.display = "none"}, false);
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("prompt").style.display = "none"}, false);
    }

    static hideFirstStuff() {
        document.getElementById("firstText").style.display = "none";
        document.getElementById("leftInput").style.display = "none";
        document.getElementById("rightInput").style.display = "none";
        document.getElementById("secondButton").style.display = "none";
        document.getElementById("bothDirections").style.display = "none";
        document.getElementById("rightDirection").style.display = "none";
        document.getElementById("leftDirection").style.display = "none";
        document.getElementById("noDirection").style.display = "none";
    }
}