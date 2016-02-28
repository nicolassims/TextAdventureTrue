/**
 * Created by Owner on 2/28/2016.
 */

export default class HideStuff {
    static hideBeginningItems() {
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("beginButton").style.display = "none"}, false);
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("prompt").style.display = "none"}, false);

    }
}