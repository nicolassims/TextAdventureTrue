/**
 * Created by Administrator on 3/3/2016.
 */

export default class AddNames {

    static addElement () {
        document.getElementById("heroButton").addEventListener("click", function() {
            let newDiv = document.createElement("div");
            let heroName = "> " + document.getElementById('heroName').value;
            let newHeroName = document.createTextNode(heroName);
            newDiv.appendChild(newHeroName);
            let heroNameList = document.getElementById("heroNameList");
            document.body.insertBefore(newHeroName, heroNameList);
        }, false);

        document.getElementById("loserButton").addEventListener("click", function() {
            let newDiv = document.createElement("div");
            let loserName = "> " + document.getElementById('loserName').value;
            let newLoserName = document.createTextNode(loserName);
            newDiv.appendChild(newLoserName);
            let loserNameList = document.getElementById("loserNameList");
            document.body.insertBefore(newLoserName, loserNameList);
        }, false);
    }

    static addHeroName() {
        document.getElementById("heroButton").addEventListener("click", function() {
            let div = document.getElementById('heroNameList');
            let heroName = "> " + document.getElementById('heroName').value;
            div.innerHTML = div.innerHTML + heroName;
        }, false);
    }

    static addLoserName() {
        document.getElementById("loserButton").addEventListener("click", function() {
            let div = document.getElementById('loserNameList');
            let loserName = "> " + document.getElementById('loserName').value;
            div.innerHTML = div.innerHTML + loserName;
        }, false);
    }
}