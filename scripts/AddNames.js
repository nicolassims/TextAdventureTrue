/**
 * Created by Administrator on 3/3/2016.
 */

export default class AddNames {
    static addHeroName() {
        document.getElementById("heroButton").addEventListener("click", function() {
            let div = document.getElementById('heroNameList');
            let heroName = "> " + document.getElementById('heroName').value + "<br>";
            div.innerHTML = div.innerHTML + heroName;
        }, false);
    }

    static addLoserName() {
        document.getElementById("loserButton").addEventListener("click", function() {
            let div = document.getElementById('loserNameList');
            let loserName = "> " + document.getElementById('loserName').value + "<br>";
            div.innerHTML = div.innerHTML + loserName; 
        }, false);
    }
}