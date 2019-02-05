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
    "news" : {"element" : "newsHighlightTarget", "nav" : "nav-menu-item-18"},
    "report" : {"element" : "reportHighlightTarget", "nav" : "nav-menu-item-19"},
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

    document.getElementById('research-link').addEventListener('click', function(event){
        event.preventDefault();
        jQuery('html,body').animate({scrollTop: jQuery('#research').offset().top}, 1000);
    });
    
    document.getElementById('community-link').addEventListener('click',function(event){
        event.preventDefault();
        jQuery('html,body').animate({scrollTop: jQuery('#community').offset().top}, 1000);
    });
    
    document.getElementById('impact-link').addEventListener('click', function(event){
        event.preventDefault();
        jQuery('html,body').animate({scrollTop: jQuery('#impact-by-campus').offset().top}, 1000);
    });
    
    document.getElementById('health-link').addEventListener('click', function(event){
        event.preventDefault();
        jQuery('html,body').animate({scrollTop: jQuery('#_health').offset().top}, 1000);
    });
    
    document.getElementById('news-link').addEventListener('click', function(event){
        event.preventDefault();
        jQuery('html,body').animate({scrollTop: jQuery('#_news').offset().top}, 1000);
    });
    
    document.getElementById('report-link').addEventListener('click', function(event){
        event.preventDefault();
        jQuery('html,body').animate({scrollTop: jQuery('#_full-report').offset().top}, 1000);
    });
    
    document.getElementById('contact-link').addEventListener('click', function(event){
        event.preventDefault();
        jQuery('html,body').animate({scrollTop: jQuery('#contact').offset().top}, 1000);
    });

    document.addEventListener("scroll", highlight)
});



// function researchScroll() {
//     jQuery('html,body').animate({scrollTop: jQuery('#research').offset().top}, 1000);
// }

// function communityScroll() {
//     jQuery('html,body').animate({scrollTop: jQuery('#community').offset().top}, 1000);
// }

// function impactScroll() {
//     jQuery('html,body').animate({scrollTop: jQuery('#impact-by-campus').offset().top}, 1000);
// }

// function healthScroll() {
//     jQuery('html,body').animate({scrollTop: jQuery('#_health').offset().top}, 1000);
// }

// function newsScroll() {
//     jQuery('html,body').animate({scrollTop: jQuery('#_news').offset().top}, 1000);
// }

// function reportScroll() {
//     jQuery('html,body').animate({scrollTop: jQuery('#_full-report').offset().top}, 1000);
// }

// function contactScroll() {
//     jQuery('html,body').animate({scrollTop: jQuery('#contact').offset().top}, 1000);
// }