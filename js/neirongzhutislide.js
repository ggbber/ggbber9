/**
 * Created by Jason on 2018/3/16.
 */
/**
 * Created by Jason on 2018/3/16.
 */
//current position
var neirongzhutipos = 0;
//number of slides
var neirongzhutitotalSlides = $('#neirongzhuti-wrap ul li').length;
//get the slide width
var neirongzhutisliderWidth = $('#neirongzhuti-wrap').width();


$(document).ready(function(){


    /*****************
     BUILD THE SLIDER
     *****************/
    //set width to be 'x' times the number of slides
    $('#neirongzhuti-wrap ul#zhutislider').width(neirongzhutisliderWidth*neirongzhutitotalSlides);

    //next slide
    $('#neirongzhutinext').click(function(){
        neirongzhutislideRight();
    });

    //previous slide
    $('#neirongzhutipre').click(function(){
        neirongzhutislideLeft();
    });



    /*************************
     //*> OPTIONAL SETTINGS
     ************************/
        //automatic slider
    var neirongzhutiautoSlider = setInterval(neirongzhutislideRight, 3000);

    //for each slide
    $.each($('#neirongzhuti-wrap ul li'), function() {
        // //set its color
        // var c = $(this).attr("data-color");
        // $(this).css("background",c);

        //create a pagination
        var li = document.createElement('li');
        $('#neirongzhutiextra-wrap ul').append(li);
    });

    //counter
    neirongzhuticountSlides();

    //pagination
    neirongzhutiextra();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#neirongzhuti-wrap').hover(
        function(){ $(this).addClass('active'); clearInterval(neirongzhutiautoSlider); },
        function(){ $(this).removeClass('active'); neirongzhutiautoSlider = setInterval(neirongzhutislideRight, 3000); }
    );



});//DOCUMENT READY



/***********
 SLIDE LEFT
 ************/
function neirongzhutislideLeft(){
    neirongzhutipos--;
    if(neirongzhutipos==-1){ neirongzhutipos = neirongzhutitotalSlides-1; }
    $('#neirongzhuti-wrap ul#zhutislider').css('left', -(neirongzhutisliderWidth*neirongzhutipos));

    //*> optional
    neirongzhuticountSlides();
    neirongzhutiextra();
}


/************
 SLIDE RIGHT
 *************/
function neirongzhutislideRight(){
    neirongzhutipos++;
    if(neirongzhutipos==neirongzhutitotalSlides){ neirongzhutipos = 0; }
    $('#neirongzhuti-wrap ul#zhutislider').css('left', -(neirongzhutisliderWidth*neirongzhutipos));

    //*> optional
    neirongzhuticountSlides();
    neirongzhutiextra();
}




/************************
 //*> OPTIONAL SETTINGS
 ************************/
function neirongzhuticountSlides(){
    $('#neirongzhuticounter').html(neirongzhutipos+1 + ' / ' + neirongzhutitotalSlides);
}

function neirongzhutiextra(){
    $('#neirongzhutiextra-wrap ul li').removeClass('active');
    $('#neirongzhutiextra-wrap ul li:eq('+neirongzhutipos+')').addClass('active');
}