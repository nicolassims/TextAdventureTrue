/**
 * Created by Owner on 2/29/2016.
 */


export default class CheckBoxHandler {
    constructor() {

    }

    static handleCheckboxes() {
        document.getElementById("secondButton").addEventListener("click", function() {
            let aChecked = document.getElementById("firstInputA").checked;
            let bChecked = document.getElementById("firstInputB").checked;
            if (aChecked == true && bChecked == true) {
                let whatChecked = "both";
            } else if (aChecked == true || bChecked == true) {
                if (aChecked == true) {
                    let whatChecked = "aChecked";
                } else {
                    let whatChecked = "bChecked";
                }
            } else {
                let whatChecked = "noChecked";
            }
        }, false);

    };
}