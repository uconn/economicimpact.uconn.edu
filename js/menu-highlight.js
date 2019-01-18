function isVisible(it) {
    var box = it.getBoundingClientRect();
    var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(box.bottom < 0 || box.top - screenHeight >= 0);
}

var idDict = {
    "research" : {"element" : "researchTitle", "nav" : "nav-menu-item-14"},
    "community" : {"element" : "communityTitle", "nav" : "nav-menu-item-15"},
    "impact" : {"element" : "impactTitle", "nav" : "nav-menu-item-16"},
    "health" : {"element" : "healthTitle", "nav" : "nav-menu-item-17"},
    "news" : {"element" : "newsTitle", "nav" : "nav-menu-item-18"},
    "report" : {"element" : "reportTitle", "nav" : "nav-menu-item-19"},
    "contact" : {"element" : "contactHighlightTarget", "nav" : "nav-menu-item-128"} 
}

var idList = ["research","community","impact","health","news","report","contact"]

document.addEventListener('DOMContentLoaded', function(){
    function removeHighlights() {
        for(y=0;y<idList.length;y++) {
            document.getElementById(idDict[idList[y]]["nav"]).classList.remove("active");
        };
    }

    function highlight() {
        for(i=0;i<idList.length;i++){
            if(isVisible(document.getElementById(idDict[idList[i]]["element"]))){
                removeHighlights();
                document.getElementById(idDict[idList[i]]["nav"]).classList.add("active");
            }
        }
    }

    document.getElementById("nav-menu-item-14").onclick = function() {
        removeHighlights();
        document.getElementById("nav-menu-item-14").classList.add("active");
    }

    document.getElementById("nav-menu-item-15").onclick = function() {
        removeHighlights();
        document.getElementById("nav-menu-item-15").classList.add("active");
    }

    document.getElementById("nav-menu-item-16").onclick = function() {
        removeHighlights();
        document.getElementById("nav-menu-item-16").classList.add("active");
    }

    document.getElementById("nav-menu-item-17").onclick = function() {
        removeHighlights();
        document.getElementById("nav-menu-item-17").classList.add("active");
    }

    document.getElementById("nav-menu-item-18").onclick = function() {
        removeHighlights();
        document.getElementById("nav-menu-item-18").classList.add("active");
    }

    document.getElementById("nav-menu-item-19").onclick = function() {
        removeHighlights();
        document.getElementById("nav-menu-item-19").classList.add("active");
    }

    document.getElementById("nav-menu-item-128").onclick = function() {
        removeHighlights();
        document.getElementById("nav-menu-item-128").classList.add("active");
    }

    document.addEventListener("scroll", highlight)
});