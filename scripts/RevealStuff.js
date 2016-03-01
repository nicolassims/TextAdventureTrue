/**
 * Created by Administrator on 2/26/2016.
 */

export default class RevealStuff {
    static revealFirstText() {
        document.getElementById("beginButton").addEventListener("click", function() {document.getElementById("firstText").style.display = "block"}, false);
    }
}
