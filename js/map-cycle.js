var last_hovered = 'waterbury';
var hovered_element = 'waterbury';
var autoLoop = true;
var selected_point;
var mapBreakpoint = 946;

var hover_dictionary = {
    'storrs' : {'items' : ['storrs_row','storrs'], 'next' : 'health'},
    'health' : {'items' : ['health_row','uconn-health'], 'next' : 'hartford'},
    'hartford' : {'items' : ['hartford_row','hartford'], 'next' : 'avery'},
    'avery' : {'items' : ['avery_point_row','avery-point'], 'next' : 'stamford'},
    'stamford' : {'items' : ['stamford_row','stamford'], 'next' : 'waterbury'},
    'waterbury' : {'items' : ['waterbury_row','waterbury'], 'next' : 'storrs'}
};

function HoverCycle(){
    if (document.documentElement.clientWidth >= mapBreakpoint){
        if (autoLoop){
            last_hovered = hovered_element;
            hovered_element = hover_dictionary[hovered_element]['next'];
            document.getElementById(hover_dictionary[last_hovered]['items'][0]).classList.remove('hovered');
            document.getElementById(hover_dictionary[last_hovered]['items'][1]).classList.remove('hovered');
            document.getElementById(hover_dictionary[hovered_element]['items'][0]).classList.add('hovered');
            document.getElementById(hover_dictionary[hovered_element]['items'][1]).classList.add('hovered');
        }
        setTimeout(HoverCycle,3000)
    }
    else{
        last_hovered = hovered_element;
        document.getElementById(hover_dictionary[last_hovered]['items'][0]).classList.remove('hovered');
        document.getElementById(hover_dictionary[last_hovered]['items'][1]).classList.remove('hovered');
    }
};

function MouseOn(){
    last_hovered = hovered_element;
    hovered_element = selected_point;
    document.getElementById(hover_dictionary[last_hovered]['items'][0]).classList.remove('hovered');
    document.getElementById(hover_dictionary[last_hovered]['items'][1]).classList.remove('hovered');
    document.getElementById(hover_dictionary[hovered_element]['items'][0]).classList.add('hovered');
    document.getElementById(hover_dictionary[hovered_element]['items'][1]).classList.add('hovered');
    autoLoop = false;
}

document.addEventListener('DOMContentLoaded', function() {
    if(document.documentElement.clientWidth >= mapBreakpoint){
        document.getElementById('storrs_row').onmouseover = function () {
            if (autoLoop == false){
                selected_point = 'storrs';
                MouseOn();
            }
        };
        document.getElementById('storrs').onmouseover = function() {
            if (autoLoop == false){
                selected_point = 'storrs';
                MouseOn();
            }
        };
        document.getElementById('uconn-health').onmouseover = function() {
            if (autoLoop == false){
                selected_point = 'health';
                MouseOn();
            }
        };
        document.getElementById('health_row').onmouseover = function() {
            if (autoLoop == false){
                selected_point = 'health';
                MouseOn();
            }
        };
        document.getElementById('hartford').onmouseover = function() {
            if (autoLoop == false){
                selected_point = 'hartford';
                MouseOn();
            }
        };
        document.getElementById('hartford_row').onmouseover = function() {
            if (autoLoop == false){
                selected_point = 'hartford';
                MouseOn();
            }
        }; 
        document.getElementById('avery-point').onmouseover = function() {
            if (autoLoop == false) {
                selected_point = 'avery';
                MouseOn();
            }
        };
        document.getElementById('avery_point_row').onmouseover = function() {
            if (autoLoop == false) {
                selected_point = 'avery';
                MouseOn();
            }
        };
        document.getElementById('stamford').onmouseover = function() {
            if (autoLoop == false){
                selected_point = 'stamford';
                MouseOn();
            }
        };
        document.getElementById('stamford_row').onmouseover = function() {
            if (autoLoop == false){
                selected_point = 'stamford';
                MouseOn();
            }
        };
        document.getElementById('stamford').onmouseover = function() {
            if (autoLoop == false) {
                selected_point = 'stamford';
                MouseOn();
            }
        };
        document.getElementById('waterbury').onmouseover = function() {
            if (autoLoop == false){
                selected_point = 'waterbury';
                MouseOn();
            }
        };
        document.getElementById('waterbury_row').onmouseover = function() {
            if (autoLoop == false){
                selected_point = 'waterbury';
                MouseOn();
            }
        };
        document.getElementById('map_container').onmouseleave = function() {
            //console.log("Mouse leaving map container")
            autoLoop = true;
        };
        document.getElementById('map_container').onmouseenter = function() {
            //console.log("Mouse entered map container")
            autoLoop=false;
        };
        HoverCycle();
    }
});

