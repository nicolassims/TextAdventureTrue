/**
 * Created by Nicolas on 2/23/2016.
 */

export default class ClickHandler {
    constructor() {
        document.getElementById("beginButton").addEventListener("click", function() {ClickHandler.fadeButton()}, false);
    }

    static fadeButton() {
        document.getElementById("420").style.visibility = "hidden";
    }
}
