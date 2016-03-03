/**
 * Created by Administrator on 3/3/2016.
 */

export default class AddNames {
    static addHeroName() {
        document.getElementById("heroButton").addEventListener("click", function() {
            let div = document.getElementById('heroName');
            let heroName = document.getElementById('heroName').value;
            div.innerHTML = div.innerHTML + heroName;
            console.log(heroName);
        }, false);
    }
}