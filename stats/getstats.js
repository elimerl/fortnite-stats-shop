function getRequest(username,platform){
 $.get("https://fortnite-api.com/v1/stats/br/v2?name="+username+"&accountType="+platform+"&image=all", function(data, status){
     console.log(data);
    console.log(data.data.stats.all.overall.wins)
    getElById("tw").innerHTML += data.data.stats.all.overall.wins
    console.log(data.data.stats.all.solo.wins)
    getElById("sw").innerHTML += data.data.stats.all.solo.wins
    console.log(data.data.stats.all.duo.wins)
    getElById("dw").innerHTML += data.data.stats.all.duo.wins
    console.log(data.data.stats.all.squad.wins)
    getElById("qw").innerHTML += data.data.stats.all.squad.wins
    console.log(data.data.stats.all.overall.kills)
    getElById("te").innerHTML += data.data.stats.all.overall.kills
    console.log(data.data.stats.all.solo.kills)
    getElById("se").innerHTML += data.data.stats.all.solo.kills
    console.log(data.data.stats.all.duo.kills)
    getElById("de").innerHTML += data.data.stats.all.duo.kills
    console.log(data.data.stats.all.squad.kills)
    getElById("qe").innerHTML += data.data.stats.all.squad.kills
    console.log(data.data.stats.all.ltm.kills)
    getElById("le").innerHTML += data.data.stats.all.ltm.kills
    console.log(data.data.stats.all.ltm.wins)
    getElById("lw").innerHTML += data.data.stats.all.ltm.wins
    document.getElementsByClassName("statImage")[0].src = data.data.image;

 })
 document.getElementById("submit").disabled = true;
}
function resetButton(params) {
    document.getElementById("submit").disabled = false;
}
function getElById(id) {
    return document.getElementById(id);
}