/**
 * Created by Nicolas on 2/23/2016.
 */

export default class ClickHandler {
    constructor() {
        document.getElementById("beginButton").addEventListener("click", function() {
            ClickHandler.fadeButton()
        });
    }

    static fadeButton() {
        document.getElementById("classyJoke").value = "hidden";
    }
}
