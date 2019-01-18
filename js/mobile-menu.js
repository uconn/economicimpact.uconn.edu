document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById('menuButton').onclick = function(){
    //     document.getElementById('mobileMenu').classList.toggle("expanded");
    // };
    document.getElementById('mobileMenu').onclick = function(){
        if (document.documentElement.clientWidth <= 1009){
            document.getElementById('mobileMenu').classList.toggle("expanded");
        }
    }
})