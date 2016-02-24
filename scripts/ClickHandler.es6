/**
 * Created by Nicolas on 2/23/2016.
 */

export default class ClickHandler {
    constructor() {
        document.getElementById("beginButton").addEventListener("click", function() {ClickHandler.FadeButton()})
    }

    static FadeButton() {
        document.getElementById("classyJoke").value = "hidden";
    }
}
