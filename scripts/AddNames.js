/**
 * Created by Administrator on 3/3/2016.
 */

export default class AddNames {
    static addHeroName() {
        document.getElementById("heroButton").addEventListener("click", function() {
            let heroNameList = document.getElementById('heroNameList');
            let heroName = "> " + document.getElementById('heroName').value + "<br>";
            heroNameList.innerHTML = heroNameList.innerHTML + heroName;
            console.log(heroNameList.innerHTML)
        }, false);
    }

    static addLoserName() {
        document.getElementById("loserButton").addEventListener("click", function() {
            let loserNameList = document.getElementById('loserNameList');
            let loserName = "> " + document.getElementById('loserName').value + "<br>";
            loserNameList.innerHTML = loserNameList.innerHTML + loserName;
            console.log(loserNameList.innerHTML)
        }, false);
    }
}