/**
 * Created by Jason on 2018/3/16.
 */
//current position
var neirongpos = 0;
//number of slides
var neirongtotalSlides = $('#neirongtushu-warp ul li').length;
//get the slide width
var neirongsliderWidth = $('#neirongtushu-warp').width();


$(document).ready(function(){


    /*****************
     BUILD THE SLIDER
     *****************/
    //set width to be 'x' times the number of slides
    $('#neirongtushu-warp ul#tushuslider').width(neirongsliderWidth*neirongtotalSlides);

    //next slide
    $('#neirongtushunext').click(function(){
        neirongtushuslideRight();
    });

    //previous slide
    $('#neirongtushupre').click(function(){
        neirongtushuslideLeft();
    });



    /*************************
     //*> OPTIONAL SETTINGS
     ************************/
        //automatic slider
    var neirongtushuautoSlider = setInterval(neirongtushuslideRight, 3000);

    //for each slide
    $.each($('#neirongtushu-warp ul li'), function() {
        // //set its color
        // var c = $(this).attr("data-color");
        // $(this).css("background",c);

        //create a pagination
        var li = document.createElement('li');
        $('#neirongtushuextra-wrap ul').append(li);
    });

    //counter
    neirongtushucountSlides();

    //pagination
    neirongtushuextra();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#neirongtushu-warp').hover(
        function(){ $(this).addClass('active'); clearInterval(neirongtushuautoSlider); },
        function(){ $(this).removeClass('active'); neirongtushuautoSlider = setInterval(neirongtushuslideRight, 3000); }
    );



});//DOCUMENT READY



/***********
 SLIDE LEFT
 ************/
function neirongtushuslideLeft(){
    neirongpos--;
    if(neirongpos==-1){ neirongpos = neirongtotalSlides-1; }
    $('#neirongtushu-warp ul#tushuslider').css('left', -(neirongsliderWidth*neirongpos));

    //*> optional
    neirongtushucountSlides();
    neirongtushuextra();
}


/************
 SLIDE RIGHT
 *************/
function neirongtushuslideRight(){
    neirongpos++;
    if(neirongpos==neirongtotalSlides){ neirongpos = 0; }
    $('#neirongtushu-warp ul#tushuslider').css('left', -(neirongsliderWidth*neirongpos));

    //*> optional
    neirongtushucountSlides();
    neirongtushuextra();
}




/************************
 //*> OPTIONAL SETTINGS
 ************************/
function neirongtushucountSlides(){
    $('#neirongtushucounter').html(neirongpos+1 + ' / ' + neirongtotalSlides);
}

function neirongtushuextra(){
    $('#neirongtushuextra-wrap ul li').removeClass('active');
    $('#neirongtushuextra-wrap ul li:eq('+neirongpos+')').addClass('active');
}