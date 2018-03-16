/**
 * Created by Jason on 2018/3/16.
 */
/**
 * Created by Jason on 2018/3/16.
 */
/**
 * Created by Jason on 2018/3/16.
 */
//current position
var neirongyouxipos = 0;
//number of slides
var neirongyouxitotalSlides = $('#neirongyouxi-wrap ul li').length;
//get the slide width
var neirongyouxisliderWidth = $('#neirongyouxi-wrap').width();


$(document).ready(function(){


    /*****************
     BUILD THE SLIDER
     *****************/
    //set width to be 'x' times the number of slides
    $('#neirongyouxi-wrap ul#youxislider').width(neirongyouxisliderWidth*neirongyouxitotalSlides);

    //next slide
    $('#neirongyouxinext').click(function(){
        neirongyouxislideRight();
    });

    //previous slide
    $('#neirongyouxipre').click(function(){
        neirongyouxislideLeft();
    });



    /*************************
     //*> OPTIONAL SETTINGS
     ************************/
        //automatic slider
    var neirongyouxiautoSlider = setInterval(neirongyouxislideRight, 3000);

    //for each slide
    $.each($('#neirongyouxi-wrap ul li'), function() {
        // //set its color
        // var c = $(this).attr("data-color");
        // $(this).css("background",c);

        //create a pagination
        var li = document.createElement('li');
        $('#neirongyouxiextra-wrap ul').append(li);
    });

    //counter
    neirongyouxicountSlides();

    //pagination
    neirongyouxiextra();

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#neirongyouxi-wrap').hover(
        function(){ $(this).addClass('active'); clearInterval(neirongyouxiautoSlider); },
        function(){ $(this).removeClass('active'); neirongyouxiautoSlider = setInterval(neirongyouxislideRight, 3000); }
    );



});//DOCUMENT READY



/***********
 SLIDE LEFT
 ************/
function neirongyouxislideLeft(){
    neirongyouxipos--;
    if(neirongyouxipos==-1){ neirongyouxipos = neirongyouxitotalSlides-1; }
    $('#neirongyouxi-wrap ul#youxislider').css('left', -(neirongyouxisliderWidth*neirongyouxipos));

    //*> optional
    neirongyouxicountSlides();
    neirongyouxiextra();
}


/************
 SLIDE RIGHT
 *************/
function neirongyouxislideRight(){
    neirongyouxipos++;
    if(neirongyouxipos==neirongyouxitotalSlides){ neirongyouxipos = 0; }
    $('#neirongyouxi-wrap ul#youxislider').css('left', -(neirongyouxisliderWidth*neirongyouxipos));

    //*> optional
    neirongyouxicountSlides();
    neirongyouxiextra();
}




/************************
 //*> OPTIONAL SETTINGS
 ************************/
function neirongyouxicountSlides(){
    $('#neirongyouxicounter').html(neirongyouxipos+1 + ' / ' + neirongyouxitotalSlides);
}

function neirongyouxiextra(){
    $('#neirongyouxiextra-wrap ul li').removeClass('active');
    $('#neirongyouxiextra-wrap ul li:eq('+neirongyouxipos+')').addClass('active');
}