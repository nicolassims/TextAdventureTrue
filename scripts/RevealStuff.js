/**
 * Created by Administrator on 2/26/2016.
 */

export default class RevealStuff {
    static revealFirstStuff() {
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("firstText").style.display = "block"}, false);
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("leftInput").style.display = "block"}, false);
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("rightInput").style.display = "block"}, false);
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("secondButton").style.display = "block"}, false);
    }

    static revealSecondStuff() {

    }
}
