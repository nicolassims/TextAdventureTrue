/**
 * Created by Administrator on 2/26/2016.
 */

export default class RevealStuff {
    constructor() {

    }

    static revealFirstStuff() {
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("firstText").style.display = "block"}, false);
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("leftInput").style.display = "block"}, false);
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("rightInput").style.display = "block"}, false);
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("secondButton").style.display = "block"}, false);
    }

     static revealSecondStuff(whatChecked) {
        if (whatChecked == "both") {
            document.getElementById("bothDirections").style.display = "block";
        } else if (whatChecked == "aChecked") {
            document.getElementById("rightDirection").style.display = "block";
        } else if (whatChecked == "bChecked"){
            document.getElementById("leftDirection").style.display = "block";
        } else {
            document.getElementById("noDirection").style.display = "block";
        }
    }
}
