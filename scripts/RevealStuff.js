/**
 * Created by Administrator on 2/26/2016.
 */

export default class RevealStuff {
    static revealFirstText() {
        let visibleBeginningStuff = document.getElementById("beginButton").style.display;
        if (visibleBeginningStuff == "none") {
            document.getElementById("firstText").style.display = "block";
        }
    }
}
